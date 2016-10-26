'use strict';
(function(){
    

  $('.main-slider').carousel({
    visible: 1,
    itemMargin: 0,
    autoRotate: 6000
  });
  $('.audio-brands-slider').carousel({
    visible: 6,
    itemMinWidth: 96.92,
    itemEqualHeight: 65,
    itemMargin: 0,
  });
  $('.audio-product-slider').carousel({
    visible: 3,
    itemMinWidth: 250,
    itemEqualHeight: 400
  });
  $('.speaker-brands-slider').carousel({
    visible: 6,
    itemMinWidth: 96.92,
    itemEqualHeight: 65,
    itemMargin: 0,
  });
  $('.speaker-product-slider').carousel({
    visible: 3,
    itemMinWidth: 250,
    itemEqualHeight: 400
  });
  $('.computer-brands-slider').carousel({
    visible: 6,
    itemMinWidth: 96.92,
    itemEqualHeight: 65,
    itemMargin: 0,
  });
  $('.computer-product-slider').carousel({
    visible: 3,
    itemMinWidth: 250,
    itemEqualHeight: 400
  });
  $('.gear-brands-slider').carousel({
    visible: 6,
    itemMinWidth: 96.92,
    itemEqualHeight: 65,
    itemMargin: 0,
  });
  $('.gear-product-slider').carousel({
    visible: 3,
    itemMinWidth: 250,
    itemEqualHeight: 400
  });
  $('.news-slider').carousel({
    visible: 1,
  });
  $('.brands-sliderz').carousel({
    visible: 3,
  });
  $('.nav-vertical').click(function () {
    $('.nav-item').slideToggle();
    console.log("its work");
  });
}());