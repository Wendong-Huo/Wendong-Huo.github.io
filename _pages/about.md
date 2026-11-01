---
layout: archive
title: About
permalink: /
author_profile: true
hide_title: true
description: Wendong Huo, Postdoctoral Fellow at The University of Hong Kong. Research
  in computational mechanics, structural optimization, and geometry-informed design.
redirect_from:
- /about/
- /about.html
---

{% assign latest_paper = site.publications | where: "doi", "10.1016/j.tws.2026.115498" | first %}
{% assign journal_papers = site.publications | where: "type", "journal" %}
<div class="home-showcase">
<section class="home-opening" aria-label="Introduction and latest research">
  <div class="home-intro">
    <p class="eyebrow">WENDONG HUO / RESEARCH</p>
    <h1>Geometry-driven<br>design.</h1>
    <p class="intro-role">Computational mechanics researcher<br>Postdoctoral Fellow · HKU</p>
    <p>I study how geometry shapes mechanical behavior—from stiffened shells and explicit topology optimization to the mechanics of advanced materials.</p>
    <div class="home-signature"><span>Curved surfaces</span><span>Explicit geometry</span><span>Structural mechanics</span></div>
    <div class="action-row"><a class="action-link primary" href="{{ '/portfolio/' | relative_url }}">Explore research ↗</a><a class="action-link" href="mailto:huowd@hku.hk">Contact</a></div>
    <a class="publication-count" href="{{ '/publications/' | relative_url }}"><strong>{{ journal_papers | size }}</strong> journal articles <span aria-hidden="true">↗</span></a>
  </div>
  <article class="latest-study">
    <div class="latest-label"><span>Latest publication</span><span>TWS / {{ latest_paper.date | date: '%Y' }}</span></div>
    <a class="latest-visual" data-lightbox data-caption="Orbital cabin-type shell — Liu et al. (2026), Fig. 32(b)." href="{{ '/images/research/tws-frequency.webp' | relative_url }}" aria-label="Enlarge TWS research figure"><img src="{{ '/images/research/tws-frequency.webp' | relative_url }}" width="1008" height="440" alt="Optimized stiffener layout and first-order mode shape of an orbital cabin-type curved shell, Figure 32(b) of the 2026 TWS paper" fetchpriority="high" decoding="async"></a>
    <div class="latest-copy">
      <p class="figure-credit">Orbital cabin-type shell · Fig. 32(b), Liu et al. (2026)</p>
      <h2><a href="{{ latest_paper.url | relative_url }}">{{ latest_paper.title }}</a></h2>
      <p class="latest-authors">Liu C., Gao J., <strong>Huo W.</strong>, &amp; Guo X.</p>
      <p class="latest-summary">Designing stiffeners on complex curved shells to maximize the fundamental natural frequency.</p>
      <p class="latest-meta">Thin-Walled Structures · 231, 115498<br>Corresponding author · Published {{ latest_paper.date | date: '%B %-d, %Y' }}</p>
      <div class="action-row"><a class="action-link primary" href="{{ latest_paper.url | relative_url }}">Read study →</a><a class="action-link" href="{{ latest_paper.paperurl | relative_url }}">PDF ↗</a><a class="action-link" href="https://doi.org/{{ latest_paper.doi }}">DOI ↗</a></div>
    </div>
  </article>
</section>

<div class="section-heading"><div><p class="eyebrow">A RESEARCH THREAD</p><h2>Designing on complex surfaces</h2></div><a href="{{ '/publications/' | relative_url }}">All publications →</a></div>
<p class="section-intro">From rib layouts to solid components and surface topography: three approaches to making geometry an explicit part of structural optimization.</p>
{% include research-cards.html %}

<section class="surface-explorer" aria-labelledby="surface-title">
  <div class="section-heading"><div><p class="eyebrow">EXPLORE THE GEOMETRY</p><h2 id="surface-title">A curved surface, in your hands.</h2></div><a href="{{ '/assets/models/torus-surface.glb' | relative_url }}" download>Download model · GLB</a></div>
  <p class="section-intro">An actual torus shell mesh from my computational research archive. Drag to rotate, scroll or pinch to zoom. This is the geometric model, not an optimized layout or a simulation result.</p>
  <div class="surface-stage" data-viewer-script="{{ '/assets/js/lib/model-viewer-4.4.0.min.js' | relative_url }}" data-model-src="{{ '/assets/models/torus-surface.glb' | relative_url }}">
    <div class="surface-placeholder"><span class="surface-monogram" aria-hidden="true">↻</span><p>Explore a torus shell in 3D</p><button type="button" class="load-surface" hidden>Load interactive model</button><noscript><p>Enable JavaScript to rotate the model, or download the GLB above.</p></noscript></div>
    <div class="surface-controls" hidden><button type="button" class="rotate-surface" aria-pressed="false">Auto-rotate</button><button type="button" class="reset-surface">Reset view</button></div>
    <p class="surface-status" role="status" aria-live="polite"></p>
  </div>
  <p class="muted">Original finite-element surface · 31,840 vertices · 63,680 triangles. Geometry and connectivity preserved.</p>
</section>

<section class="research-outlook" aria-labelledby="outlook-title">
  <div><p class="eyebrow">WHAT CONNECTS MY WORK</p><h2 id="outlook-title">Geometry, across scales.</h2><p>My doctoral work at Dalian University of Technology connected the Moving Morphable Components method with computational conformal mapping. At HKU, working with Prof. Yang Lu, my interests extend toward advanced materials and small-scale mechanics.</p><a class="text-link" href="{{ '/experiences/' | relative_url }}">My academic path →</a></div>
  <ol class="research-directions"><li><span>01 / STRUCTURES</span><h3>Shape &amp; stiffness</h3><p>Curved shells, reinforcing ribs, and explicit structural optimization.</p></li><li><span>02 / MATERIALS</span><h3>Strain &amp; function</h3><p>Deep elastic strain engineering in diamond and micro-/nano-mechanics.</p></li><li><span>03 / METHODS</span><h3>Models &amp; design</h3><p>Computational geometry, multifunctional metamaterials, and AI-assisted design.</p></li></ol>
</section>
<section class="contact-panel" id="contact"><p class="eyebrow">LET’S CONNECT</p><h2>Ideas at the intersection of geometry and mechanics?</h2><p>I welcome conversations about computational mechanics, structural optimization, and advanced materials.</p><a href="mailto:huowd@hku.hk">huowd@hku.hk ↗</a><span class="contact-language">Chinese / English</span></section>
</div>
