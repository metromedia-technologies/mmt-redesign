---
---
(($) => {

const mobileMenuBtn = $('.nav__mobile-toggle');
const mobileMenu = $('.mobile-nav');
const mobileCloseBtn = $('.mobile-nav__close-btn');

mobileMenuBtn.click(() => {
  mobileMenu.toggleClass('mobile-nav--expanded');
});

mobileCloseBtn.click(() => {
  mobileMenu.toggleClass('mobile-nav--expanded');
});

})(jQuery);
