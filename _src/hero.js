export default (($) => {

const headlineLockup = $('.headline__lockup');
const heroCoverPhoto = $('.hero__cover-photo');
const vid = $('#video');
const vidBtn = $('.video-play-btn');

$(window).on('load', () => {
  headlineLockup.removeClass('hide-headline');
});

vidBtn.click(() => {
  if (vid.get(0).paused) {
    headlineLockup.addClass('hide-headline');
    heroCoverPhoto.addClass('hide-cover-img');
    vid.get(0).play();
  } else {
    vid.get(0).pause();
  }
});

vid.get(0).addEventListener('ended', () => {
  headlineLockup.removeClass('hide-headline');
  heroCoverPhoto.removeClass('hide-cover-img');
  vid.get(0).currentTime = 0;
});

})(jQuery);
