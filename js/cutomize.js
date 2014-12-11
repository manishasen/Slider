$(document).ready(function(){

	var interval;
	var $slider = $('.banner');
  	var $sliderContainer = $slider.find('.banners');
	var widths=+$sliderContainer.find('li').first().width();
	var name = $('.banner ul li');
	var width = 0;

	$('bannersul li').each(function() {
 		width += $(this).outerWidth();
	});

  
	function moveleft(){
	

        
		widthsLi=$sliderContainer.find('li img').width();
		 $sliderContainer.animate({
      	'margin-left': '-='+widthsLi
    	},2000, function() {
    		
 		$sliderContainer.find('li img').first().appendTo($sliderContainer);	 
		 $sliderContainer.animate({
 			'margin-left':'+='+widthsLi
		},0)

		
			 
		
    	})

		
		 
		 console.log($sliderContainer.find('li').width());

	}
	setInterval(moveleft,3000);
})
