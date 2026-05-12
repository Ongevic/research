---
layout: default
title: Victor Nyabuti Ong'era
---

<table>
  <tbody>
    <tr>
      <td style="border: 0px">
        <h2>{{ site.profile.name }}</h2>

        <p>
          <a href="mailto:vongera@example.com">vongera@example.com</a>
          <br>
          <a href="{{ site.profile.links.cv_pdf | relative_url }}">Résumé</a> &bullet;
          <a href="{{ site.profile.links.linkedin }}">LinkedIn</a> &bullet;
          <a href="{{ site.profile.links.github }}">GitHub</a>
        </p>
        <p>
          {{ site.profile.title }}<br>
          {{ site.profile.location }}
        </p>

        <p>
          {{ site.profile.intro }}
        </p>
        
        <p>
          {% for paragraph in site.profile.bio %}
          {{ paragraph }}<br>
          {% endfor %}
        </p>
      </td>
      <td style="border: 0px">
        <!-- Add a photo if needed later -->
      </td>
    </tr>
  </tbody>
</table>

<h3>Research interests</h3>
<ul>
  {% for interest in site.profile.interests %}
  <li>{{ interest }}</li>
  {% endfor %}
</ul>

<h3>Featured Work</h3>
<ul>
  {% assign featured_research = site.research | slice: 0, 3 %}
  {% for item in featured_research %}
  <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a> - {{ item.subtitle | default: item.excerpt | strip_html | truncatewords: 25 }}</li>
  {% endfor %}
</ul>

<h3>Latest Writing</h3>
<ul>
  {% for post in site.news limit:5 %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> ({{ post.date | date: "%B %-d, %Y" }})</li>
  {% endfor %}
</ul>
