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
});
