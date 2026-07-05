(function () {
  function initTestimonials(root) {
    var pages = Array.prototype.slice.call(root.querySelectorAll('.ch-testimonials__page'));
    var dots = Array.prototype.slice.call(root.querySelectorAll('.ch-testimonials__dot'));
    var prevBtn = root.querySelector('[data-testimonial-prev]');
    var nextBtn = root.querySelector('[data-testimonial-next]');
    var total = pages.length;
    if (total === 0) return;

    var current = 0;
    var autoplay = root.getAttribute('data-autoplay') === 'true';
    var interval = parseInt(root.getAttribute('data-interval'), 10) || 6500;
    var timer = null;

    function show(index) {
      current = ((index % total) + total) % total;
      pages.forEach(function (page, i) {
        page.classList.toggle('is-active', i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === current);
      });
    }

    function stopAutoplay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function startAutoplay() {
      if (!autoplay || total < 2) return;
      timer = setInterval(function () {
        show(current + 1);
      }, interval);
    }

    function goTo(index) {
      show(index);
      stopAutoplay();
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    show(0);
    startAutoplay();
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.slice.call(document.querySelectorAll('[data-ch-testimonials]')).forEach(initTestimonials);
  });
})();
