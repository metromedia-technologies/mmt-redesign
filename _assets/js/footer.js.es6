(($) => {

const nycBtn = $('#nyc-btn');
const nycImage = $('#office-nyc');
const nycAddress = $('#nyc-address');
const laBtn = $('#la-btn');
const laImage = $('#office-la');
const laAddress = $('#la-address');
const woosterBtn = $('#wooster-btn');
const woosterImage = $('#office-wooster');
const woosterAddress = $('#wooster-address');

function removeActiveState(btnEl, imageEl, addressEl) {
  btnEl.removeClass('active');
  imageEl.removeClass('office-image__img--active');
  addressEl.removeClass('contact__address--active');
}

nycBtn.click((e) => {
  e.preventDefault();
  removeActiveState(nycBtn, nycImage, nycAddress);
  removeActiveState(laBtn, laImage, laAddress);
  removeActiveState(woosterBtn, woosterImage, woosterAddress);

  nycBtn.addClass('active');
  nycImage.addClass('office-image__img--active');
  nycAddress.addClass('contact__address--active');
});

laBtn.click((e) => {
  e.preventDefault();
  removeActiveState(nycBtn, nycImage, nycAddress);
  removeActiveState(laBtn, laImage, laAddress);
  removeActiveState(woosterBtn, woosterImage, woosterAddress);

  laBtn.addClass('active');
  laImage.addClass('office-image__img--active');
  laAddress.addClass('contact__address--active');
});

woosterBtn.click((e) => {
  e.preventDefault();
  removeActiveState(nycBtn, nycImage, nycAddress);
  removeActiveState(laBtn, laImage, laAddress);
  removeActiveState(woosterBtn, woosterImage, woosterAddress);

  woosterBtn.addClass('active');
  woosterImage.addClass('office-image__img--active');
  woosterAddress.addClass('contact__address--active');
});

})(jQuery);
