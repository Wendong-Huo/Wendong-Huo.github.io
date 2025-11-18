---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

<h2>Doctoral Thesis</h2>
<!-- Upgraded Thesis Card with Modern Styling -->
<!-- Compact Thesis Card with Inline PDF Viewer and Modal PPT -->
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
      <iframe src="http://wendong-huo.github.io/files/thesis-1.pdf#toolbar=0" width="100%" height="100%" style="border:1px solid #ccc; border-radius:12px;"></iframe>
    </div>
  </div>
</div>

<!-- PPT Modal -->
<div id="pptModal" class="ppt-modal hidden">
  <div class="ppt-modal-content">
    <span class="close" onclick="document.getElementById('pptModal').classList.add('hidden')">&times;</span>
    <iframe src="http://wendong-huo.github.io/files/thesis-defense.pdf#toolbar=0" width="100%" height="600px" style="border:none;"></iframe>
  </div>
</div>

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

/* Inline PDF Viewer */
.pdf-viewer.hidden { display:none; }

/* PPT Modal */
.ppt-modal { display:flex; justify-content:center; align-items:center; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:9999; }
.ppt-modal.hidden { display:none; }
.ppt-modal-content { background:#fff; padding:1rem; border-radius:12px; max-width:90%; max-height:90%; position:relative; }
.ppt-modal-content .close { position:absolute; top:8px; right:12px; font-size:1.5rem; cursor:pointer; }
</style>


<h2>Journal Publications (pre-postdoc)</h2>

<div class="publications-grid">
{% for post in site.publications reversed %}
  <div class="publication-card">
    <h3 class="publication-title">
      <a href="{{ post.url }}" target="_blank">{{ post.title }}</a>
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
      <p><a href="{{ post.paperurl }}" target="_blank" class="btn-paper">Full Paper (PDF)</a></p>
    {% endif %}
  </div>
{% endfor %}
</div>

<style>
/* Grid layout */
.publications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5em;
  padding: 1em 0;
}

/* Card style */
.publication-card {
  background: linear-gradient(145deg, #f9f9f9, #ffffff);
  border-radius: 12px;
  padding: 1.5em;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.publication-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.publication-title {
  margin-top: 0;
  font-size: 1.2rem;
  color: #007acc;
}

.publication-title a {
  text-decoration: none;
  color: inherit;
}

.publication-authors,
.publication-venue,
.publication-doi,
.publication-date {
  margin: 0.4em 0;
  font-size: 0.95rem;
  color: #555;
}

.publication-excerpt summary {
  cursor: pointer;
  font-weight: bold;
  color: #333;
}

.publication-excerpt p {
  margin-top: 0.5em;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Button style */
.btn-paper {
  display: inline-block;
  padding: 0.45em 1em;
  margin-top: 0.5em;
  background-color: #007acc;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-paper:hover {
  background-color: #005f99;
  transform: scale(1.05);
}
</style>

<style>
/* --- Overall Layout --- */
.thesis-card {
  background: linear-gradient(135deg, #f2f3f7 0%, #ffffff 60%, #eef1ff 100%);
  border-radius: 24px;
  padding: 2.4rem;
  margin-bottom: 3rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.06);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.4);
  animation: fadeIn 0.8s ease;
}

.thesis-section-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.6rem;
  background: linear-gradient(90deg, #4a4a9e, #6f6fd8);
  -webkit-background-clip: text;
  color: transparent;
}

/* --- Title --- */
.thesis-title a {
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.45;
  color: #2c2c54;
  text-decoration: none;
  transition: 0.25s ease;
}

.thesis-title a:hover {
  color: #5a5ad6;
  text-shadow: 0 0 8px rgba(90,90,214,0.4);
}

/* --- Info Text --- */
.thesis-info {
  font-size: 0.95rem;
  margin: 0.35rem 0;
  color: #444;
}

/* --- Excerpt --- */
.thesis-excerpt summary {
  cursor: pointer;
  font-size: 1rem;
  color: #333;
  margin-top: 1rem;
  padding: 0.3rem 0;
}

.thesis-excerpt p {
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  background: #fafafa;
  border-radius: 12px;
  border-left: 3px solid #6f6fd8;
  font-size: 0.95rem;
}

/* --- Buttons --- */
.thesis-buttons {
  margin-top: 1.8rem;
  display: flex;
  gap: 1rem;
}

.btn-thesis,
.btn-ppt {
  text-decoration: none;
  padding: 0.75rem 1.4rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-block;
  transition: all 0.28s ease;
  border: 1px solid transparent;
}

.btn-thesis {
  background: #6f6fd8;
  color: #fff;
  box-shadow: 0 4px 12px rgba(111,111,216,0.35);
}

.btn-thesis:hover {
  background: #5757c2;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(111,111,216,0.45);
}

.btn-ppt {
  background: #ffffff;
  color: #6f6fd8;
  border-color: #6f6fd8;
}

.btn-ppt:hover {
  background: #f0f0ff;
  transform: translateY(-3px);
}

/* --- Subtle Fade Animation --- */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

