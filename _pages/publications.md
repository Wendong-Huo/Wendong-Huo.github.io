---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

## Research Publications

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

{% if author.googlescholar %}
  <p>You can browse my publications and citations in more detail on my <u><a href="https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao">Google Scholar profile</a>.</u></p>
{% endif %}

<!-- Display the publications -->
{% include base_path %}

{% for post in site.publications reversed %}
  <div class="publication-item">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p><em>{{ post.date | date: "%B %d, %Y" }}</em></p>
    <p>{{ post.excerpt }}</p>
  </div>
{% endfor %}

