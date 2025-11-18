---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

## Doctoral Thesis

## Journal Publications

{% include base_path %}

<div class="publications-grid">
{% for post in site.publications reversed %}
  <div class="publication-card">
    <h3 class="publication-title"><a href="{{ post.url }}">{{ post.title }}</a></h3>

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
      <p class="publication-doi">
        <strong>DOI:</strong> 
        <a href="{{ post.doi }}" target="_blank">{{ post.doi }}</a>
      </p>
    {% endif %}



    {% if post.excerpt %}
      <details class="publication-excerpt">
        <summary><strong>Abstract:</strong> (click to expand)</summary>
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
/* Grid layout for publications */
.publications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5em;
}

/* Card style */
.publication-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.2em;
  background-color: #fafafa;
  transition: transform 0.2s, box-shadow 0.2s;
}

.publication-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.publication-title {
  margin-top: 0;
  font-size: 1.1rem;
}

.publication-authors,
.publication-venue,
.publication-doi,
.publication-date {
  margin: 0.3em 0;
  font-size: 0.95rem;
  color: #555;
}

.publication-excerpt summary {
  cursor: pointer;
  font-weight: bold;
}

.publication-excerpt p {
  margin-top: 0.5em;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Button style for PDF */
.btn-paper {
  display: inline-block;
  padding: 0.4em 0.9em;
  margin-top: 0.5em;
  background-color: #007acc;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s;
}

.btn-paper:hover {
  background-color: #005f99;
  transform: scale(1.05);
}
</style>
