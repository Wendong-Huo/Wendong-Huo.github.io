---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

<h2>Doctoral Thesis</h2>

<!-- Doctoral Thesis Card -->
<div class="thesis-card">
  <h3 class="thesis-title">
    基于移动可变形组件法和共形参数化技术的复杂曲面薄壁结构拓扑优化研究
  </h3>

  <p class="thesis-info"><strong>Author:</strong> Wendong Huo</p>
  <p class="thesis-info"><strong>Advisors:</strong> Prof. Xu Guo and Prof. Chang Liu</p>
  <p class="thesis-info"><strong>Institution:</strong> Department of Engineering Mechanics, DUT</p>
  <p class="thesis-info"><strong>Finalized on:</strong> November 18, 2025</p>

  <details class="thesis-excerpt">
    <summary><strong>Excerpt:</strong> (click to expand)</summary>
    <p>
      Research on Topology Optimization for Thin-Walled Structures with Complex Surfaces
      Based on the Moving Morphable Components (MMC) Method and the Conformal Parameterization Technique.
    </p>
  </details>

  <!-- PDF.js Viewer -->
  <div id="thesisPdfViewer" class="pdf-viewer" style="height:500px;"></div>
</div>

<h2>Journal Publications (pre-postdoc)</h2>

<div class="publications-grid">
{% for post in site.publications reversed %}
  <div class="publication-card">
    <h3 class="publication-title">{{ post.title }}</h3>
    <p class="publication-authors"><strong>Authors:</strong> {{ post.authors }}</p>
    {% if post.venue %}
      <p class="publication-venue"><strong>Published at:</strong> {{ post.venue }}</p>
    {% endif %}
    {% if post.doi %}
      <p class="publication-doi"><strong>DOI:</strong> <a href="https://doi.org/{{ post.doi }}" target="_blank">{{ post.doi }}</a></p>
    {% endif %}
    
    <!-- PDF.js Viewer for Paper -->
    {% if post.paperurl %}
      <div id="pdfViewer-{{ forloop.index }}" class="pdf-viewer" style="height:400px;"></div>
    {% endif %}
  </div>
{% endfor %}
</div>

<!-- PDF.js Script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.min.js"></script>
<script>
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js';

// Thesis PDF
const thesisUrl = 'http://wendong-huo.github.io/files/thesis-1.pdf';
const thesisContainer = document.getElementById('thesisPdfViewer');
loadPDF(thesisUrl, thesisContainer, 1.2);

// Publications PDFs
{% for post in site.publications reversed %}
{% if post.paperurl %}
const container{{ forloop.index }} = document.getElementById('pdfViewer-{{ forloop.index }}');
loadPDF('{{ post.paperurl }}', container{{ forloop.index }}, 1);
{% endif %}
{% endfor %}

function loadPDF(url, container, scale=1) {
  const loadingTask = pdfjsLib.getDocument(url);
  loadingTask.promise.then(pdf => {
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      pdf.getPage(pageNum).then(page => {
        const viewport = page.getViewport({ scale: scale });
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        page.render({ canvasContext: context, viewport: viewport });
      });
    }
  });
}
</script>

<style>
/* --- Thesis Card --- */
.thesis-card {
  background: linear-gradient(135deg, #f9f9ff 0%, #ffffff 80%);
  border-radius:16px;
  padding:1.5rem;
  margin-bottom:2rem;
  box-shadow:0 4px 12px rgba(0,0,0,0.08);
  border:1px solid rgba(200,200,200,0.3);
}

.thesis-title { font-size:1.3rem; font-weight:600; color:#2c2c54; margin-bottom:0.5rem; }
.thesis-info { font-size:0.9rem; margin:0.25rem 0; color:#555; }
.thesis-excerpt summary { cursor:pointer; font-size:0.95rem; color:#333; margin-top:0.5rem; }
.thesis-excerpt p { margin-top:0.5rem; padding:0.6rem 1rem; background:#fff; border-radius:10px; border-left:3px solid #6f6fd8; }

/* --- Publications Grid --- */
.publications-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1.2rem; padding:0.8rem 0; }

.publication-card {
  background: linear-gradient(135deg, #e6f5e9 0%, #ffffff 80%);
  border-radius:16px;
  padding:1.5rem;
  box-shadow:0 4px 12px rgba(0,0,0,0.08);
  border:1px solid rgba(200,200,200,0.3);
}

.publication-title { font-size:1.1rem; font-weight:600; color:#2c3e50; margin-bottom:0.4rem; }
.publication-authors, .publication-venue, .publication-doi { font-size:0.9rem; margin:0.2rem 0; color:#444; }

.pdf-viewer { margin-top:0.8rem; border:1px solid #ccc; border-radius:12px; }
</style>
