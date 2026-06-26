(function () {
  /* ── Theme switcher ─────────────────────────────────── */
  var root = document.documentElement;
  var storageKey = "vo-theme";
  var allowed = ["default", "warm", "night"];

  function setTheme(t) {
    if (allowed.indexOf(t) === -1) t = "default";
    if (t === "default") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", t);
    }
    var sel = document.querySelector("[data-theme-select]");
    if (sel) sel.value = t;
    try { localStorage.setItem(storageKey, t); } catch (e) {}
    updateParticleColor();
  }

  var saved = null;
  try { saved = localStorage.getItem(storageKey); } catch (e) {}
  setTheme(saved || "default");

  document.addEventListener("change", function (e) {
    if (e.target && e.target.hasAttribute("data-theme-select")) {
      setTheme(e.target.value);
    }
  });

  /* ── Particle network ───────────────────────────────── */
  var canvas = document.createElement("canvas");
  canvas.id = "particle-canvas";
  document.body.insertBefore(canvas, document.body.firstChild);
  var ctx = canvas.getContext("2d");

  var W, H;
  var COUNT = 55;
  var LINK_DIST = 115;
  var particleColor = "0,0,180";
  var particles = [];

  function updateParticleColor() {
    var theme = root.getAttribute("data-theme") || "default";
    if (theme === "night") {
      particleColor = "110,168,255";
    } else if (theme === "warm") {
      particleColor = "181,74,42";
    } else {
      particleColor = "0,0,180";
    }
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * (W || 800),
      y: Math.random() * (H || 600),
      r: Math.random() * 1.6 + 0.5,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      alpha: Math.random() * 0.35 + 0.08
    };
  }

  function wrapParticle(p) {
    if (p.x < -10) p.x = W + 10;
    if (p.x > W + 10) p.x = -10;
    if (p.y < -10) p.y = H + 10;
    if (p.y > H + 10) p.y = -10;
  }

  resize();
  updateParticleColor();
  for (var i = 0; i < COUNT; i++) particles.push(makeParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    var col = particleColor;

    for (var a = 0; a < particles.length; a++) {
      for (var b = a + 1; b < particles.length; b++) {
        var dx = particles[a].x - particles[b].x;
        var dy = particles[a].y - particles[b].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(" + col + "," + ((1 - dist / LINK_DIST) * 0.12) + ")";
          ctx.lineWidth = 0.7;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    for (var j = 0; j < particles.length; j++) {
      var p = particles[j];
      p.x += p.vx;
      p.y += p.vy;
      wrapParticle(p);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + col + "," + p.alpha + ")";
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  draw();
})();
