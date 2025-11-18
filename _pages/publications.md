---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

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
        <summary>Abstract (click to expand)</summary>
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
