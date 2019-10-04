$(document).ready(function(){


	var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 100,
        grabCursor: true
    });
	//////////////////////////////////////// 
	
	var menu = $('.topContainer .menu ul li');
	var tabpannel=$('.topContainer .selectView > div');
	var targetPannel ,tragetMenu,idx;
	menu.on("click",function(e){
		e.preventDefault();
		tragetMenu = $(this);
		menu.removeClass("active");
		tragetMenu.addClass("active");

		idx = tragetMenu.index()+1;
		tabpannel.removeClass("active");
		tabpannel.hide();
		targetPannel = $('.topContainer .selectView > div:nth-child('+idx+')');
		console.log(idx);
		console.log(targetPannel);
		console.log("===========");
		targetPannel.addClass("active");
		targetPannel.show();

	});
	//close btn
	var closbtn = $('.topContainer .selectView .pannel .close');
	closbtn.on('click',function(e){
		e.preventDefault();
		closeFn();
		
	});

	//cart
	var cartPush =$('.topContainer .selectView .pannel .cart');
	console.log(cartPush)
	cartPush.on('click',function(e){
		e.preventDefault();
		console.log('push :'+idx);
		closeFn();
	});

	function closeFn(){
		tabpannel.removeClass("active");
		tragetMenu.removeClass("active");
	}
	// 
	
});