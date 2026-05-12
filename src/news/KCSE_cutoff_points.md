---
layout: post
title: "KCSE Degree Cutoff Points 2025/2026"
permalink: /news/KCSE_cutoff_points/
---

## KUCCPS Degree Cutoff Points (2025/2026)

You can download the full official document below:

[Download KUCCPS Cutoff PDF]({{ '/assets/docs/DEGREE_CUTOFFS_14_07_2025.pdf' | relative_url }})

---

## Search Programmes

<div class="tool-card">
  <div class="tool-card-body">
    <div class="tool-grid">
      <div class="tool-field">
        <label class="tool-label">Programme / Institution</label>
        <input id="searchInput" class="tool-input" placeholder="e.g. Bachelor of Education" />
      </div>
      <div class="tool-field">
        <label class="tool-label">Max Cutoff (2024)</label>
        <input id="cutoffInput" type="number" step="0.001" class="tool-input" placeholder="e.g. 29" />
      </div>
    </div>
  </div>
</div>

<div id="results" class="tool-output"></div>

<script>
const data = [
  {inst:"Tom Mboya University", prog:"Bachelor of Education (Arts)", cutoff:28.743},
  {inst:"Pwani University", prog:"Bachelor of Education (Arts)", cutoff:29.056},
  {inst:"Rongo University", prog:"Bachelor of Education (Arts)", cutoff:29.3},
  {inst:"University of Embu", prog:"Bachelor of Education (Arts)", cutoff:29.506},
  {inst:"Kabianga University", prog:"Bachelor of Education (Arts)", cutoff:29.893}
];

function filterData() {
  const text = document.getElementById('searchInput').value.toLowerCase();
  const cutoff = parseFloat(document.getElementById('cutoffInput').value);

  const filtered = data.filter(d => {
    const matchesText = d.prog.toLowerCase().includes(text) || d.inst.toLowerCase().includes(text);
    const matchesCutoff = isNaN(cutoff) || d.cutoff <= cutoff;
    return matchesText && matchesCutoff;
  });

  const container = document.getElementById('results');
  if (filtered.length === 0) {
    container.innerHTML = 'No matching programmes found.';
    return;
  }

  container.innerHTML = filtered.map(d => `
    <div style="margin-bottom:1rem;">
      <strong>${d.prog}</strong><br>
      ${d.inst}<br>
      Cutoff: ${d.cutoff}
    </div>
  `).join('');
}

document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('cutoffInput').addEventListener('input', filterData);
</script>
