---
layout: page
title: Research
permalink: /research/
---

<div class="page-intro">
  <p>This section works as a compact research portfolio. It highlights projects around crop simulation, climate services, and environmental data analysis, with links out to code and public profiles where useful.</p>
</div>

<div class="panel panel-spaced">
  <h2>External research profiles</h2>
  <ul class="inline-links">
    <li><a href="{{ site.profile.links.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a></li>
    <li><a href="{{ site.profile.links.github }}" target="_blank" rel="noreferrer">GitHub</a></li>
    <li><a href="{{ site.profile.links.cv_pdf | relative_url }}" target="_blank" rel="noreferrer">PDF CV</a></li>
  </ul>
</div>

<div class="card-grid">
  {% for item in site.research %}
  <article class="card">
    <p class="card-meta">{{ item.status | default: "Research item" }}</p>
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    <p>{{ item.subtitle | default: item.excerpt | strip_html | truncatewords: 24 }}</p>
    <a class="text-link" href="{{ item.url | relative_url }}">Open project</a>
  </article>
  {% endfor %}
</div>
