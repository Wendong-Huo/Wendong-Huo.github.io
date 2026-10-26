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
{% for paper in papers %}
<article class="publication-card">
<p class="eyebrow">{{ paper.date | date: '%Y' }} · {{ paper.venue }}</p>
<h3><a href="https://doi.org/{{ paper.doi }}">{{ paper.title }}</a></h3>
<p class="publication-authors">{{ paper.authors | replace: 'Huo W.', '<strong>Huo W.</strong>' }}</p>
{% if paper.volume %}<p class="muted">Volume {{ paper.volume }}{% if paper.article_number %} · Article {{ paper.article_number }}{% endif %}</p>{% endif %}
{% if paper.publication_note %}<p class="muted">{{ paper.publication_note }}</p>{% endif %}
<p>{{ paper.excerpt }}</p>
<div class="action-row"><a class="text-link" href="https://doi.org/{{ paper.doi }}">DOI ↗</a><a class="text-link" href="{{ paper.paperurl | relative_url }}">PDF</a><a class="text-link" href="{{ paper.url | relative_url }}">Abstract & details</a></div>
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
