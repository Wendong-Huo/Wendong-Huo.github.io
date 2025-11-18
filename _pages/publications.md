## Journal Publications

{% assign journal_posts = site.publications | where_exp: "item", "item.type != 'thesis'" | sort: "date" | reverse %}

{% if journal_posts.size > 0 %}
  <style>
    .publication-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      margin: 1.5em 0;
      background-color: #f9f9f9;
      transition: box-shadow 0.2s ease;
    }
    .publication-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .pub-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5em;
    }
    .pub-meta {
      font-size: 0.9rem;
      color: #555;
      margin-bottom: 0.5em;
    }
    .pub-links a {
      color: #007acc;
      text-decoration: none;
      margin-right: 1em;
    }
    .pub-links a:hover {
      text-decoration: underline;
    }
    details {
      margin-top: 0.5em;
    }
    summary {
      cursor: pointer;
      font-weight: 500;
    }
  </style>

  {% for post in journal_posts %}
    <div class="publication-card">
      <div class="pub-title">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </div>
      <div class="pub-meta">
        <strong>Authors:</strong> {{ post.authors }}<br>
        {% if post.venue %}
          <strong>Published at:</strong>
          {% if post.venue_url %}
            <a href="{{ post.venue_url }}" target="_blank">{{ post.venue }}</a>
          {% else %}
            {{ post.venue }}
          {% endif %}<br>
        {% endif %}
        {% if post.doi %}
          <strong>DOI:</strong>
          {% if post.doi_url %}
            <a href="{{ post.doi_url }}" target="_blank">{{ post.doi }}</a>
          {% else %}
            {{ post.doi }}
          {% endif %}<br>
        {% endif %}
        <strong>Published on:</strong> {{ post.date | date: "%B %d, %Y" }}
      </div>

      {% if post.excerpt %}
        <details>
          <summary>Abstract</summary>
          <p>{{ post.excerpt }}</p>
        </details>
      {% endif %}

      <div class="pub-links">
        {% if post.paperurl %}
          <a href="{{ post.paperurl }}" target="_blank">Full Paper (PDF)</a>
        {% endif %}
      </div>
    </div>
  {% endfor %}

{% else %}
  <p>No journal publications found.</p>
{% endif %}
