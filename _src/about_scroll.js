export default (($) => {
  const $window = $(window);
  const $foundingText = $('#founding-text');
  const $foundingImage = $('#founding-image');

  $( document ).ready(() => {
    $foundingText.removeClass('about-left--hide');
    $foundingImage.removeClass('about-right--hide');
    setTimeout(() => {
      $('#founder-image').removeClass('about-left--hide');
      $('#founder-text').removeClass('about-right--hide');
    }, 300);
  });


  $window.scroll(() => {
    const scrollTop = $window.scrollTop();

    if(isScrolledIntoView($('#digital-image'), ($(window).height() / 3))) {
      $('#digital-image').removeClass('about-right--hide');
    }
    if(isScrolledIntoView($('#digital-text'), ($(window).height() / 3))) {
      $('#digital-text').removeClass('about-left--hide');
    }
    if(isScrolledIntoView($('#efficiency-image'), ($(window).height() / 3))) {
      $('#efficiency-image').removeClass('about-left--hide');
    }
    if(isScrolledIntoView($('#efficiency-text'), ($(window).height() / 3))) {
      $('#efficiency-text').removeClass('about-right--hide');
    }
    if(isScrolledIntoView($('#oneprint-image'), ($(window).height() / 3))) {
      $('#oneprint-image').removeClass('about-right--hide');
    }
    if(isScrolledIntoView($('#oneprint-text'), ($(window).height() / 3))) {
      $('#oneprint-text').removeClass('about-left--hide');
    }
  });

  function isScrolledIntoView(elem, offsetDistance) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + offsetDistance;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
})(jQuery);
