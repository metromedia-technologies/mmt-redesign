---
---

(($) => {
  const $window = $(window);
  const $date = $('.date__lockup');
  const $year = $('.about__year');
  const $dotYear = $('.dot__date');
  const $heading = $('.about__heading');
  const $body = $('.about__body');
  const $event1 = $('.about__event-1');
  const $event2 = $('.about__event-2');

  let year = 1987;

  $date.stick_in_parent({offset_top: 70});

  $( document ).ready(() => {
    $event1.addClass('about--showing');
    $heading.eq(0).addClass('about--showing');
    $body.eq(0).addClass('about--showing');

    $year.animate({opacity: 1}, 400);
  });

  $(window).resize(function(){
  	if ($(window).width() <= 809){
  		$dotYear.css('display', 'inline-block');

      if($dotYear.offset().top >= $event1.offset().top - 70 && $dotYear.offset().top <= $event2.offset().top - 140 && year != 1987) {
        dateChange(1987);
      } else if($dotYear.offset().top >= $event2.offset().top - 140 && year != 1995) {
        dateChange(1995);
      }
  	}	else if($(window).width() > 809) {
      $dotYear.css('display', 'none');

      if($date.offset().top >= $event1.offset().top - 70 && $year.offset().top <= $event2.offset().top - 75 && year != 1987) {
        dateChange(1987);
      } else if($date.offset().top >= $event2.offset().top - 65 && year != 1995) {
        dateChange(1995);
      }
    }
  });

  $window.scroll(() => {
    const scrollTop = $window.scrollTop();

    if(isScrolledIntoView($('.about__event-2'), ($(window).height() - 140))) {
      $event2.addClass('about--showing');
      $heading.eq(1).addClass('about--showing');
      $body.eq(1).addClass('about--showing');
    }

    if ($(window).width() <= 809){
      if($dotYear.offset().top >= $event1.offset().top - 70 && $dotYear.offset().top <= $event2.offset().top - 140 && year != 1987) {
        dateChange(1987);
      } else if($dotYear.offset().top >= $event2.offset().top - 140 && year != 1995) {
        dateChange(1995);
      }
    } else {
      if($date.offset().top >= $event1.offset().top - 70 && $year.offset().top <= $event2.offset().top - 75 && year != 1987) {
        dateChange(1987);
      } else if($date.offset().top >= $event2.offset().top - 65 && year != 1995) {
        dateChange(1995);
      }
    }
  });

  function dateChange(newDate) {
    year = newDate;
    $year.velocity("stop", true);
    $dotYear.velocity("stop", true);

    $year.velocity("transition.slideUpBigOut", {
      duration: 250,
      complete: () => {
        $year.html(newDate);
      }
    }).velocity("transition.slideUpBigIn", {
      duration: 250,
    });

    if($dotYear.css('display') != 'none') {
      $dotYear.velocity("transition.slideUpBigOut", {
        duration: 250,
        complete: () => {
          $dotYear.html(newDate);
        }
      }).velocity("transition.slideUpBigIn", {
        duration: 250,
      });
    }
  }

  function isScrolledIntoView(elem, offsetDistance) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + offsetDistance;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
})(jQuery);
