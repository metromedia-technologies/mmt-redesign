export default (($) => {

const headlineLockup = $('.headline__lockup');
const heroCoverPhoto = $('.hero__cover-photo');

$(window).on('load', () => {
  heroCoverPhoto.removeClass('blur-hero-image');
  headlineLockup.removeClass('hide-headline');
});

})(jQuery);
