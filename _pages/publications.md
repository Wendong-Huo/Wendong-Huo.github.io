---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

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

  </div>
</div>

<!-- Slides -->
<!-- PDF Fold Card -->
<div class="pdf-card" onclick="togglePDF('pdf-box', 'arrow1')">
  <div class="pdf-card-header">
    <span>Thesis Defense Slides</span>
    <span id="arrow1" class="arrow">▶</span>
  </div>

  <div id="pdf-box" class="pdf-card-content">
    <div id="skeleton-pdf" class="skeleton"></div>

    <iframe
      id="pdf-frame"
      class="pdf-frame"
      src="/pdfjs/web/viewer.html?file=/files/thesis-defense-slides.pdf&download=false">
    </iframe>
  </div>
</div>


<script>
// Toggle Card
function togglePDF(id, arrowId) {
  const box = document.getElementById(id);
  const arrow = document.getElementById(arrowId);

  if (box.classList.contains("open")) {
    box.style.maxHeight = "0px";
    box.classList.remove("open");
    arrow.style.transform = "rotate(0deg)";
  } else {
    box.classList.add("open");
    box.style.maxHeight = box.scrollHeight + "px";
    arrow.style.transform = "rotate(90deg)";
  }
}

// PDF load + auto-resize
document.getElementById("pdf-frame").addEventListener("load", function () {
  const iframe = this.contentDocument || this.contentWindow.document;

  // Hide Skeleton
  document.getElementById("skeleton-pdf").style.display = "none";
  document.getElementById("pdf-frame").style.display = "block";

  // Disable download buttons (PDF.js internal IDs)
  function disableButtons() {
    ["download", "secondaryDownload"].forEach(id => {
      const btn = iframe.getElementById(id);
      if (btn) btn.style.display = "none";
    });
  }

  disableButtons();
  setTimeout(disableButtons, 600);
  setTimeout(disableButtons, 1500);

  // Auto-fit PDF height to 1 full page
  function fitHeight() {
    const viewer = iframe.getElementById("viewer");
    if (!viewer) return;

    const firstPage = viewer.querySelector(".page");
    if (!firstPage) return;

    // 读取 pdf 页的实际高度
    const pageHeight = firstPage.clientHeight;

    if (pageHeight > 0) {
      document.getElementById("pdf-frame").style.height = (pageHeight + 20) + "px";
    }
  }

  // 多次尝试以确保 PDF.js 渲染完成
  setTimeout(fitHeight, 300);
  setTimeout(fitHeight, 800);
  setTimeout(fitHeight, 1500);
  setTimeout(fitHeight, 2500);
});
</script>


<style>
/* --- Fold Card --- */
.pdf-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  padding: 0;
  margin: 1.5rem 0;
  transition: all 0.35s ease;
  border: 1px solid rgba(255,255,255,0.4);
}

.pdf-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.12);
}

/* Header */
.pdf-card-header {
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.pdf-card-header:hover {
  filter: brightness(1.06);
}

/* Arrow */
.arrow {
  transition: transform 0.35s ease;
}

/* Expandable Content */
.pdf-card-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s ease;
  padding: 0 1rem;
}

/* Show content */
.pdf-card-content.open {
  padding: 1rem;
}

/* Skeleton */
.skeleton {
  width: 100%;
  height: 480px;
  border-radius: 12px;
  background: linear-gradient(-90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
  background-size: 400% 400%;
  animation: shimmer 1.4s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* PDF iframe */
.pdf-frame {
  width: 100%;
  height: 0; /* 动态 JS 自动控制 */
  border-radius: 12px;
  border: none;
  display: none;
}

/* Mobile */
@media (max-width: 768px) {
  .pdf-frame {
    width: 100%;
  }
}


</style>


<style>
/* Compact Card */
.thesis-card { background: linear-gradient(135deg, #f9f9ff 0%, #ffffff 80%); border-radius:16px; padding:1.5rem; margin-bottom:2rem; box-shadow:0 4px 12px rgba(0,0,0,0.08); backdrop-filter:blur(5px); border:1px solid rgba(200,200,200,0.3); }
.thesis-section-title { font-size:1.6rem; font-weight:700; margin-bottom:1rem; background:linear-gradient(90deg,#4a4a9e,#6f6fd8); -webkit-background-clip:text; color:transparent; }
.thesis-title a { font-size:1.25rem; font-weight:600; color:#2c2c54; text-decoration:none; transition:0.2s ease; }
.thesis-title a:hover { color:#5a5ad6; text-shadow:0 0 6px rgba(90,90,214,0.3); }
.thesis-info { font-size:0.9rem; margin:0.25rem 0; color:#555; }
.thesis-excerpt summary { cursor:pointer; font-size:0.95rem; color:#333; margin-top:0.8rem; }
.thesis-excerpt p { margin-top:0.5rem; padding:0.6rem 1rem; background:#ffffff; border-radius:10px; border-left:3px solid #6f6fd8; font-size:0.9rem; box-shadow:0 2px 6px rgba(0,0,0,0.05); }

/* Buttons */
.thesis-buttons { margin-top:1rem; display:flex; gap:0.8rem; }
.btn-icon { background:#6f6fd8; color:white; border:none; border-radius:8px; width:40px; height:40px; font-size:1.2rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.25s ease; }
.btn-icon:hover { transform:scale(1.1); box-shadow:0 4px 12px rgba(111,111,216,0.35); }
.btn-icon.pdf-btn { background:#6f6fd8; }
.btn-icon.ppt-btn { background:#34d399; }

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

/* Close button */
.ppt-modal-content .close {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;
}
</style>

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
  background: #ffffff;
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



<style>
/* Collapse panel style */
.cv-collapse {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 12px 18px;
  margin: 1.5em 0;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.cv-collapse:hover {
  background-color: #e5e5e5;
}

.cv-content {
  display: none;
  margin-top: 1em;
  position: relative;
}

/* Skeleton loading */
.skeleton {
  width: 100%;
  height: 780px;
  border-radius: 8px;
  background: linear-gradient(-90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
  background-size: 400% 400%;
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* PDF.js iframe container */
.pdf-container {
  width: 100%;
  height: 780px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: none; /* initially hidden until loaded */
  overflow: auto;
  position: relative;
}

/* Scroll shadow */
.pdf-container::before,
.pdf-container::after {
  content: '';
  position: sticky;
  left: 0;
  right: 0;
  height: 20px;
  pointer-events: none;
  z-index: 10;
}

.pdf-container::before {
  top: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.15), transparent);
}

.pdf-container::after {
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.15), transparent);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .cv-collapse {
    background-color: #2e2e2e;
    color: #eee;
  }
  .cv-collapse:hover {
    background-color: #3a3a3a;
  }
  .pdf-container {
    border: 1px solid #444;
  }
  .skeleton {
    background: linear-gradient(-90deg, #444 0%, #555 50%, #444 100%);
  }
}

</style>




