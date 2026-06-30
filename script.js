document.addEventListener('DOMContentLoaded', function () {

  /* ===== SCROLL REVEAL ===== */
  const revealItems = document.querySelectorAll('.reveal-item');
  if (revealItems.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    revealItems.forEach(function (el) { observer.observe(el); });
  }

  /* ===== MOBILE BURGER MENU ===== */
  var burger = document.querySelector('.burger');
  var headerNav = document.querySelector('.nav');
  var headerCta = document.querySelector('.header-cta');

  if (burger) {
    burger.addEventListener('click', function () {
      var isOpen = headerNav.style.display === 'flex';
      headerNav.style.display = isOpen ? 'none' : 'flex';
      headerCta.style.display = isOpen ? 'none' : 'flex';

      if (!isOpen) {
        headerNav.style.flexDirection = 'column';
        headerNav.style.position = 'absolute';
        headerNav.style.top = '72px';
        headerNav.style.left = '0';
        headerNav.style.right = '0';
        headerNav.style.background = 'rgba(255,255,255,0.98)';
        headerNav.style.padding = '20px 24px';
        headerNav.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
        headerNav.style.gap = '16px';
        headerNav.style.zIndex = '99';

        headerCta.style.position = 'absolute';
        headerCta.style.top = '196px';
        headerCta.style.left = '24px';
        headerCta.style.right = '24px';
        headerCta.style.width = 'auto';
        headerCta.style.zIndex = '99';
      }
    });
  }

  /* ===== FORM SUBMIT HANDLER ===== */
  var forms = document.querySelectorAll('.order-form, .subscribe-form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = this.parentElement.querySelector('.form-success');
      if (success) {
        this.style.display = 'none';
        success.style.display = 'block';
      }
    });
  });

  /* ===== COUNTER ANIMATION ===== */
  var countEl = document.getElementById('count');
  if (countEl) {
    var start = 24;
    var end = 12;
    var duration = 4000;
    var startTime = null;

    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var current = Math.floor(start + (end - start) * progress);
      countEl.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    }
    setTimeout(function () {
      requestAnimationFrame(animateCount);
    }, 3000);
  }

  /* ===== HEADER SCROLL EFFECT ===== */
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

});
