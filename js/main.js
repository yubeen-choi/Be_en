$(document).ready(function() {

    // alert();

    //info toggle
    let current = $('.current');
    let info = $('.info');
    
   current.find('.botton').click(function(e){
        e.preventDefault();
        
       $(this).parents().siblings('div').addClass('on');
       $(this).parent().css("display","none");
           
    });
    
    info.find('.btn').click(function(){
    
        $(this).parents().siblings().removeClass('on');
        $(this).parents(".popup").removeClass('on');
        $(this).parents().siblings('.current').css("display","flex");

        
    });

    //startshow
    function startShow(a,b){
        let wscroll = $(this).scrollTop();
        
        if(wscroll > $(a).offset().top - ($(this).height()/1.3)){
            $(a).find(b).addClass('show');
        }else{
            $(a).find(b).removeClass('show');
        }
    } //startshow


    $(window).scroll(function(){

        startShow('.LEGO','.box');
        startShow('.Personal','.box');
        
    }); //window.scroll

    let winWidth = $(window).width();

    if(winWidth >= 1440){

        $(window).ready(function(){

            startShow('.LEGO','.box');
            startShow('.Personal','.box');
            
        }); //window.scroll

    }else{
        
    }




}); //$(function)