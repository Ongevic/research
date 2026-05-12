---
layout: page
title: CV
permalink: /cv/
---

<div class="page-intro">
  {% for paragraph in site.profile.cv.summary %}
  <p>{{ paragraph }}</p>
  {% endfor %}
</div>

<section class="cv-section">
  <h2>Highlights</h2>
  <ul class="stack-list">
    {% for item in site.profile.cv.highlights %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</section>

<section class="cv-section">
  <h2>Experience</h2>
  <div class="timeline">
    {% for item in site.profile.cv.experience %}
    <article class="timeline-item">
      <div class="timeline-head">
        <h3>{{ item.role }}</h3>
        <p>{{ item.period }}</p>
      </div>
      <p class="timeline-org">{{ item.organisation }}</p>
      <p>{{ item.description }}</p>
    </article>
    {% endfor %}
  </div>
</section>

<section class="cv-section">
  <h2>Education</h2>
  <div class="timeline">
    {% for item in site.profile.cv.education %}
    <article class="timeline-item">
      <div class="timeline-head">
        <h3>{{ item.degree }}</h3>
        <p>{{ item.period }}</p>
      </div>
      <p class="timeline-org">{{ item.institution }}</p>
    </article>
    {% endfor %}
  </div>
</section>

<section class="cv-section">
  <h2>Skills</h2>
  <ul class="tag-list">
    {% for skill in site.profile.cv.skills %}
    <li>{{ skill }}</li>
    {% endfor %}
  </ul>
</section>

<section class="cv-section">
  <h2>Profiles</h2>
  <ul class="inline-links">
    <li><a href="{{ site.profile.links.github }}" target="_blank" rel="noreferrer">GitHub</a></li>
    <li><a href="{{ site.profile.links.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a></li>
    <li><a href="{{ site.profile.links.cv_pdf | relative_url }}" target="_blank" rel="noreferrer">PDF CV</a></li>
  </ul>
</section>
