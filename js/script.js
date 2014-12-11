$(function() {
  var sliderul = $('.banner').children('ul');
  var imgs = sliderul.find('img');
  var widths =imgs.width(); // 600
  var imglength = imgs.length;
  // var animatSpeed=3000;
  // var pause =5000;
  var slideWidth = $('.banner ul li').width();
  var $slider = $('.banner');
  var $sliderContainer = $slider.find('.banners');
  var $slide = $sliderContainer.find('.bannr');
  var totalimgwidth = widths * imglength;
  var current = 3;
  var interval;

  function startslider() {
    sliderul.width(totalimgwidth);
    $sliderContainer.animate({
      'margin-left': '-=' +widths
    }, 2000, function() {
      $sliderContainer.find('li').first().appendTo($sliderContainer);
      
     
    });
    $sliderContainer.animate({
        'margin-left': '+=' + widths
      }, 0)
  }

  function start() {

    interval = setInterval(startslider, 2000);
  }

  function stopSlider() {
    console.log('stop');
    clearInterval(interval);
  }
  $('.next ').on('mouseenter', stopSlider).on('mouseleave', start);
  $('.prev ').on('mouseenter', stopSlider).on('mouseleave', start);
  // Pause onclick
  $('.pause').on('click', function() {
    console.log("pause");
    
    $(this).hide();
    $('.play').show();
  });
  // play onclick
  $('.play').on('click', function() {
    console.log("play");
    start();
    $(this).hide();
    $('.pause').show();
  });
  // Next onclick
  $('.next').click(function() {

     startslider();
  });
  // Prev onclick
  $('.prev').click(function() {
    sliderul.width(totalimgwidth);
    $sliderContainer.find('li:last').prependTo($sliderContainer);
    $sliderContainer.animate({
      'margin-left': '-=' + $sliderContainer.find('li').width()
    }, 0);
    $sliderContainer.animate({
      'margin-left': '+=' + $sliderContainer.find('li').width() + 'px'
    }, 2000, function() {});
  });
  start()
});