---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

## Journal Publications

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao).

{% if author.googlescholar %}
  <p>You can browse my publications and citations in more detail on my <u><a href="https://scholar.google.com/citations?user=1q1nLY8AAAAJ&hl=en&oi=ao">Google Scholar profile</a>.</u></p>
{% endif %}

<!-- Display the publications -->
{% include base_path %}

{% for post in site.publications reversed %}
  <div class="publication-item">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p><strong>Authors:</strong> {{ post.authors }}</p> <!-- 显示作者信息 -->
    <p><strong>Published in:</strong> <a href="{{ post.venue_url }}" target="_blank">{{ post.venue }}</a></p> <!-- 显示期刊名称 -->
    <p><strong>DOI:</strong> <a href="{{ post.doi_url }}">{{ post.doi }}</a></p> <!-- DOI 链接 -->
    <p><strong>Abstract:</strong> {{ post.excerpt }}</p> <!-- 摘要 -->
    <p><em>Published on: {{ post.date | date: "%B %d, %Y" }}</em></p>
    <p><a href="{{ post.paperurl }}" target="_blank">Full Paper (PDF)</a></p> <!-- 链接到PDF -->
  </div>
{% endfor %}
