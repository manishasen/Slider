$(document).ready(function(){
	var sliderul = $('.banner').children('ul');
  var imgs = sliderul.find('img');
  var widths =imgs.width(); // 600
  var imglength = imgs.length;
  // var animatSpeed=3000;
  // var pause =5000;
  var slideWidth = $('.banner ul li').width();
  var $slider = $('.banner');
  var $sliderContainer = $slider.find('.banners');
  //var $slide = $sliderContainer.find('.bannr');
  var totalimgwidth = widths * imglength;
 // var current = 3;
  var interval;
  //var $span=$('banners').find('li:first').clone();
  var widths1=0;

    function moveRight(){
    	// $sliderContainer.each(function(){
    	//  $span=$('.banners').find('li:first').clone();
    	// 	    $('.banners').find('li:first').remove();
    	// 	    $('.banners').find('li:first').appenedTo($span);
    	// })
	
	sliderul.width(totalimgwidth);
    
    widths1=$sliderContainer.find('li').first().width();

    console.log(widths1);
    //$('.banners .first').appenedTo($sliderContainer);
    $sliderContainer.find('li').first().appendTo($sliderContainer);
// $sliderContainer.find('li').first().remove();
    $sliderContainer.animate({
      'margin-left': '-=' +widths1+'px'
    }, function() {

    	//$sliderContainer.find('li').first().remove();
    	// $(this).css('margin-left','');
    	//alert('hi');
    	//$('.banners .first').appenedTo($sliderContainer);
    	//$('.banners ').remove();
    	 
    	 //
         
     
    });
   
    
    // $sliderContainer.animate({
    //     'margin-left': '+=' + widths
    //   }, 0,function(){
      	 
    //   })
     
    }


	$('.next').click(function(){
		moveRight();
	})
	setInterval(moveRight,2000);
})