$(document).ready(function(){

	$('.itemlist').bxSlider({
		minSlides:1,
		maxSlides:7,
		slideWidth:200,
		slideMargin:80,
		pager:false,
			onSliderLoad:function(){
			
			$('.dragList').css("opacity", "1");

		}

	});
   var droptext;
  $( ".drag" ).draggable({
  	 drag: function( event, ui ) {
        droptext = $(this).text();
         console.log("drag :"+$(this).text());
      },
     start: function( event, ui ) {
     	 $('.bx-viewport').css("overflow","visible");
     	$(this).css("z-index","9999");
         },
     stop: function( event, ui ) {
<<<<<<< HEAD
     	$('.bx-viewport').css("overflow","hidden");
=======
	$('.bx-viewport').css("overflow","hidden");     
>>>>>>> bb9e895fba0944235438557dab4051c718ff1011
     	 var el = $(this);
          // console.log(el);
          el.css({
            top: 0,left: 0
          });
     }
  });


   $( ".droppable" ).droppable({
	   	over:function(event,ui){
		    console.log("over");
		    $(this).addClass("hovered");
		},
		out:function(event,ui){
	        $(this).removeClass("hovered"); 
	    },

	    drop: function( event, ui ) {
<<<<<<< HEAD
	    	$('.bx-viewport').css("overflow","hidden");
=======
		$('.bx-viewport').css("overflow","hidden");
>>>>>>> bb9e895fba0944235438557dab4051c718ff1011
	    	$(this).removeClass("hovered"); 
	    	console.log("drop : "+droptext);
	    	$(this).find('span').text(droptext);
	    }

   	});
});
