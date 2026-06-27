// systemhaus24.net — minimal vanilla JS, no third-party scripts

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var cta = document.querySelector('.nav-cta');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      if (cta) cta.classList.toggle('open');
    });
  }

  // Simple client-side honeypot + math check before allowing submit
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var honeypot = form.querySelector('.honeypot-field input');
      if (honeypot && honeypot.value) {
        e.preventDefault();
        return;
      }
      var answer = form.querySelector('#captcha-answer');
      var a = form.querySelector('#captcha-a');
      var b = form.querySelector('#captcha-b');
      if (answer && a && b) {
        var expected = parseInt(a.textContent, 10) + parseInt(b.textContent, 10);
        if (parseInt(answer.value, 10) !== expected) {
          e.preventDefault();
          alert('Bitte die Rechenaufgabe korrekt lösen.');
        }
      }
    });
  }

  // Generate simple math captcha numbers
  var ca = document.querySelector('#captcha-a');
  var cb = document.querySelector('#captcha-b');
  if (ca && cb) {
    ca.textContent = String(Math.floor(Math.random() * 8) + 1);
    cb.textContent = String(Math.floor(Math.random() * 8) + 1);
  }

  // Subtle 3D tilt on the hero dashboard mockup, following the cursor
  var heroMedia = document.querySelector('.hero-media');
  var heroGraphic = document.querySelector('.hero-graphic');
  if (heroMedia && heroGraphic && window.matchMedia('(hover: hover)').matches) {
    var baseScale = window.innerWidth <= 900 ? 1.05 : 1.22;
    heroMedia.addEventListener('mousemove', function (e) {
      var rect = heroMedia.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      var rotateY = x * 12;
      var rotateX = y * -12;
      heroGraphic.style.transform =
        'scale(' + baseScale + ') rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    });
    heroMedia.addEventListener('mouseleave', function () {
      heroGraphic.style.transform = 'scale(' + baseScale + ')';
    });
  }

  // Design v2: mobile nav toggle + tap-to-open dropdown
  var shToggle = document.querySelector('.sh-nav-toggle');
  var shLinks = document.querySelector('.sh-nav .links');
  if (shToggle && shLinks) {
    shToggle.addEventListener('click', function () {
      shLinks.classList.toggle('open');
    });
  }
  document.querySelectorAll('.sh-nav-dropdown > span').forEach(function (label) {
    label.addEventListener('click', function (e) {
      if (window.innerWidth > 760) return;
      e.preventDefault();
      label.parentElement.classList.toggle('open');
    });
  });
});
