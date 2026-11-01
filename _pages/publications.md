---
layout: archive
title: Publications
permalink: /publications/
author_profile: true
description: Journal publications and doctoral thesis by Wendong Huo, with DOI links,
  PDFs, and research summaries.
---

<p class="page-lead">Published work in structural optimization, computational mechanics, and geometric design.</p>
<p><a href="https://scholar.google.com/citations?user=1q1nLY8AAAAJ">Google Scholar</a> · <a href="https://orcid.org/0000-0002-6328-1378">ORCID</a></p>

## Journal articles

{% assign papers = site.publications | where: 'type', 'journal' | sort: 'date' | reverse %}
<div class="publication-tools" hidden>
  <div class="filter-fields"><label>Search papers<input type="search" id="paper-search" placeholder="Title, author, DOI or keyword"></label><label>Year<select id="paper-year"><option value="">All years</option></select></label><label>Journal<select id="paper-journal"><option value="">All journals</option></select></label></div>
  <div class="filter-actions"><button type="button" id="reset-papers">Reset filters</button><button type="button" id="export-papers">Download results · BibTeX</button><span id="paper-count" role="status" aria-live="polite"></span></div>
</div>
<p><a href="{{ '/files/citations/wendong-huo-publications.bib' | relative_url }}" download>Download all journal citations · BibTeX</a></p>
<p id="no-papers" hidden>No papers match these filters. Try a broader keyword or reset the filters.</p>
{% for paper in papers %}
{% assign citation = site.data.citations[paper.doi] %}
<article class="publication-card journal-paper" data-year="{{ paper.date | date: '%Y' }}" data-journal="{{ paper.venue | escape }}">
<p class="eyebrow">{{ paper.date | date: '%Y' }} · {{ paper.venue }}</p>
<h3><a href="https://doi.org/{{ paper.doi }}">{{ paper.title }}</a></h3>
<p class="publication-authors">{{ paper.authors | replace: 'Huo W.', '<strong>Huo W.</strong>' }}</p>
{% if paper.volume %}<p class="muted">Volume {{ paper.volume }}{% if paper.article_number %} · Article {{ paper.article_number }}{% endif %}</p>{% endif %}
{% if paper.publication_note %}<p class="muted">{{ paper.publication_note }}</p>{% endif %}
<p>{{ paper.excerpt }}</p>
<div class="action-row"><a class="text-link" href="https://doi.org/{{ paper.doi }}">DOI ↗</a><a class="text-link" href="{{ paper.paperurl | relative_url }}">PDF</a><a class="text-link" href="{{ paper.url | relative_url }}">Abstract & details</a></div>
<div class="citation-actions"><button type="button" class="copy-citation" hidden>Copy citation</button><a href="{{ citation.bibtex_url | relative_url }}" download>BibTeX ↓</a><a href="{{ citation.ris_url | relative_url }}" download>RIS ↓</a></div>
<details class="citation-details"><summary>Show citation</summary><p class="citation-text">{{ citation.citation_text | escape }}</p><pre class="bibtex-source">{{ citation.bibtex | escape }}</pre></details>
</article>
{% endfor %}

## Doctoral thesis

<article class="publication-card thesis-card">
<h3>Topology optimization for thin-walled structures with complex surfaces</h3>
<p>Based on the Moving Morphable Components method and conformal parameterization.</p>
<p lang="zh">基于移动可变形组件法和共形参数化技术的复杂曲面薄壁结构拓扑优化研究</p>
<p class="muted">Wendong Huo · Dalian University of Technology<br>Advisors: Prof. Xu Guo & Prof. Chang Liu<br>Manuscript finalized: November 18, 2025</p>
<div class="action-row"><a class="action-link" href="{{ '/files/thesis-1.pdf' | relative_url }}">Thesis PDF · 14.9 MB</a><a class="action-link" href="{{ '/files/thesis-defense-slides.pdf' | relative_url }}">Defense slides · 13.6 MB</a></div>
<p class="muted">PDFs open directly in your browser and can be downloaded for offline reading.</p>
</article>
