(function () {
  var root = document.documentElement;
  var storageKey = "victor-theme";
  var allowedThemes = ["day", "rust", "night"];
  var themeSelect = document.querySelector("[data-theme-select]");
  var revealTargets = Array.prototype.slice.call(
    document.querySelectorAll(".hero-copy, .hero-panel, .panel, .showcase-card, .card, .feature-card, .news-item, .timeline-item")
  );

  function setTheme(theme) {
    if (allowedThemes.indexOf(theme) === -1) {
      theme = "day";
    }
    root.setAttribute("data-theme", theme);
    if (themeSelect) {
      themeSelect.value = theme;
    }
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch (error) {
    savedTheme = null;
  }

  setTheme(savedTheme || root.getAttribute("data-theme") || "day");

  if (themeSelect) {
    themeSelect.addEventListener("change", function () {
      setTheme(themeSelect.value);
    });
  }

  if (!("IntersectionObserver" in window)) {
    return;
  }

  revealTargets.forEach(function (element) {
    element.classList.add("reveal");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach(function (element) {
    observer.observe(element);
  });
})();
