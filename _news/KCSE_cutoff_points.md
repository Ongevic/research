---
layout: default
title: "KUCCPS 2025/2026 Degree Programme Cutoff Points"
date: 2026-03-08
---

<section class="detail-page cutoff-page">
  <header class="detail-header">
    <p class="eyebrow">Reference</p>
    <h1>KUCCPS 2025/2026 Degree Programme Cutoff Points</h1>
    <p class="detail-subtitle">Search official degree cutoff points by programme, institution, or code using the KUCCPS source document.</p>
  </header>

  <div class="panel panel-spaced">
    <p>
      This page is based on the official KUCCPS <strong>2025/2026 Degree Programme Cut Offs</strong> document, which lists programme code, institution name, programme name, and yearly cutoff values from 2018 to 2024. fileciteturn0file0
    </p>
    <div class="tool-actions">
      <a class="btn btn-primary" href="{{ '/assets/pdf/DEGREE_CUTOFFS_14_07_2025.pdf' | relative_url }}">Download official PDF</a>
      <a class="btn btn-outline" href="#cutoff-table">Jump to table</a>
    </div>
  </div>

  <section class="tool-card panel-spaced" aria-labelledby="filters-heading">
    <div class="tool-card-body">
      <div class="tool-output-head">
        <div>
          <p class="eyebrow">Filter</p>
          <h2 id="filters-heading">Find a programme quickly</h2>
        </div>
        <span class="tool-badge" id="result-count">Showing 0 entries</span>
      </div>

      <div class="tool-grid">
        <div class="tool-field tool-field-full">
          <label class="tool-label" for="search-input">Search by programme, institution, or code</label>
          <input class="tool-input" id="search-input" type="search" placeholder="Example: medicine, University of Nairobi, 1263131">
        </div>

        <div class="tool-field">
          <label class="tool-label" for="institution-filter">Institution</label>
          <select class="tool-select" id="institution-filter">
            <option value="">All institutions</option>
          </select>
        </div>

        <div class="tool-field">
          <label class="tool-label" for="programme-filter">Programme group</label>
          <select class="tool-select" id="programme-filter">
            <option value="">All programme groups</option>
          </select>
        </div>

        <div class="tool-field">
          <label class="tool-label" for="year-filter">Display year</label>
          <select class="tool-select" id="year-filter">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>

        <div class="tool-field">
          <label class="tool-label" for="sort-filter">Sort by</label>
          <select class="tool-select" id="sort-filter">
            <option value="cutoff-desc">Highest cutoff first</option>
            <option value="cutoff-asc">Lowest cutoff first</option>
            <option value="programme-asc">Programme A–Z</option>
            <option value="institution-asc">Institution A–Z</option>
            <option value="code-asc">Programme code</option>
          </select>
        </div>
      </div>

      <div class="tool-actions">
        <button class="btn btn-outline" id="reset-filters" type="button">Reset filters</button>
      </div>
    </div>
  </section>

  <section class="panel panel-spaced" id="cutoff-table" aria-labelledby="table-heading">
    <div class="tool-output-head cutoff-table-head">
      <div>
        <p class="eyebrow">Table</p>
        <h2 id="table-heading">Selected official cutoff entries</h2>
      </div>
      <p class="tool-note">For full coverage and verification, consult the source PDF. fileciteturn0file0</p>
    </div>

    <div class="cutoff-table-wrap">
      <table class="cutoff-table">
        <thead>
          <tr>
            <th>Programme code</th>
            <th>Institution</th>
            <th>Programme</th>
            <th id="selected-year-heading">2024 cutoff</th>
            <th>2018–2024 history</th>
          </tr>
        </thead>
        <tbody id="cutoff-table-body"></tbody>
      </table>
    </div>
  </section>
</section>

<script>
  const cutoffData = [
    { code: "1263101", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF ARTS", family: "Arts", years: {"2018":"23.795","2019":"24.075","2020":"27.036","2021":"24.382","2022":"26.506","2023":"23.248","2024":"23.031"} },
    { code: "1111101", institution: "KENYATTA UNIVERSITY", programme: "BACHELOR OF ARTS", family: "Arts", years: {"2018":"25.612","2019":"26.988","2020":"28.196","2021":"25.034","2022":"28.578","2023":"24.057","2024":"25.617"} },
    { code: "1263102", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF ARCHITECTURAL STUDIES/BACHELOR OF ARCHITECTURE", family: "Architecture", years: {"2018":"43.755","2019":"44.41","2020":"43.902","2021":"43.198","2022":"43.794","2023":"42.99","2024":"42.524"} },
    { code: "1249102", institution: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY", programme: "BACHELOR OF ARCHITECTURAL STUDIES/BACHELOR OF ARCHITECTURE", family: "Architecture", years: {"2018":"39.92","2019":"42.967","2020":"43.16","2021":"42.016","2022":"42.528","2023":"41.803","2024":"41.779"} },
    { code: "1263107", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)", family: "Actuarial Science", years: {"2018":"41.848","2019":"41.816","2020":"38.514","2021":"40.134","2022":"39.271","2023":"39.531","2024":"37.039"} },
    { code: "1111107", institution: "KENYATTA UNIVERSITY", programme: "BACHELOR OF SCIENCE (ACTUARIAL SCIENCE)", family: "Actuarial Science", years: {"2018":"41.214","2019":"40.194","2020":"38.135","2021":"36.908","2022":"31.842","2023":"34.474","2024":"34.712"} },
    { code: "1263108", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF SCIENCE (INDUSTRIAL CHEMISTRY)", family: "Industrial Chemistry", years: {"2018":"37.695","2019":"38.218","2020":"32.052","2021":"33.535","2022":"31.98","2023":"27.458","2024":"26.864"} },
    { code: "1263109", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF SCIENCE (MATHEMATICS)", family: "Mathematics", years: {"2018":"35.355","2019":"36.659","2020":"34.562","2021":"33.862","2022":"32.487","2023":"32.945","2024":"29.054"} },
    { code: "1105115", institution: "CHUKA UNIVERSITY", programme: "BACHELOR OF SCIENCE (COMPUTER SCIENCE)", family: "Computer Science", years: {"2018":"31.983","2019":"34.108","2020":"34.534","2021":"33.917","2022":"35.626","2023":"35.372","2024":"35.794"} },
    { code: "1082115", institution: "MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY", programme: "BACHELOR OF SCIENCE (COMPUTER SCIENCE)", family: "Computer Science", years: {"2018":"33.065","2019":"35.165","2020":"35.965","2021":"34.082","2022":"36.441","2023":"36.48","2024":"34.815"} },
    { code: "1087115", institution: "KISII UNIVERSITY", programme: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE", family: "Computer Science", years: {"2018":"24.726","2019":"26.915","2020":"30.016","2021":"19.223","2022":"23.378","2023":"23.41","2024":"24.741"} },
    { code: "1080309", institution: "CO-OPERATIVE UNIVERSITY OF KENYA", programme: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE", family: "Computer Science", years: {"2018":"29.726","2019":"31.679","2020":"34.636","2021":"36.09","2022":"38.257","2023":"37.695","2024":"38.858"} },
    { code: "1249115", institution: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY", programme: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE", family: "Computer Science", years: {"2018":"42.352","2019":"42.978","2020":"42.983","2021":"42.489","2022":"43.809","2023":"44.101","2024":"43.23"} },
    { code: "1173115", institution: "DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY", programme: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE", family: "Computer Science", years: {"2018":"35.012","2019":"37.924","2020":"38.603","2021":"38.87","2022":"39.405","2023":"39.746","2024":"39.579"} },
    { code: "1164115", institution: "MULTIMEDIA UNIVERSITY OF KENYA", programme: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE", family: "Computer Science", years: {"2018":"39.435","2019":"40.414","2020":"40.844","2021":"41.049","2022":"41.44","2023":"41.039","2024":"41.29"} },
    { code: "1263115", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF SCIENCE (COMPUTER SCIENCE)", family: "Computer Science", years: {"2018":"42.466","2019":"43.666","2020":"43.162","2021":"44.178","2022":"44.122","2023":"44.825","2024":"44.401"} },
    { code: "1253115", institution: "MOI UNIVERSITY", programme: "BACHELOR OF SCIENCE (COMPUTER SCIENCE)", family: "Computer Science", years: {"2018":"38.579","2019":"40.064","2020":"40.392","2021":"39.701","2022":"37.892","2023":"38.968","2024":"22.815"} },
    { code: "1229115", institution: "MASENO UNIVERSITY", programme: "BACHELOR OF SCIENCE (COMPUTER SCIENCE)", family: "Computer Science", years: {"2018":"34.28","2019":"36.696","2020":"36.506","2021":"36.045","2022":"37.84","2023":"38.155","2024":"36.264"} },
    { code: "1170115", institution: "MACHAKOS UNIVERSITY", programme: "BACHELOR OF SCIENCE (COMPUTER SCIENCE)", family: "Computer Science", years: {"2018":"30.396","2019":"33.343","2020":"34.523","2021":"31.822","2022":"34.867","2023":"35.264","2024":"34.156"} },
    { code: "1165115", institution: "MAASAI MARA UNIVERSITY", programme: "BACHELOR OF SCIENCE (COMPUTER SCIENCE)", family: "Computer Science", years: {"2018":"29.185","2019":"29.649","2020":"30.669","2021":"19.223","2022":"31.458","2023":"32.782","2024":"33.828"} },
    { code: "1111115", institution: "KENYATTA UNIVERSITY", programme: "BACHELOR OF SCIENCE (COMPUTER SCIENCE)", family: "Computer Science", years: {"2018":"41.559","2019":"42.442","2020":"41.828","2021":"42.474","2022":"43.23","2023":"43.497","2024":"42.399"} },
    { code: "1063116", institution: "TECHNICAL UNIVERSITY OF MOMBASA", programme: "BACHELOR OF SCIENCE IN CIVIL ENGINEERING", family: "Civil Engineering", years: {"2018":"38.632","2019":"40.076","2020":"39.44","2021":"36.844","2022":"38.702","2023":"38.391","2024":"37.233"} },
    { code: "1249116", institution: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY", programme: "BACHELOR OF SCIENCE IN CIVIL ENGINEERING", family: "Civil Engineering", years: {"2018":"42.661","2019":"43.437","2020":"42.041","2021":"42.143","2022":"42.178","2023":"42.618","2024":"42.3"} },
    { code: "1263116", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF SCIENCE (CIVIL ENGINEERING)", family: "Civil Engineering", years: {"2018":"43.447","2019":"44.167","2020":"42.812","2021":"42.723","2022":"43.091","2023":"43.463","2024":"43.121"} },
    { code: "1111116", institution: "KENYATTA UNIVERSITY", programme: "BACHELOR OF SCIENCE (CIVIL ENGINEERING)", family: "Civil Engineering", years: {"2018":"42.295","2019":"43.178","2020":"42.336","2021":"41.517","2022":"42.148","2023":"42.574","2024":"42.546"} },
    { code: "1249117", institution: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY", programme: "BACHELOR OF SCIENCE IN ELECTRICAL AND ELECTRONIC ENGINEERING", family: "Electrical Engineering", years: {"2018":"42.965","2019":"43.407","2020":"42.379","2021":"41.272","2022":"42.291","2023":"42.434","2024":"42.755"} },
    { code: "1263117", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF SCIENCE (ELECTRICAL AND ELECTRONIC ENGINEERING)", family: "Electrical Engineering", years: {"2018":"42.974","2019":"43.787","2020":"42.596","2021":"41.218","2022":"42.776","2023":"43.003","2024":"42.208"} },
    { code: "1111117", institution: "KENYATTA UNIVERSITY", programme: "BACHELOR OF SCIENCE (ELECTRICAL & ELECTRONICS ENGINEERING)", family: "Electrical Engineering", years: {"2018":"42.287","2019":"43.202","2020":"42.122","2021":"40.965","2022":"42.125","2023":"42.275","2024":"42.271"} },
    { code: "1263118", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF SCIENCE (MECHANICAL ENGINEERING)", family: "Mechanical Engineering", years: {"2018":"41.766","2019":"42.395","2020":"41.675","2021":"40.593","2022":"41.321","2023":"41.835","2024":"41.798"} },
    { code: "1111118", institution: "KENYATTA UNIVERSITY", programme: "BACHELOR OF SCIENCE (MECHANICAL ENGINEERING)", family: "Mechanical Engineering", years: {"2018":"40.806","2019":"41.879","2020":"40.495","2021":"40.409","2022":"41.033","2023":"41.109","2024":"40.925"} },
    { code: "1087129", institution: "KISII UNIVERSITY", programme: "BACHELOR OF PHARMACY", family: "Pharmacy", years: {"2021":"42.017","2022":"43.003","2023":"43.111","2024":"42.776"} },
    { code: "1229129", institution: "MASENO UNIVERSITY", programme: "BACHELOR OF PHARMACY, WITH IT", family: "Pharmacy", years: {"2020":"41.636","2021":"42.847","2022":"43.126","2023":"43.308","2024":"42.967"} },
    { code: "1279129", institution: "MOUNT KENYA UNIVERSITY", programme: "BACHELOR OF PHARMACY", family: "Pharmacy", years: {"2018":"40.908","2019":"42.538","2020":"43.306","2021":"43.292","2022":"39.982","2023":"42.989","2024":"42.484"} },
    { code: "1263129", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF PHARMACY", family: "Pharmacy", years: {"2018":"42.627","2019":"43.805","2020":"43.874","2021":"43.68","2022":"43.885","2023":"44.452","2024":"43.457"} },
    { code: "1249129", institution: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY", programme: "BACHELOR OF PHARMACY", family: "Pharmacy", years: {"2018":"42.024","2019":"43.083","2020":"43.503","2021":"43.083","2022":"43.483","2023":"43.872","2024":"43.697"} },
    { code: "1111129", institution: "KENYATTA UNIVERSITY", programme: "BACHELOR OF PHARMACY", family: "Pharmacy", years: {"2018":"42.262","2019":"43.525","2020":"43.508","2021":"43.604","2022":"43.541","2023":"44.01","2024":"43.381"} },
    { code: "1057131", institution: "EGERTON UNIVERSITY", programme: "BACHELOR OF MEDICINE & BACHELOR OF SURGERY", family: "Medicine", years: {"2018":"42.743","2019":"43.706","2020":"44.207","2021":"43.749","2022":"44.079","2023":"44.563","2024":"44.504"} },
    { code: "1087131", institution: "KISII UNIVERSITY", programme: "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY", family: "Medicine", years: {"2018":"39.003","2019":"42.746","2020":"43.786","2021":"43.815","2022":"44.012","2023":"44.434","2024":"44.149"} },
    { code: "1111131", institution: "KENYATTA UNIVERSITY", programme: "BACHELOR OF MEDICINE & BACHELOR OF SURGERY (M.B.CH.B.)", family: "Medicine", years: {"2018":"43.639","2019":"44.609","2020":"44.937","2021":"44.995","2022":"44.914","2023":"45.433","2024":"44.904"} },
    { code: "1229131", institution: "MASENO UNIVERSITY", programme: "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY (WITH IT)", family: "Medicine", years: {"2018":"42.259","2019":"43.586","2020":"44.083","2021":"44.143","2022":"44.463","2023":"44.787","2024":"44.602"} },
    { code: "1279131", institution: "MOUNT KENYA UNIVERSITY", programme: "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY", family: "Medicine", years: {"2018":"41.005","2019":"44.042","2020":"44.436","2021":"44.557","2022":"43.486","2023":"44.35","2024":"44.504"} },
    { code: "1263131", institution: "UNIVERSITY OF NAIROBI", programme: "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY", family: "Medicine", years: {"2018":"44.16","2019":"45.073","2020":"45.317","2021":"45.106","2022":"45.034","2023":"45.584","2024":"44.926"} }
  ];

  const searchInput = document.getElementById('search-input');
  const institutionFilter = document.getElementById('institution-filter');
  const programmeFilter = document.getElementById('programme-filter');
  const yearFilter = document.getElementById('year-filter');
  const sortFilter = document.getElementById('sort-filter');
  const resetButton = document.getElementById('reset-filters');
  const resultCount = document.getElementById('result-count');
  const tableBody = document.getElementById('cutoff-table-body');
  const selectedYearHeading = document.getElementById('selected-year-heading');

  const uniqueInstitutions = [...new Set(cutoffData.map(item => item.institution))].sort();
  const uniqueFamilies = [...new Set(cutoffData.map(item => item.family))].sort();

  uniqueInstitutions.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    institutionFilter.appendChild(option);
  });

  uniqueFamilies.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    programmeFilter.appendChild(option);
  });

  function numericCutoff(value) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  function historyMarkup(years) {
    return ['2018','2019','2020','2021','2022','2023','2024']
      .map(year => `<span><strong>${year}</strong>: ${years[year] ?? '-'}</span>`)
      .join(' · ');
  }

  function filteredData() {
    const query = searchInput.value.trim().toLowerCase();
    const institution = institutionFilter.value;
    const family = programmeFilter.value;
    const year = yearFilter.value;
    const sort = sortFilter.value;

    let items = cutoffData.filter(item => {
      const haystack = `${item.code} ${item.institution} ${item.programme} ${item.family}`.toLowerCase();
      const queryMatch = !query || haystack.includes(query);
      const institutionMatch = !institution || item.institution === institution;
      const familyMatch = !family || item.family === family;
      return queryMatch && institutionMatch && familyMatch;
    });

    items.sort((a, b) => {
      if (sort === 'programme-asc') return a.programme.localeCompare(b.programme);
      if (sort === 'institution-asc') return a.institution.localeCompare(b.institution);
      if (sort === 'code-asc') return a.code.localeCompare(b.code);

      const aValue = numericCutoff(a.years[year]);
      const bValue = numericCutoff(b.years[year]);
      const aRank = aValue === null ? (sort === 'cutoff-asc' ? Infinity : -Infinity) : aValue;
      const bRank = bValue === null ? (sort === 'cutoff-asc' ? Infinity : -Infinity) : bValue;

      return sort === 'cutoff-asc' ? aRank - bRank : bRank - aRank;
    });

    return items;
  }

  function renderTable() {
    const year = yearFilter.value;
    const items = filteredData();
    selectedYearHeading.textContent = `${year} cutoff`;
    resultCount.textContent = `Showing ${items.length} entr${items.length === 1 ? 'y' : 'ies'}`;

    if (!items.length) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="5" class="cutoff-empty">No entries match your current filters.</td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = items.map(item => `
      <tr>
        <td>${item.code}</td>
        <td>${item.institution}</td>
        <td>${item.programme}</td>
        <td>${item.years[year] ?? '-'}</td>
        <td class="cutoff-history">${historyMarkup(item.years)}</td>
      </tr>
    `).join('');
  }

  [searchInput, institutionFilter, programmeFilter, yearFilter, sortFilter].forEach(element => {
    element.addEventListener('input', renderTable);
    element.addEventListener('change', renderTable);
  });

  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    institutionFilter.value = '';
    programmeFilter.value = '';
    yearFilter.value = '2024';
    sortFilter.value = 'cutoff-desc';
    renderTable();
  });

  renderTable();
</script>
