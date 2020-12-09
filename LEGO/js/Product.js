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
    


    
    //vivus
        
    let ProductTitle = new Vivus('main_title', {duration: 60, type: 'sync' }, function(){$('#main_title').find('.st0').addClass('fill');});
  
    
    
    //like
    let like = $('.like');
    
    like.find('svg').click(function(){
        like.find(this).toggleClass('on');
       
    });  


    //info toggle
    let current = $('.current');
    let info = $('.info');
    
   current.find('.toggle').click(function(e){
        e.preventDefault();
        
       $(this).parents().siblings(".info").addClass('on');
           
    });
    
    info.find('.toggle').click(function(){
        $(this).parents(".info").removeClass('on');
        
    });
 
    
//    // run
    $(window).scroll(function(){

    // startShow_marvel
    let $win = $(window);
    let wscroll = $win.scrollTop();
    let winHeight = $win.height();
    let targetSelector = ".current h3, p, .like, .current button, img";

    $(".container>div").each(function() {
        let $this = $(this);
        if(wscroll > $this.offset().top - (winHeight/1.3))
            $this.find(targetSelector).addClass('show');
        else
            $this.find(targetSelector).removeClass('show');
    });
//        
    });
    
    
    
});