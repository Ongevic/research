---
layout: page
title: Updates
permalink: /news/
---

<div class="page-intro">
  <p>Use this page for tutorials, short notes, release announcements, and research updates. It gives you a lightweight news feed without turning the site into a full blog.</p>
</div>

<div class="news-list">
  {% for post in site.news %}
  <article class="news-item">
    <time class="news-date" datetime="{{ post.date | date_to_xmlschema }}">
      {{ post.date | date: "%B %-d, %Y" }}
    </time>
    <div class="news-content">
      <h2 class="news-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="news-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      <a class="text-link" href="{{ post.url | relative_url }}">Read post</a>
    </div>
  </article>
  {% endfor %}
</div>
