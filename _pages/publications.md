---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

<h2>Doctoral Thesis</h2>

<div class="thesis-card">

  <div class="thesis-header">
    <h3 class="thesis-title">
      <a href="http://wendong-huo.github.io/files/thesis-1.pdf" target="_blank">
        基于移动可变形组件法和共形参数化技术的复杂曲面薄壁结构拓扑优化研究
      </a>
    </h3>
  </div>

  <div class="thesis-meta">
    <p><strong>Author:</strong> Wendong Huo</p>
    <p><strong>Advisors:</strong> Prof. Xu Guo and Prof. Chang Liu</p>
    <p><strong>Institution:</strong> Department of Engineering Mechanics, DUT</p>
    <p><strong>Finalized on:</strong> November 18, 2025</p>
  </div>

  <details class="thesis-excerpt">
    <summary><strong>Excerpt:</strong> (click to expand)</summary>
    <p>
      Research on Topology Optimization for Thin-Walled Structures with Complex Surfaces
      Based on the Moving Morphable Components (MMC) Method and the Conformal Parameterization Technique.
    </p>
  </details>

  <p>
    <a href="http://wendong-huo.github.io/files/thesis-1.pdf" target="_blank" class="thesis-btn">
      Full Thesis (PDF)
    </a>
  </p>
</div>


<h2>Journal Publications</h2>

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
/* Thesis 卡片整体容器 */
.thesis-card {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1.8em;
  margin: 1.5em 0 3em;
  border: 1px solid rgba(255, 255, 255, 0.35);

  /* 现代渐变背景 */
  background-image: linear-gradient(
    135deg,
    rgba(110, 170, 255, 0.28),
    rgba(200, 220, 255, 0.18),
    rgba(255, 255, 255, 0.45)
  );

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s, box-shadow 0.3s;
}

.thesis-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.18);
}

/* 标题部分 */
.thesis-title {
  margin-top: 0;
  font-size: 1.35rem;
  font-weight: 600;
  color: #1a2a6c;
}

.thesis-title a {
  color: inherit;
  text-decoration: none;
}

.thesis-title a:hover {
  text-decoration: underline;
}

/* 元信息排版 */
.thesis-meta p {
  margin: 0.35em 0;
  font-size: 0.97rem;
  color: #333;
}

/* 摘要展开组件 */
.thesis-excerpt summary {
  cursor: pointer;
  margin-top: 0.7em;
  font-weight: bold;
  color: #1a2a6c;
}

.thesis-excerpt p {
  margin-top: 0.6em;
  color: #444;
  line-height: 1.55;
}

/* 按钮 */
.thesis-btn {
  display: inline-block;
  margin-top: 0.8em;
  padding: 0.5em 1.1em;
  background: #1a2a6c;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.25s, transform 0.25s;
}

.thesis-btn:hover {
  background: #233b94;
  transform: scale(1.05);
}
</style>
