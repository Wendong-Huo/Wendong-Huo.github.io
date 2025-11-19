---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

4
<!-- PDF Fold Card -->
<div class="pdf-card">
  <div class="pdf-card-header" onclick="togglePDF('pdf-box1', 'arrow1', '/files/thesis-defense-slides.pdf')">
    <span>Thesis Defense Slides</span>
    <span id="arrow1" class="arrow">▶</span>
  </div>

  <div id="pdf-box1" class="pdf-card-content">
    <div id="skeleton1" class="skeleton"></div>
    <iframe id="pdf-frame1" class="pdf-frame" src="" frameborder="0"></iframe>
  </div>
</div>

<script>
function togglePDF(boxId, arrowId, pdfUrl) {
  const box = document.getElementById(boxId);
  const arrow = document.getElementById(arrowId);
  const iframe = box.querySelector('.pdf-frame');
  const skeleton = box.querySelector('.skeleton');

  if (box.classList.contains('open')) {
    box.style.maxHeight = "0px";
    box.classList.remove('open');
    arrow.style.transform = "rotate(0deg)";
  } else {
    box.classList.add('open');
    box.style.maxHeight = "570px";
    arrow.style.transform = "rotate(90deg)";

    if (!iframe.dataset.loaded) {
      iframe.src = "/pdfjs/web/viewer.html?file=" + pdfUrl + "&download=false";
      iframe.dataset.loaded = "true";

      iframe.addEventListener('load', () => {
        skeleton.style.display = "none";
        iframe.style.display = "block";

        try {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          ["download", "secondaryDownload"].forEach(id => {
            const btn = doc.getElementById(id);
            if (btn) btn.style.display = "none";
          });
        } catch(e) {
          console.warn("无法访问 PDF.js 下载按钮（跨域）", e);
        }
      });
    }
  }
}
</script>

<!-- PDF Fold Card2 -->
<div class="pdf-card2">
  <div class="pdf-card-header2" onclick="togglePDF2('pdf-box2', 'arrow', '/files/thesis-1.pdf')">
    <span>Finalized Thesis</span>
    <span id="arrow" class="arrow">▶</span>
  </div>

  <div id="pdf-box2" class="pdf-card-content2">
    <div id="skeleton2" class="skeleton"></div>
    <iframe id="pdf-frame2" class="pdf-frame" src="" frameborder="0"></iframe>
  </div>
</div>

<script>
function togglePDF2(boxId, arrowId, pdfUrl) {
  const box = document.getElementById(boxId);
  const arrow = document.getElementById(arrowId);
  const iframe = box.querySelector('.pdf-frame');
  const skeleton = box.querySelector('.skeleton');

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

        try {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          ["download", "secondaryDownload"].forEach(id => {
            const btn = doc.getElementById(id);
            if (btn) btn.style.display = "none";
          });
        } catch(e) {
          console.warn("无法访问 PDF.js 下载按钮（跨域）", e);
        }
      });
    }
  }
}
</script>

<style>

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.arrow2 {
  transition: transform 0.35s ease;
}

.pdf-card {
  background: rgba(245, 245, 255, 0.25); /* 更淡的半透明淡蓝色 */
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  margin: 1rem 0;
  border: 1px solid rgba(230,230,250,0.3);
  transition: all 0.35s ease;
}

.pdf-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.12);
}

.pdf-card-header {
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #7a9efb 0%, #b099e3 100%); /* 颜色稍淡 */
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

/* 内容折叠区 */
.pdf-card-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s ease;
  padding: 0 1rem;
}

.pdf-card-content.open {
  padding: 1rem;
}

/* Skeleton loader */
.skeleton {
  width: 100%;
  height: 570px;
  border-radius: 12px;
  background: linear-gradient(-90deg, #f0f0f0 0%, #fafafa 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: shimmer 1.4s ease-in-out infinite;
}

/* PDF iframe */
.pdf-frame {
  width: 100%;
  height: 570px;
  border-radius: 12px;
  border: none;
  display: none;
}


/* --- PDF Card 2 样式修改 --- */
.pdf-card2 {
  background: rgba(245, 245, 255, 0.25); /* 更淡的半透明淡蓝色 */
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  margin: 1rem 0;
  border: 1px solid rgba(230,230,250,0.3);
  transition: all 0.35s ease;
}

.pdf-card2:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.12);
}

.pdf-card-header2 {
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #7a9efb 0%, #b099e3 100%); /* 颜色稍淡 */
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

/* 内容折叠区 */
.pdf-card-content2 {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s ease;
  padding: 0 1rem;
}

.pdf-card-content2.open {
  padding: 1rem;
}

/* Skeleton loader */
.skeleton2 {
  width: 100%;
  height: 570px;
  border-radius: 12px;
  background: linear-gradient(-90deg, #f0f0f0 0%, #fafafa 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: shimmer 1.4s ease-in-out infinite;
}

/* PDF iframe */
.pdf-frame2 {
  width: 100%;
  height: 570px;
  border-radius: 12px;
  border: none;
  display: none;
}


/* 手机响应 */
@media (max-width: 768px){
  .pdf-frame { width: 100%; }
}
</style>












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
/* Compact Card */
.thesis-card { background: linear-gradient(135deg, #f9f9ff 0%, #ffffff 80%); border-radius:16px; padding:1.5rem; margin-bottom:0.4rem; box-shadow:0 4px 12px rgba(0,0,0,0.08); transition: transform 0.25s ease, box-shadow 0.25s ease;backdrop-filter:blur(5px); border:1px solid rgba(200,200,200,0.3); }
.thesis-card:hover {transform: translateY(-4px); box-shadow: 0 10px 24px rgba(0,0,0,0.12);}
.thesis-section-title { font-size:1.6rem; font-weight:700; margin: 0 0 0.4rem 0; background:linear-gradient(90deg,#4a4a9e,#6f6fd8); -webkit-background-clip:text; color:transparent; }
.thesis-title a { font-size:1.25rem; font-weight:600; color:#2c2c54; text-decoration:none; transition:0.2s ease;margin-bottom:0.8rem; }
.thesis-title a:hover { color:#5a5ad6; text-shadow:0 0 6px rgba(90,90,214,0.3); }

.thesis-info { font-size:0.9rem; margin:0.25rem 0; color:#555; }
.thesis-excerpt summary { cursor:pointer; font-size:0.95rem; color:#333; margin-top:0.8rem; }
.thesis-excerpt p { margin-top:0.5rem; padding:0.6rem 1rem; background:#ffffff; border-radius:10px; border-left:3px solid #6f6fd8; font-size:0.9rem; box-shadow:0 2px 6px rgba(0,0,0,0.05); }
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

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).
