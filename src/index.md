---
layout: default
title: Victor Nyabuti Ong'era
---

<div class="home-page">
<<<<<<< HEAD
  <aside class="home-sidebar">
    <h1>{{ site.profile.name }}</h1>
    <p class="home-meta">{{ site.profile.title }}</p>
=======
  <header class="home-header">
    <h1>{{ site.profile.name }}</h1>
    <p class="home-meta">{{ site.profile.title }}</p>
    <p class="home-meta">{{ site.profile.location }}</p>
>>>>>>> origin/main
    <p class="home-links">
      <a href="{{ '/cv/' | relative_url }}">CV</a> &bullet;
      <a href="{{ site.profile.links.cv_pdf | relative_url }}">Resume</a> &bullet;
      <a href="{{ '/research/' | relative_url }}">Research</a> &bullet;
      <a href="{{ '/news/' | relative_url }}">Writing</a> &bullet;
      <a href="{{ site.profile.links.github }}">GitHub</a> &bullet;
      <a href="{{ site.profile.links.linkedin }}">LinkedIn</a>
    </p>
<<<<<<< HEAD
    <p class="home-meta">{{ site.profile.location }}</p>

    <ul class="interest-list">
=======
  </header>

  <p>{{ site.profile.intro }}</p>

  {% for paragraph in site.profile.bio %}
  <p>{{ paragraph }}</p>
  {% endfor %}

  <section>
    <h2>Research interests</h2>
    <ul>
>>>>>>> origin/main
      {% for interest in site.profile.interests %}
      <li>{{ interest }}</li>
      {% endfor %}
    </ul>
<<<<<<< HEAD
  </aside>

  <main class="home-main">
    {% for paragraph in site.profile.bio %}
    <p>{{ paragraph }}</p>
    {% endfor %}

=======
  </section>

  <section>
    <h2>Some projects I'm associated with</h2>
>>>>>>> origin/main
    <div class="project-list">
      {% for item in site.research %}
      <p>
        <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
        {{ item.subtitle | default: item.excerpt | strip_html | truncatewords: 22 }}
        {% if item.links and item.links.size > 0 %}
        [
        {% for link in item.links %}
        <a href="{{ link.url }}">{{ link.label }}</a>{% unless forloop.last %} | {% endunless %}
        {% endfor %}
        ]
        {% endif %}
      </p>
      {% endfor %}
    </div>
<<<<<<< HEAD

    <div class="writing-list">
      {% for post in site.news limit:5 %}
      <p>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>.
        {{ post.date | date: "%B %-d, %Y" }}
      </p>
      {% endfor %}
    </div>
  </main>
=======
  </section>

  <section>
    <h2>Recent writing</h2>
    <ul>
      {% for post in site.news limit:5 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>.
        {{ post.date | date: "%B %-d, %Y" }}
      </li>
      {% endfor %}
    </ul>
  </section>
>>>>>>> origin/main
</div>
