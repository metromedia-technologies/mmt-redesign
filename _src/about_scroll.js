export default (($) => {
  const $window = $(window);
  const $foundingText = $('#founding-text');
  const $foundingImage = $('#founding-image');
  const $aboutHeading = $('.about__heading');

  $( document ).ready(() => {
    $foundingText.removeClass('about-left--hide');
    $foundingImage.removeClass('about-right--hide');
  });


  $window.scroll(() => {
    const scrollTop = $window.scrollTop();

    if(isScrolledIntoView($('#industry-image'), ($(window).height() / 3))) {
      $('#industry-image').removeClass('about-left--hide');
    }
    if(isScrolledIntoView($('#industry-text'), ($(window).height() / 3))) {
      $('#industry-text').removeClass('about-right--hide');
    }
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
  });

  function isScrolledIntoView(elem, offsetDistance) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + offsetDistance;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
})(jQuery);
