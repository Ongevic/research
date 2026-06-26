---
layout: default
title: Victor Nyabuti Ong'era
---

<div class="home-page">

  <aside class="home-sidebar">
    <h1>{{ site.profile.name }}</h1>
    <p class="home-title">{{ site.profile.title }}</p>
    <p class="home-location">{{ site.profile.location }}</p>
    <p class="home-tagline">{{ site.profile.tagline }}</p>
    <nav class="home-links">
      <a href="{{ '/cv/' | relative_url }}">CV</a>
      <a href="{{ site.profile.links.cv_pdf | relative_url }}">Resume (PDF)</a>
      <a href="{{ '/research/' | relative_url }}">Research</a>
      <a href="{{ '/news/' | relative_url }}">Writing</a>
      <a href="{{ site.profile.links.github }}" target="_blank" rel="noreferrer">GitHub</a>
      <a href="{{ site.profile.links.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a>
    </nav>
  </aside>

  <main class="home-content">
    {% for paragraph in site.profile.bio %}
    <p>{{ paragraph }}</p>
    {% endfor %}

    <h2>Research interests</h2>
    <ul class="interest-list">
      {% for interest in site.profile.interests %}
      <li>{{ interest }}</li>
      {% endfor %}
    </ul>

    <h2>Projects</h2>
    <div class="project-list">
      {% for item in site.research %}
      <p>
        <a href="{{ item.url | relative_url }}">{{ item.title }}</a> &mdash;
        {{ item.subtitle | default: item.excerpt | strip_html | truncatewords: 20 }}
        {% if item.links and item.links.size > 0 %}
        [{% for link in item.links %}<a href="{{ link.url }}">{{ link.label }}</a>{% unless forloop.last %} | {% endunless %}{% endfor %}]
        {% endif %}
      </p>
      {% endfor %}
    </div>

    <h2>Recent writing</h2>
    <div class="writing-list">
      {% for post in site.news limit:5 %}
      <p>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a> &mdash;
        {{ post.date | date: "%B %-d, %Y" }}
      </p>
      {% endfor %}
    </div>
  </main>

</div>
