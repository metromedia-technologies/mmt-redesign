export default (($) => {

const headlineLockup = $('.headline__lockup');
const heroCoverPhoto = $('.hero__cover-photo');

$(window).on('load', () => {
  headlineLockup.removeClass('hide-headline');
  heroCoverPhoto.removeClass('blur-hero-image');
});

})(jQuery);
