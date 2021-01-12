$(document).ready(function(){
    
    //navigation
    let nav = $('.headWrap');
    
    nav.find('button').click(function(){
        nav.toggleClass('on');
       
    });    
    
    
    
    // startShow
    function startShow(a,b){
        let wscroll = $(this).scrollTop();
        
        if(wscroll > $(a).offset().top - ($(this).height()/1.3)){
            $(a).find(b).addClass('show');
        }else{
            $(a).find(b).removeClass('show');
        }
    }
    
    
    // vivusSetting
	function startVivus(a,b){
		let wscroll = $(this).scrollTop();

		if(wscroll > $(a).offset().top - ($(this).height()/1.3)){
			b.play();
		}else{
			b.reset();
		}
	}
    
    // removeVivusAni
    function removeAni(a,b,c){
		let wscroll = $(this).scrollTop();

		if(wscroll > $(a).offset().top - ($(this).height()/1.3)){}else{
			$(b).find(c).removeClass('fill');
			$(b).find(c).removeClass('show');
		}
	}
    
    
    //vivus
    let type1 = {duration: 50, type: 'sync'};
    
    let brandTitle = new Vivus('main_title', {duration: 60, type: 'sync' }, function(){$('#main_title').find('.st0').addClass('fill');});
    let con1 = new Vivus('con1', type1);
    let con2 = new Vivus('con2', type1);
    let con3 = new Vivus('con3', type1);
    
    
   
    // run
    $(window).scroll(function(){
        startShow('#Promise','h3, p, button');
        startVivus('.Innovate',con1);
        startVivus('.Environmental',con2);
        startVivus('.Caring',con3);
        startShow('#Content','.Content_bg');
        startShow('.Innovate','h4, .text, span, .Img_box');
        startShow('.Environmental','h4, .text, span, .Img_box');
        startShow('.Caring','h4, .text, span, .Img_box');
        startShow('#History','h3, h4, b, p, button');
        
    });
    
    
    
    
    //History panel
    let tabAnchor =$('.History_list li a')
    let tabPanel =$('.H_panel')
    
    tabAnchor.click(function(e){
        e.preventDefault();
        
        tabAnchor.removeClass('on');
        $(this).addClass('on');
        
        
        tabPanel.hide();
        tabPanel.fadeOut();
        
        let $show = $(this).attr('href');
        $($show).fadeIn(800);
    });
    
    
});