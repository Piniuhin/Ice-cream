!(function () {
  'use strict';
  function a() {
    window.pageYOffset > 0 && (window.scrollBy(0, -80), setTimeout(a, 9));
  }
  var b = document.querySelector('.back_to_top');
  window.addEventListener('scroll', function () {
    var a = window.pageYOffset,
      c = document.documentElement.clientHeight;
    a > c && b.classList.add('back_to_top-show'), a < c && b.classList.remove('back_to_top-show');
  }),
    b.addEventListener('click', a);
})();
