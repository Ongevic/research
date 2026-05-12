---
layout: default
title: Victor Nyabuti Ong'era
---

<div class="home">
  <h1>{{ site.profile.name }}</h1>
  <p class="home-meta">{{ site.profile.title }} &mdash; {{ site.profile.location }}</p>

  <div class="home-body">
    <nav class="home-nav">
      <a href="{{ '/cv/' | relative_url }}">CV</a>
      <a href="{{ site.profile.links.cv_pdf | relative_url }}">Resume</a>
      <a href="{{ '/research/' | relative_url }}">Research</a>
      <a href="{{ '/news/' | relative_url }}">Writing</a>
      <a href="{{ site.profile.links.github }}">GitHub</a>
      <a href="{{ site.profile.links.linkedin }}">LinkedIn</a>
    </nav>

    <div class="home-main">
      {% for paragraph in site.profile.bio %}
      <p>{{ paragraph }}</p>
      {% endfor %}
    </div>
  </div>
</div>
