$(document).ready(function(){
    
    //navigation
    let nav = $('.headWrap');
    
    nav.find('button').click(function(){
        nav.toggleClass('on');
       
    });    
    
    
    // addShowPc
    function addShowPc (a,b){
            
            let winwidth = $(window).width();
            
            if(winwidth >= 1025 ){   
             $(a).find(b).addClass('show');
           }else{
               
           }
        }
        
        $(window).ready(function(){
            addShowPc('.call','.title, .textbox');
            addShowPc('.notice','p');           
            addShowPc('.mail','.title, .textbox,span,a');
        });
         $(window).resize(function(){
            addShowPc('.call','.title, .textbox');
            addShowPc('.notice','p');           
            addShowPc('.mail','.title, .textbox,span,a');
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
    
    
    
    //vivus 
    let brandTitle = new Vivus('main_title', {duration: 60, type: 'sync' }, function(){$('#main_title').find('.st0').addClass('fill');});

    
        // run
    $(window).scroll(function(){
        startShow('.call','.title, .textbox'); startShow('.notice','p');           
        startShow('.mail','.title, .textbox,span,a');            
        
    });
    
    
    
    

    
    
});