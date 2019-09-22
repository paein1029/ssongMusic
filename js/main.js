$(document).ready(function(){

	console.log("start");
	$('.slider').bxSlider({
	  	auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: true,
	  });

	$('.button').click( function() {
		var name = $(this).attr('data-filter');
		console.log(name);
		if(name == 'all'){
			$('.filter').addClass("img_hide");
		}else{
			$('.filter').not("."+name).hide("2000");
			$('.filter').filter("."+name).show("2000");
		}
		
	} );
});