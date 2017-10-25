$(document).bind("mobileinit", function(){
        $.mobile.defaultPageTransition = 'flip';
});



$( document ).on( "pagecreate", ".e-wap", function( event ) {
		var search,
		page = $( this );


});




setInterval(function(){
			if ($('.changemouse').hasClass('expand-all')){
				$('.changemouse').removeClass('expand-all').attr("src","inc/pics/m3.png");
				$('.changemouse').addClass('expand-mid');
			} else if($('.changemouse').hasClass('expand-mid')){
			    $('.changemouse').removeClass('expand-mid').attr("src","inc/pics/m2.png");
				
			}else{
				$('.changemouse').addClass('expand-all').attr("src","inc/pics/m1.png");
			}
			
			if ($('.change2btn').hasClass('expand-all')){
				$('.change2btn').removeClass('expand-all').attr("src","inc/pics/btn3.png");
				$('.change2btn').addClass('expand-mid');
			}else if($('.change2btn').hasClass('expand-mid')){
			    $('.change2btn').removeClass('expand-mid').attr("src","inc/pics/btn2.png");
				
			}else{
				$('.change2btn').addClass('expand-all').attr("src","inc/pics/btn1.png");
			}
			
			if ($('.change7light').hasClass('expand-all')){
				$('.change7light').removeClass('expand-all').attr("src","inc/pics/b.png");
			}else{
				$('.change7light').addClass('expand-all').attr("src","inc/pics/a.png");
			}
			
			if ($('.hometxt').hasClass('expand-all')){
				$('.hometxt').removeClass('expand-all');
				$('.hometxt').css("bottom","25%");
				$('.hometxt img').css("width","150");
			}else{
				$('.hometxt').addClass('expand-all');
				$('.hometxt').css("bottom","22%");
				$('.hometxt img').css("width","250");
			}
			
			if ($('.c_list_p').hasClass('expand-all')){
				$('.c_list_p').removeClass('expand-all').css("line-height","16px").css("font-size","16px");
			}else{
				$('.c_list_p').addClass('expand-all').css("line-height","15px").css("font-size","22px");
			}
			
			
			
		}, 800);  
		
		