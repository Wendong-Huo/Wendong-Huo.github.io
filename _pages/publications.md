---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---


<h2>4Doctoral Thesis</h2>
<div class="thesis-card">
  <h3 class="thesis-title">
    <a href="http://wendong-huo.github.io/files/thesis-1.pdf" target="_blank">
      基于移动可变形组件法和共形参数化技术的复杂曲面薄壁结构拓扑优化研究
    </a>
  </h3>
  <p><strong>Author:</strong> Wendong Huo</p>
  <p><strong>Advisors:</strong> Prof. Xu Guo and Prof. Chang Liu</p>
  <p><strong>Institution:</strong> Department of Engineering Mechanics, DUT</p>
  <p><strong>Finalized on:</strong> November 18, 2025</p>

  <details>
    <summary>Excerpt (click to expand)</summary>
    <p>Research on Topology Optimization for Thin-Walled Structures with Complex Surfaces Based on the MMC Method and Conformal Parameterization.</p>
  </details>
</div>

<!-- PDF Fold Cards -->
<div class="pdf-card">
  <div class="pdf-card-header" onclick="togglePDF('pdf-box1', 'arrow1', '/files/thesis-defense-slides.pdf')">
    <span>Thesis Defense Slides</span>
    <span id="arrow1" class="arrow">▶</span>
  </div>
  <div id="pdf-box1" class="pdf-card-content">
    <div class="skeleton"></div>
    <iframe class="pdf-frame" src="" frameborder="0"></iframe>
  </div>
</div>

<div class="pdf-card2">
  <div class="pdf-card-header2" onclick="togglePDF('pdf-box2', 'arrow2', '/files/thesis-1.pdf')">
    <span>Finalized Thesis</span>
    <span id="arrow2" class="arrow2">▶</span>
  </div>
  <div id="pdf-box2" class="pdf-card-content2">
    <div class="skeleton2"></div>
    <iframe class="pdf-frame2" src="" frameborder="0"></iframe>
  </div>
</div>

<script>
function togglePDF(boxId, arrowId, pdfUrl) {
  const box = document.getElementById(boxId);
  const arrow = document.getElementById(arrowId);
  const iframe = box.querySelector('iframe');
  const skeleton = box.querySelector('.skeleton, .skeleton2');

  if (box.classList.contains('open')) {
    box.style.maxHeight = "0px";
    box.classList.remove('open');
    arrow.style.transform = "rotate(0deg)";
  } else {
    box.classList.add('open');
    box.style.maxHeight = "1200px";
    arrow.style.transform = "rotate(90deg)";

    if (!iframe.dataset.loaded) {
      iframe.src = "/pdfjs/web/viewer.html?file=" + pdfUrl + "&download=false";
      iframe.dataset.loaded = "true";

      iframe.addEventListener('load', () => {
        skeleton.style.display = "none";
        iframe.style.display = "block";
      });
    }
  }
}
</script>

<h2>Journal Publications (pre-postdoc)</h2>
<div class="publications-grid">
{% for post in site.publications reversed %}
  <div class="publication-card">
    <h3 class="publication-title">
      <a href="{{ post.paperurl }}" target="_blank">{{ post.title }}</a>
    </h3>
    <p><strong>Authors:</strong> {{ post.authors }}</p>
    {% if post.venue %}
      <p><strong>Published at:</strong> 
        {% if post.venue_url %}
          <a href="{{ post.venue_url }}" target="_blank">{{ post.venue }}</a>
        {% else %}
          {{ post.venue }}
        {% endif %}
      </p>
    {% endif %}
    {% if post.doi %}
      <p><strong>DOI:</strong> <a href="https://doi.org/{{ post.doi }}" target="_blank">{{ post.doi }}</a></p>
    {% endif %}
    {% if post.excerpt %}
      <details><summary>Excerpt</summary><p>{{ post.excerpt }}</p></details>
    {% endif %}
    <p><strong>Published on:</strong> {{ post.date | date: "%B %d, %Y" }}</p>
  </div>
{% endfor %}
</div>

<p>You can also find my articles on <a href="https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a>.</p>

<style>
/* 保留原卡片样式，淡化背景 */
.pdf-card, .pdf-card2 {
  background: rgba(245,245,255,0.25); border-radius:20px; margin:1rem 0; border:1px solid rgba(230,230,250,0.3);
  box-shadow:0 6px 20px rgba(0,0,0,0.08); transition: all 0.35s ease;;
}
.pdf-card:hover, .pdf-card2:hover { transform: translateY(-3px); box-shadow:0 10px 26px rgba(0,0,0,0.12); }
.pdf-card-header, .pdf-card-header2 {
  padding: 1rem 1.2rem;font-size: 1.1rem;font-weight:600; color:white; border-radius:20px;
  display:flex; justify-content:space-between; align-items:center;
  cursor:pointer; background: linear-gradient(135deg, #7a9efb 0%, #b099e3 100%); /* 颜色稍淡 */
}
.pdf-card-content, .pdf-card-content2 { max-height:0; overflow:hidden; transition:max-height 0.45s ease; padding:0 1rem; }
.pdf-card-content.open, .pdf-card-content2.open { padding:1rem; }
.skeleton, .skeleton2 { width:100%; height:570px; border-radius:12px; background:linear-gradient(-90deg,#f0f0f0 0%,#fafafa 50%,#f0f0f0 100%); background-size:400% 400%; animation:shimmer 1.4s ease-in-out infinite; }
.pdf-frame, .pdf-frame2 { width:100%; height:570px; border:none; display:none; border-radius:12px; }

@keyframes shimmer { 0%{background-position:200% 0;} 100%{background-position:-200% 0;} }

/* 保持 Thesis 与 Publication 样式不变 */
.thesis-card { background:linear-gradient(135deg,#f9f9ff 0%,#fff 80%); border-radius:16px; padding:1.5rem; margin-bottom:1rem; box-shadow:0 4px 12px rgba(0,0,0,0.08); backdrop-filter:blur(5px); border:1px solid rgba(200,200,200,0.3); }
.thesis-card:hover { box-shadow:0 10px 24px rgba(0,0,0,0.12); }
.thesis-title a { color:#2c2c54; text-decoration:none; font-weight:600; }
.thesis-title a:hover { color:#5a5ad6; }

.publications-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1.2rem; }
.publication-card { background:linear-gradient(135deg,#e6f5e9 0%,#fff 80%); padding:1.5rem; border-radius:24px; box-shadow:0 4px 12px rgba(0,0,0,0.08); border:1px solid rgba(200,200,200,0.3); transition:0.25s; }
.publication-card:hover { box-shadow:0 10px 24px rgba(0,0,0,0.12); }
.publication-title a { color:#2c3e50; text-decoration:none; }
.publication-title a:hover { color:#27ae60; text-shadow:0 0 6px rgba(39,174,96,0.3); }
.publication-excerpt p { background:#fff; border-radius:12px; border-left:3px solid #27ae60; padding:0.6rem 0.9rem; box-shadow:0 2px 6px rgba(0,0,0,0.05); font-size:0.88rem; line-height:1.4; }

/* Mobile */
@media(max-width:768px){ .pdf-frame, .pdf-frame2 { width:100%; } }
</style>
