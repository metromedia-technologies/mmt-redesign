!function(e){function t(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(e,t,i){e.removeClass("active"),t.removeClass("office-image__img--active"),i.removeClass("contact__address--active")}var i=e("#nyc-btn"),o=e("#office-nyc"),a=e("#nyc-address"),n=e("#la-btn"),r=e("#office-la"),c=e("#la-address"),s=e("#wooster-btn"),d=e("#office-wooster"),l=e("#wooster-address");i.click(function(e){e.preventDefault(),t(i,o,a),t(n,r,c),t(s,d,l),i.addClass("active"),o.addClass("office-image__img--active"),a.addClass("contact__address--active")}),n.click(function(e){e.preventDefault(),t(i,o,a),t(n,r,c),t(s,d,l),n.addClass("active"),r.addClass("office-image__img--active"),c.addClass("contact__address--active")}),s.click(function(e){e.preventDefault(),t(i,o,a),t(n,r,c),t(s,d,l),s.addClass("active"),d.addClass("office-image__img--active"),l.addClass("contact__address--active")})}(jQuery)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e(".nav__mobile-toggle"),i=e(".mobile-nav"),o=e(".mobile-nav__close-btn");t.click(function(){i.toggleClass("mobile-nav--expanded")}),o.click(function(){i.toggleClass("mobile-nav--expanded")})}(jQuery)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,i){var o=e(window).scrollTop(),a=o+e(window).height(),n=e(t).offset().top;return n+i<=a&&n>=o}var i=e(window),o=e("#founding-text"),a=e("#founding-image");e(".about__heading");e(document).ready(function(){o.removeClass("about-left--hide"),a.removeClass("about-right--hide")}),i.scroll(function(){i.scrollTop();t(e("#founder-image"),e(window).height()/3)&&e("#founder-image").removeClass("about-left--hide"),t(e("#founder-text"),e(window).height()/3)&&e("#founder-text").removeClass("about-right--hide"),t(e("#digital-image"),e(window).height()/3)&&e("#digital-image").removeClass("about-right--hide"),t(e("#digital-text"),e(window).height()/3)&&e("#digital-text").removeClass("about-left--hide"),t(e("#efficiency-image"),e(window).height()/3)&&e("#efficiency-image").removeClass("about-left--hide"),t(e("#efficiency-text"),e(window).height()/3)&&e("#efficiency-text").removeClass("about-right--hide"),t(e("#oneprint-image"),e(window).height()/3)&&e("#oneprint-image").removeClass("about-right--hide"),t(e("#oneprint-text"),e(window).height()/3)&&e("#oneprint-text").removeClass("about-left--hide")})}(jQuery)},,,,,,function(e,t,i){"use strict";i(1),i(2),i(0)}]);