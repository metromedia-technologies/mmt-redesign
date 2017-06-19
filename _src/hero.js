export default (($) => {

const headlineLockup = $('.headline__lockup');
const heroCoverPhoto = $('.hero__cover-photo');
const vid = $('#video');
const vidBtn = $('.video-play-btn');
const mediaControls = $('.media-controls');
const play = $('#play');
const pause = $('#pause');
const volume = $('#volume');
const mute = $('#mute');

$(window).on('load', () => {
  headlineLockup.removeClass('hide-headline');
});

vidBtn.click(() => {
  if (vid.get(0).paused) {
    headlineLockup.addClass('hide-headline');
    heroCoverPhoto.addClass('hide-cover-img');
    mediaControls.removeClass('hide-media-controls');
    vid.get(0).play();
  } else {
    vid.get(0).pause();
  }
});

pause.click(() => {
  vid.get(0).pause();
  pause.toggleClass('hide-media-btn');
  play.toggleClass('hide-media-btn');
});

play.click(() => {
  vid.get(0).play();
  pause.toggleClass('hide-media-btn');
  play.toggleClass('hide-media-btn');
});

volume.click(() => {
  vid.prop('muted', false);
  volume.toggleClass('hide-media-btn');
  mute.toggleClass('hide-media-btn');
});

mute.click(() => {
  vid.prop('muted', true);
  volume.toggleClass('hide-media-btn');
  mute.toggleClass('hide-media-btn');
});

vid.get(0).addEventListener('ended', () => {
  headlineLockup.removeClass('hide-headline');
  heroCoverPhoto.removeClass('hide-cover-img');
  mediaControls.addClass('hide-media-controls');
  vid.get(0).currentTime = 0;
});

})(jQuery);
