---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

<h2>Doctoral Thesis</h2>
<!-- Upgraded Thesis Card with Modern Styling -->
<div class="thesis-card">
  <h2 class="thesis-section-title">Doctoral Thesis</h2>

  <div class="thesis-content">
    <h3 class="thesis-title">
      <a href="http://wendong-huo.github.io/files/thesis-1.pdf" target="_blank">
        基于移动可变形组件法和共形参数化技术的复杂曲面薄壁结构拓扑优化研究
      </a>
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

    <div class="thesis-buttons">
      <!-- PDF Inline Viewer Button -->
      <button class="btn-icon pdf-btn" onclick="togglePDF('pdf-viewer-thesis')">📄</button>
      <!-- PPT Modal Trigger -->
      <button class="btn-icon ppt-btn" onclick="openPPTModal()">🎤📊</button>
    </div>

    <!-- Inline PDF Viewer -->
    <div id="pdf-viewer-thesis" class="pdf-viewer hidden">
      <div id="skeleton-thesis" class="skeleton"></div>
      <iframe
        id="iframe-thesis"
        class="pdf-container"
        src="/pdfjs/web/viewer.html?file=/files/thesis-1.pdf"
      ></iframe>
    </div>

  </div>
</div>

<!-- PPT Modal -->
<div id="pptModal" class="ppt-modal hidden">
  <div class="ppt-modal-content">
    <span class="close" onclick="closePPTModal()">&times;</span>
    <div id="skeleton-ppt" class="skeleton"></div>
    <iframe
      id="iframe-ppt"
      class="pdf-container"
      src="/pdfjs/web/viewer.html?file=/files/thesis-defense-slides.pdf"
    ></iframe>
    <div style="text-align:center; margin-top:1em;">
      <a href="/files/thesis-defense-slides.pdf" download="thesis-defense-slides.pdf" class="download-btn">
        Download PPT PDF
      </a>
    </div>
  </div>
</div>

<style>
/* Skeleton loader */
.skeleton {
  width: 100%;
  height: 600px;
  border-radius: 8px;
  background: linear-gradient(-90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
  background-size: 400% 400%;
  animation: shimmer 1.5s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* PDF container */
.pdf-container {
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: none; /* hidden until loaded */
}

/* PPT Modal */
.ppt-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
}

.ppt-modal.hidden { display:none; }

.ppt-modal-content {
  background: linear-gradient(135deg, #e6f5e9 0%, #ffffff 80%);
  padding: 1rem;
  border-radius: 24px;
  max-width: 90%;
  max-height: 90%;
  position: relative;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  border: 1px solid rgba(200,200,200,0.3);
}

/* Close button */
.ppt-modal-content .close {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;
}

/* Download button */
.download-btn {
  display: inline-block;
  padding: 0.6em 1.2em;
  margin: 0.5em;
  background-color: #007acc;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.download-btn:hover {
  background-color: #005f99;
  transform: scale(1.05);
}
</style>

<script>
// Toggle inline PDF viewer
function togglePDF(id) {
  const content = document.getElementById(id);
  content.style.display = (content.style.display === "block") ? "none" : "block";

  if(content.style.display === "block") {
    const iframe = document.getElementById('iframe-thesis');
    const skeleton = document.getElementById('skeleton-thesis');
    iframe.onload = () => {
      skeleton.style.display = "none";
      iframe.style.display = "block";
    };
  }
}

// PPT modal
function openPPTModal() {
  const modal = document.getElementById('pptModal');
  const iframe = document.getElementById('iframe-ppt');
  const skeleton = document.getElementById('skeleton-ppt');
  modal.classList.remove('hidden');

  iframe.onload = () => {
    skeleton.style.display = "none";
    iframe.style.display = "block";
  };
}
function closePPTModal() {
  document.getElementById('pptModal').classList.add('hidden');
}
</script>



<h2>Journal Publications (pre-postdoc)</h2>

<div class="publications-grid">
{% for post in site.publications reversed %}
  <div class="publication-card">
    <h3 class="publication-title">
      <a href="{{ post.paperurl }}" target="_blank">{{ post.title }}</a>
    </h3>

    <p class="publication-authors"><strong>Authors:</strong> {{ post.authors }}</p>

    {% if post.venue %}
      <p class="publication-venue"><strong>Published at:</strong> 
        {% if post.venue_url %}
          <a href="{{ post.venue_url }}" target="_blank">{{ post.venue }}</a>
        {% else %}
          {{ post.venue }}
        {% endif %}
      </p>
    {% endif %}

    {% if post.doi %}
      <p class="publication-doi"><strong>DOI:</strong> 
        <a href="https://doi.org/{{ post.doi }}" target="_blank">{{ post.doi }}</a>
      </p>
    {% endif %}

    {% if post.excerpt %}
      <details class="publication-excerpt">
        <summary>Excerpt (click to expand)</summary>
        <p>{{ post.excerpt }}</p>
      </details>
    {% endif %}

    <p class="publication-date"><strong>Published on:</strong> {{ post.date | date: "%B %d, %Y" }}</p>

    {% if post.paperurl %}
      <!-- PDF Inline Viewer Button -->
      <!-- Inline PDF Viewer -->
    {% endif %}
  </div>
{% endfor %}
</div>

<style>
/* --- Publications Grid --- */
.publications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.2rem;
  padding: 0.8rem 0;
}

/* --- Modern Publication Card --- */
.publication-card {
  background: linear-gradient(135deg, #e6f5e9 0%, #ffffff 80%);
  border-radius: 24px;
  padding: 1.8rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid rgba(200,200,200,0.3);
}

.publication-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

.publication-title {
  margin: 0 0 0.4rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
}

.publication-title a {
  text-decoration: none;
  color: inherit;
  transition: 0.2s ease;
}

.publication-title a:hover {
  color: #27ae60;
  text-shadow: 0 0 6px rgba(39,174,96,0.3);
}

.publication-authors,
.publication-venue,
.publication-doi,
.publication-date {
  font-size: 0.9rem;
  margin: 0.25rem 0;
  color: #444;
}

.publication-excerpt summary {
  cursor: pointer;
  font-weight: 600;
  color: #333;
  margin-top: 0.5rem;
}

.publication-excerpt p {
  margin-top: 0.5rem;
  padding: 0.6rem 0.9rem;
  background: #f0fdf4;
  border-radius: 12px;
  border-left: 3px solid #27ae60;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  font-size: 0.88rem;
  line-height: 1.4;
}

/* --- PDF Button --- */
.btn-icon {
  background:#27ae60;
  color:white;
  border:none;
  border-radius:8px;
  width:36px;
  height:36px;
  font-size:1.1rem;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:all 0.25s ease;
}

.btn-icon:hover {
  transform:scale(1.1);
  box-shadow:0 4px 12px rgba(39,174,96,0.35);
}

/* --- PDF Inline Viewer --- */
.pdf-viewer.hidden { display:none; }
</style>


