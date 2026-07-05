(function () {
  function initHeader(header) {
    var threshold = parseInt(header.getAttribute('data-threshold'), 10) || 70;

    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      header.classList.toggle('is-scrolled', y > threshold);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('[data-ch-header]');
    if (header) initHeader(header);
  });
})();
