---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---


<h2>4Doctoral Thesis</h2>

<div class="thesis-card">
  <h2 class="thesis-section-title">Doctoral Thesis</h2>
  <div class="thesis-content">
    <h3 class="thesis-title">
      <a href="http://wendong-huo.github.io/files/thesis-1.pdf" target="_blank">
        基于移动可变形组件法和共形参数化技术的复杂曲面薄壁结构拓扑优化研究
      </a>
    </h3>
    <p><strong>Author:</strong> Wendong Huo</p>
    <p><strong>Advisors:</strong> Prof. Xu Guo and Prof. Chang Liu</p>
    <p><strong>Institution:</strong> Department of Engineering Mechanics, DUT</p>
    <p><strong>Finalized on:</strong> November 18, 2025</p>

    <details class="thesis-excerpt">
      <summary><strong>Excerpt:</strong> (click to expand)</summary>
      <p>
        Research on Topology Optimization for Thin-Walled Structures with Complex Surfaces
        Based on the Moving Morphable Components (MMC) Method and the Conformal Parameterization Technique.
      </p>
    </details>

  </div>
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

<p>You can also find my articles on <a href="https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a>.</p>

<style>
/* 保留原卡片样式，淡化背景 */
.pdf-card, .pdf-card2 {
  background: rgba(245,245,255,0.25); border-radius:20px; margin:1rem 0; border:1px solid rgba(230,230,250,0.3);
  box-shadow:0 6px 6px rgba(0,0,0,0.08); transition: all 0.35s ease;;
}
.pdf-card:hover, .pdf-card2:hover { transform: translateY(-3px); box-shadow:0 10px 16px rgba(0,0,0,0.12); }

/* PDF Card Header - 浅色风格，与 Thesis 卡片统一 */
.pdf-card-header, .pdf-card-header2 {
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c2c54; /* 深色文字，更好区分浅背景 */
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(135deg, #f9f9ff 0%, #ffffff 80%); /* 与 Thesis 卡片一致的浅蓝渐变 */
  border: 1px solid rgba(200,200,200,0.3); /* 可选，增加边框层次 */
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}



.pdf-card-content, .pdf-card-content2 { max-height:0; overflow:hidden; transition:max-height 0.45s ease; padding:0 1rem; }
.pdf-card-content.open, .pdf-card-content2.open { padding:1rem; }
.skeleton, .skeleton2 { width:100%; height:570px; border-radius:12px; background:linear-gradient(-90deg,#f0f0f0 0%,#fafafa 50%,#f0f0f0 100%); background-size:400% 400%; animation:shimmer 1.4s ease-in-out infinite; }
.pdf-frame, .pdf-frame2 { width:100%; height:570px; border:none; display:none; border-radius:12px; }

@keyframes shimmer { 0%{background-position:200% 0;} 100%{background-position:-200% 0;} }

/* Mobile */
@media(max-width:768px){ .pdf-frame, .pdf-frame2 { width:100%; } }
</style>

<style>
/* --- Thesis Card --- */
.thesis-card {
  background: linear-gradient(135deg, #f9f9ff 0%, #ffffff 80%);
  border-radius: 16px;
  padding: 1.8rem; /* 调整与 publication-card 一致 */
  margin-bottom: 0.4rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(200,200,200,0.3);
}

.thesis-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 14px rgba(0,0,0,0.12);
}

.thesis-section-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0; /* 调整底部间距与 publication-card 对齐 */
  background: linear-gradient(90deg,#4a4a9e,#6f6fd8);
  -webkit-background-clip: text;
  color: transparent;
}

.thesis-title a {
  font-size: 1.2rem; /* 与 publication-title 一致 */
  font-weight: 600;
  color: #2c2c54;
  text-decoration: none;
  transition: 0.2s ease;
  margin-bottom: 0.4rem; /* 与 publication-card 对齐 */
}

.thesis-title a:hover {
  color: #5a5ad6;
  text-shadow: 0 0 6px rgba(90,90,214,0.3);
}

.thesis-info {
  font-size: 0.9rem; /* 与 publication-card info 对齐 */
  margin: 0.25rem 0; /* 与 publication-card info 对齐 */
  color: #444; /* 调整为与 publication-card info 一致的颜色 */
}

.thesis-excerpt summary {
  cursor: pointer;
  font-weight: 600; /* 与 publication-excerpt summary 对齐 */
  color: #333;
  margin-top: 0.5rem; /* 与 publication-excerpt summary 对齐 */
}

.thesis-excerpt p {
  margin-top: 0.5rem;
  padding: 0.6rem 0.9rem; /* 与 publication-excerpt p 对齐 */
  background: #ffffff;
  border-radius: 12px; /* 与 publication-excerpt p 对齐 */
  border-left: 3px solid #6f6fd8;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  font-size: 0.88rem; /* 与 publication-excerpt p 对齐 */
  line-height: 1.4;   /* 与 publication-excerpt p 对齐 */
}
</style>



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
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
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

.publication-authors {
  font-size: 0.8rem; /* 原来可能是 0.9rem，调小一点 */
  margin: 0.25rem 0;  /* 可根据需要调整上下间距 */
  color: #444;
}

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

</style>


<!-- Red Gradient Highlight Card -->
<div class="highlight-card">
  <h3 class="highlight-title">
    <a href="http://wendong-huo.github.io/files/paper-1.pdf" target="_blank">
      Isogeometric dual reciprocity boundary element method for solving transient heat conduction problems with heat sources
    </a>
  </h3>

  <p class="highlight-authors"><strong>Authors:</strong> Yu B., Cao G., Huo W., Zhou H., & Atroshchenko E.</p>
  
  <p class="highlight-venue"><strong>Published at:</strong> 
    <a href="https://www.journals.elsevier.com/journal-of-computational-and-applied-mathematics" target="_blank">
      J. Comput. Appl. Math.
    </a>
  </p>

  <p class="highlight-doi"><strong>DOI:</strong> 
    <a href="https://doi.org/10.1016/j.cam.2020.113197" target="_blank">10.1016/j.cam.2020.113197</a>
  </p>

  <details class="highlight-excerpt">
    <summary>Excerpt (click to expand)</summary>
    <p>
      Solving transient heat conduction problems with heat sources via IG-DRBEM. Up to now, the isogeometric boundary element method (IGBEM) has been widely applied in different fields, and the solved problems are basically independent of time. But an excellent numerical method is more than that, so it is necessary to explore a new IGBEM which can solve time-domain problems. Based on this, the isogeometric dual reciprocity boundary element method (IG-DRBEM) is proposed to solve transient heat transfer problems with heat sources. The introduction of the dual reciprocal method enables the IGBEM to solve the transient heat transfer problem conveniently. At the same time, it does not need to divide elements within the domain, which maintains the advantage of the IGBEM. First, the boundary domain integral equation is established by the weighted residual method and the field variables are discretized by NURBS basis functions. Then, the domain integral in the integral equation is transformed into the boundary by the classical dual reciprocity method. Finally, the standard first-order ordinary differential equations are formed. In order to examine the accuracy of the proposed method, several typical numerical examples are discussed carefully. The presented method can provide a new idea for solving time-dependent problems by IGBEM.
    </p>
  </details>

  <p class="highlight-date"><strong>Published on:</strong> March 15, 2021</p>
</div>

<style>
/* --- Highlight Red Card --- */
.highlight-card {
  background: linear-gradient(135deg, #ffd6d6 0%, #fff0f0 85%);
  border-radius: 24px;
  padding: 1.8rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid rgba(255,180,180,0.3);
}

.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

.highlight-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.4rem 0;
  color: #b71c1c;
}

.highlight-title a {
  text-decoration: none;
  color: inherit;
  transition: 0.2s ease;
}

.highlight-title a:hover {
  color: #f44336;
  text-shadow: 0 0 6px rgba(244,67,54,0.3);
}

.highlight-authors,
.highlight-venue,
.highlight-doi,
.highlight-date {
  font-size: 0.9rem;
  margin: 0.25rem 0;
  color: #444;
}

.highlight-excerpt summary {
  cursor: pointer;
  font-weight: 600;
  color: #b71c1c;
  margin-top: 0.5rem;
}

.highlight-excerpt p {
  margin-top: 0.5rem;
  padding: 0.6rem 0.9rem;
  background: #fff5f5;
  border-radius: 12px;
  border-left: 3px solid #f44336;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  font-size: 0.88rem;
  line-height: 1.4;
}
</style>
