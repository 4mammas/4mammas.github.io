$(document).ready(function(){
 
    $('.bxslider').bxSlider({
  		mode: 'vertical',
  		auto: true,
  		pause: 8000,
  		slideMargin: 5
	});


    $('.slider4').bxSlider({
	    slideWidth: 300,
	    minSlides: 1,
	    maxSlides: 5,
	    moveSlides: 1,
	    slideMargin: 5
	});
	$('.slider2').bxSlider({
	    slideWidth: 300,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 10
	 });


    $('.bear').hover(function(){
    	$('.hand_bear').addClass('hand_bear_move');
	},
	function(){
    	$('.hand_bear').removeClass('hand_bear_move');
	}); 



	var overlay = $('#overlay');
	var open_modal = $('.open_modal');
	var close = $('.modal_close, #overlay');
	var modal = $('.modal_div');
	var modal1 = $('.modal_div1');

     open_modal.click( function(event){
     	event.preventDefault();
         var div = $(this).attr('href');
         overlay.fadeIn(400,
             function(){
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200);
         });
     });

     close.click( function(){
            modal
             .animate({opacity: 0, top: '45%'}, 200,
                 function(){
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                 }
             );
     });
     close.click( function(){
            modal1
             .animate({opacity: 0, top: '75%'}, 200,
                 function(){
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                 }
             );
     });


     $('.mob_hid_menu').click(function () {    
    	$('.mob_menu').toggleClass('mob_menu_open');
     });

    

});

