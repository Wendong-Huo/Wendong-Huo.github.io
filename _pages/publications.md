---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

<h2>Doctoral Thesis</h2>
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
      <button class="btn-icon pdf-btn" onclick="document.getElementById('pdfViewer').classList.toggle('hidden')" title="View Thesis Inline">
        📄
      </button>

      <!-- PPT Modal Trigger -->
      <button class="btn-icon ppt-btn" onclick="document.getElementById('pptModal').classList.toggle('hidden')" title="Preview Defense Slides">
        🎤📊
      </button>
    </div>

    <!-- Inline PDF Viewer -->
    <div id="pdfViewer" class="pdf-viewer hidden" style="margin-top:1rem; height:500px;">
      <object data="http://wendong-huo.github.io/files/thesis-1.pdf#toolbar=0" type="application/pdf" width="100%" height="100%">
        <p>浏览器不支持内嵌 PDF，请 <a href="http://wendong-huo.github.io/files/thesis-1.pdf" target="_blank">下载查看</a></p>
      </object>
    </div>
  </div>
</div>

<!-- PPT Modal -->
<div id="pptModal" class="ppt-modal hidden">
  <div class="ppt-modal-content">
    <span class="close" onclick="document.getElementById('pptModal').classList.add('hidden')">&times;</span>
    <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=http://wendong-huo.github.io/files/thesis-defense-slides.pdf" width="100%" height="600px" style="border:none;"></iframe>
  </div>
</div>

<style>
/* --- Thesis Card --- */
.thesis-card { background: linear-gradient(135deg, #f9f9ff 0%, #ffffff 80%); border-radius:16px; padding:1.5rem; margin-bottom:2rem; box-shadow:0 4px 12px rgba(0,0,0,0.08); backdrop-filter:blur(5px); border:1px solid rgba(200,200,200,0.3); }
.thesis-section-title { font-size:1.6rem; font-weight:700; margin-bottom:1rem; background:linear-gradient(90deg,#4a4a9e,#6f6fd8); -webkit-background-clip:text; color:transparent; }
.thesis-title a { font-size:1.25rem; font-weight:600; color:#2c2c54; text-decoration:none; transition:0.2s ease; }
.thesis-title a:hover { color:#5a5ad6; text-shadow:0 0 6px rgba(90,90,214,0.3); }
.thesis-info { font-size:0.9rem; margin:0.25rem 0; color:#555; }
.thesis-excerpt summary { cursor:pointer; font-size:0.95rem; color:#333; margin-top:0.8rem; }
.thesis-excerpt p { margin-top:0.5rem; padding:0.6rem 1rem; background:#ffffff; border-radius:10px; border-left:3px solid #6f6fd8; font-size:0.9rem; box-shadow:0 2px 6px rgba(0,0,0,0.05); }

/* --- Buttons --- */
.thesis-buttons { margin-top:1rem; display:flex; gap:0.8rem; }
.btn-icon { background:#6f6fd8; color:white; border:none; border-radius:8px; width:40px; height:40px; font-size:1.2rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.25s ease; }
.btn-icon:hover { transform:scale(1.1); box-shadow:0 4px 12px rgba(111,111,216,0.35); }
.btn-icon.ppt-btn { background:#34d399; }

/* --- Inline PDF Viewer --- */
.pdf-viewer.hidden { display:none; }

/* --- PPT Modal --- */
.ppt-modal { display:flex; justify-content:center; align-items:center; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:9999; }
.ppt-modal.hidden { display:none; }
.ppt-modal-content { background:#fff; padding:1rem; border-radius:12px; max-width:90%; max-height:90%; position:relative; }
.ppt-modal-content .close { position:absolute; top:8px; right:12px; font-size:1.5rem; cursor:pointer; }

/* --- Publications Grid --- */
.publications-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.2rem; padding: 0.8rem 0; }
.publication-card { background: linear-gradient(135deg, #e6f5e9 0%, #ffffff 80%); border-radius: 24px; padding: 1.8rem; box-shadow: 0 6px 20px rgba(0,0,0,0.08); transition: transform 0.25s ease, box-shadow 0.25s ease; border:1px solid rgba(200,200,200,0.3); }
.publication-card:hover { transform: translateY(-4px); box-shadow:0 10px 24px rgba(0,0,0,0.12); }
.publication-title { margin:0 0 0.4rem 0; font-size:1.2rem; font-weight:600; color:#2c3e50; }
.publication-title a { text-decoration:none; color:inherit; transition:0.2s ease; }
.publication-title a:hover { color:#27ae60; text-shadow:0 0 6px rgba(39,174,96,0.3); }
.publication-authors, .publication-venue, .publication-doi, .publication-date { font-size:0.9rem; margin:0.25rem 0; color:#444; }
.publication-excerpt summary { cursor:pointer; font-weight:600; color:#333; margin-top:0.5rem; }
.publication-excerpt p { margin-top:0.5rem; padding:0.6rem 0.9rem; background:#f0fdf4; border-radius:12px; border-left:3px solid #27ae60; box-shadow:0 2px 6px rgba(0,0,0,0.05); font-size:0.88rem; line-height:1.4; }
.btn-icon { background:#27ae60; color:white; border:none; border-radius:8px; width:36px; height:36px; font-size:1.1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.25s ease; }
.btn-icon:hover { transform:scale(1.1); box-shadow:0 4px 12px rgba(39,174,96,0.35); }
.pdf-viewer.hidden { display:none; }
</style>
