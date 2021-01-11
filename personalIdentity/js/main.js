$(document).ready(function(){

    

    

    //on swiper
    let swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        autoplay: {
        delay: 100,
        },
        
    });
    
    
  
  
//    // esc stop
    $(document).keydown(function(e){
        if (e.keyCode == 27 || e.which ==27){
          swiper.autoplay.stop();  
        }
    });
    
    
    
// vivusSetting
	function startVivus(a,b){
		let wscroll = $(this).scrollTop();

		if(wscroll > $(a).offset().top - ($(this).height()/1.3)){
			b.play();
		}else{
			b.reset();
		}
	}    
    

//startshow
    function startShow(a,b){
        let wscroll = $(this).scrollTop();
        
        if(wscroll > $(a).offset().top - ($(this).height()/1.3)){
            $(a).find(b).addClass('show');
        }else{
            $(a).find(b).removeClass('show');
        }
    }
    
    
//  Vivus 
    let type1 = {duration: 100, type: 'oneByOne'};
    
    let logoLine = new Vivus('logo_line', {duration: 60, type: 'oneByOne' }, function(){$('#logo_line').find('.st0').addClass('fill');});
    
    let RGBline = new Vivus('RGBline', type1);
    
    
    $(window).scroll(function(){
        
        startVivus('.color',RGBline);
        startShow('.keyword','h2');
        startShow('.on_mean','.mean_left, .mean_right, .mean_bottom');
        startShow('.onandon','.and_bg, p, b, .stroke');
        startShow('.color','h2, b, p, .RGB_bg, .RGB_con, strong');
        startShow('.introduction', '.intro, .intro_bg, h2, h3, b, p, svg, .profile_img, span');
        
    }); //window.scroll
    
    
    
    
    
});//$(function)