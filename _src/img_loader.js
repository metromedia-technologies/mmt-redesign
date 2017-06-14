$('<img/>').attr('src', './assets/img/4.jpg').on('load', function() {
  $(this).remove();
  heroCoverPhoto.css('background-image', 'linear-gradient(-45deg, rgba(59,62,71, 0.9), rgba(59,62,71, 0.7)), url(./assets/img/4.jpg)');
  heroCoverPhoto.removeClass('blur-hero-image');
});
