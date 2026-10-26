"""Check source uniqueness and generated site links before deployment (stdlib only)."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / '_site'
errors = []
urls = {}
for folder in ('_posts', '_pages', '_portfolio', '_publications'):
    for path in (ROOT / folder).rglob('*'):
        if path.suffix not in ('.md', '.html'):
            continue
        text = path.read_text(encoding='utf-8-sig')
        if not text.startswith('---\n'):
            continue
        metadata = text.split('---', 2)[1]
        if re.search(r'^published:\s*false\s*$', metadata, re.M):
            continue
        match = re.search(r'^permalink:\s*[\"\']?([^\n\"\']+)', metadata, re.M)
        if match:
            url = match[1].strip().rstrip('/')
            if url in urls:
                errors.append(f'Duplicate URL: {path.relative_to(ROOT)} and {urls[url]}')
            urls[url] = path.relative_to(ROOT)

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = set()
        self.images = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        for key in ('href', 'src', 'poster'):
            if attrs.get(key):
                self.links.append(attrs[key])
        if tag == 'img' and 'alt' not in attrs:
            self.images.append(attrs.get('src'))

if not SITE.is_dir():
    errors.append('Build output missing: run bundle exec jekyll build first.')
else:
    count = 0
    for path in SITE.rglob('*.html'):
        # Vendor viewer assets are maintained upstream, not authored website pages.
        if path.relative_to(SITE).parts[0] in ('pdfjs', 'talkmap'):
            continue
        text = path.read_text(encoding='utf-8')
        doc = Document()
        doc.feed(text)
        count += 1
        for url in doc.links:
            split = urlsplit(url)
            if split.netloc and split.netloc.lower() not in ('wendong-huo.github.io', 'localhost:4000', '127.0.0.1:4000'):
                continue
            if split.scheme and split.scheme not in ('https', 'http'):
                continue
            if not split.path:
                continue
            target = (SITE / unquote(split.path).lstrip('/')) if split.path.startswith('/') else (path.parent / unquote(split.path))
            if not (target.is_file() or (target / 'index.html').is_file() or Path(str(target)+'.html').is_file()):
                errors.append(f'{path.relative_to(SITE)}: missing {url}')
        for image in doc.images:
            errors.append(f'{path.relative_to(SITE)}: image missing alt: {image}')
    print(f'Checked {count} generated pages and {len(urls)} explicit source URLs.')
    for forbidden in ('temp', '新建文件夹', 'docs', 'scripts', 'tmp', 'files/thesis-defense-slides.pptx'):
        if (SITE / forbidden).exists():
            errors.append(f'Unintended publish path: {forbidden}')
if errors:
    unique = sorted(set(errors))
    print('\n'.join(unique[:40]))
    if len(unique) > 40:
        print(f'{len(unique)-40} further errors omitted; fix shared templates first.')
    sys.exit(1)
print('PASS: no duplicate published URLs, missing local links, missing image alt, or excluded directories.')
