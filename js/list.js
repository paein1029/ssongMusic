$(document).ready(function(){


	var container = $('.wrap');
	var tabpannel = $('.topContainer .selectView > div');
	var int=0;
	var maxLoadLength=5;

	
	var swiper = new Swiper('.swiper-container', {
       nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'progress',
      	onInit: function(n) {
      		int ++;
      		// console.log("complete",int);
      		if(int == maxLoadLength ){
      		// console.log("total complete",int);
			tabpannel.removeClass("active");
			tabpannel.hide();
			$('.topContainer .selectView').css("opacity",1);
      		container.css("display","block");

      		}
			
      	}
    });
    var closeContainer = $('.topContainer .close');
    var cartPush =$('.topContainer .close .cart');
    var refresh = $('.topContainer .close .refresh');
	//////////////////////////////////////// 
	var menu = $('.topContainer .menu ul li');
	
	var targetPannel ,tragetMenu,idx;
	menu.on("click",function(e){
		e.preventDefault();

		// video
			$("#video").get(0).pause();
			$("#video").hide();
		//menu
		tragetMenu = $(this);
		menu.removeClass("active");
		tragetMenu.addClass("active");

		idx = tragetMenu.index()+1;
		tabpannel.removeClass("active");
		tabpannel.hide();
		targetPannel = $('.topContainer .selectView > div:nth-child('+idx+')');
		// console.log(idx);
		// console.log(targetPannel);
		// console.log("===========");
		targetPannel.addClass("active");
		targetPannel.show();
		closeContainer.show();
		cartPush.show();
		refresh.show();

	});
	//close btn
	var closeBtn =  $('.topContainer .close > span');
	closeBtn.on('click',function(e){
		e.preventDefault();
		closeFn();
		
	});


	//cart
	cartPush.on('click',function(e){
		if(typeof targetName == "undefined" || typeof targetImg == "undefined" || 
			targetName =='' || targetImg == ''){
			console.log('no image name url');
			 alert("해당 주차 교육을 선택해 주세요.")	 
		}else{
			// 해당 주차에 이름 이미지 url 바꾸기
			console.log('push :'+idx);
			console.log('targetName :'+targetName);
			console.log('targetImg :'+targetImg);
			//push

			var slectView = $('.viewList > div:nth-child('+idx+')')
			slectView.find('img').attr('src',targetImg);
			slectView.find('p').text(targetName);
			//reset
			
			targetName='';
			targetImg='';
			closeFn();
		}
		
	});
	// refresh
	refresh.on('click',function(e){
		location.reload();

		
	});

	function closeFn(){
		targetPannel.hide();
		tragetMenu.removeClass("active");
		imgPannel.removeClass('active');
		closeContainer.hide();
		cartPush.hide();
		refresh.hide();
	    $("#video").show();
	}
	var imgPannel= $('figure.imgPannel');
	var targetName , targetImg;
	imgPannel.on('click',function(e){
		e.preventDefault();
		imgPannel.removeClass('active');
		$(this).addClass('active');
		targetName = $(this).find('p').text();
		targetImg = $(this).find('img').attr('src');
		// console.log(idx+"주차");
		
	});
});