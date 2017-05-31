---
---

(($) => {

  const $productLink = $('.product__link');
  const $productDetails = $('.product__details');
  const $productBKG = $('.product__bkg');

  $productLink.hover(function() {
    $(this).find('.product__details').addClass('showing');
  }, function() {
    $(this).find('.product__details').removeClass('showing');
  });


})(jQuery);
