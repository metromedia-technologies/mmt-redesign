export default (($) => {

const headlineLockup = $('.headline__lockup');

$(window).on('load', () => {
  headlineLockup.removeClass('hide-headline');
});

})(jQuery);
