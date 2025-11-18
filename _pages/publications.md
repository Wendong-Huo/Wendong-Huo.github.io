---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

## Thesis

{% assign theses = site.publications | where: "type", "thesis" | sort: "date" | reverse %}
{% if theses.size > 0 %}
  {% for thesis in theses %}
    <div class="publication-item">
      <h3><a href="{{ thesis.url }}">{{ thesis.title }}</a></h3>
      <p><strong>Authors:</strong> {{ thesis.authors }}</p>
      <p><strong>Institution:</strong> {{ thesis.venue }}</p>
      <p><strong>Abstract:</strong> {{ thesis.excerpt }}</p>
      <p><em>Published on: {{ thesis.date | date: "%B %d, %Y" }}</em></p>
      {% if thesis.paperurl %}
        <p><a href="{{ thesis.paperurl }}" target="_blank">Full Thesis (PDF)</a></p>
      {% endif %}
    </div>
  {% endfor %}
{% else %}
  <p>No thesis entries found.</p>
{% endif %}

## Journal Publications

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

{% if author.googlescholar %}
  <p>You can browse my publications and citations in more detail on my <u><a href="https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao">Google Scholar profile</a>.</u></p>
{% endif %}

<!-- Display the other publications -->
{% include base_path %}

{% for post in site.publications reversed %}
  {% if post.type != "thesis" %}
    <div class="publication-item">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p><strong>Authors:</strong> {{ post.authors }}</p>
      <p><strong>Published in:</strong> <a href="{{ post.venue_url }}" target="_blank">{{ post.venue }}</a></p>
      <p><strong>DOI:</strong> <a href="{{ post.doi_url }}">{{ post.doi }}</a></p>
      <p><strong>Abstract:</strong> {{ post.excerpt }}</p>
      <p><em>Published on: {{ post.date | date: "%B %d, %Y" }}</em></p>
      {% if post.paperurl %}
        <p><a href="{{ post.paperurl }}" target="_blank">Full Paper (PDF)</a></p>
      {% endif %}
    </div>
  {% endif %}
{% endfor %}
