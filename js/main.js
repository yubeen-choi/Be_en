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



}); //$(function)