$(document).ready(function(){
  
  $('.slick-slider').slick({
    autoplay: true,
infinite: true,
lazyLoad: 'ondemand',
accessibility: true, 
speed: 500,
fade: true,
cssEase: 'linear',
prevArrow: ".prev",
      nextArrow: ".next",
});

$('.slick-slider-2').slick({
    speed: 800,
    prevArrow: ".slick-slider-2-prev-1",
    nextArrow: ".slick-slider-2-next-1"

});
});
