# Wendong Huo — academic website

Personal academic website built with Jekyll, based on AcademicPages / Minimal Mistakes.

## Local preview

Ruby 3.2 and Bundler are required. Install dependencies with `bundle install`, then run:

```sh
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open http://localhost:4000. For a production build and internal-link validation:

```sh
bundle exec jekyll build
python3 scripts/check_site.py
```

## Edit content

- `_pages/about.md`: homepage.
- `_data/research.yml`: selected research cards.
- `_portfolio/`: detailed research pages.
- `_publications/`: journal articles (`type: journal`) and thesis (`type: thesis`).
- `_pages/Experiences.md`, `_pages/cv.html`: experience and web CV.
- `_posts/`: notes; keep each permalink unique. `published: false` preserves a draft without publishing it.
- `_config.yml`: identity, links, publication exclusions, and site settings.
- `assets/css/site.css`: shared visual styles and responsive behavior.

Use existing PDFs and attributed research images. New dates, credentials, and quantitative claims must be verified before publishing. The current CV page uses email requests until up-to-date CV PDFs are supplied.

## Publishing

GitHub Actions builds pushes to `main` and validates internal links before deploying to GitHub Pages. Pull requests targeting `main` are validated without deployment. Keep `Gemfile.lock` committed for reproducible dependencies.

See `docs/WEBSITE_STATE.md` for the refresh decisions, verification evidence, and remaining content inputs. Documentation and scratch folders are excluded from the published site.
