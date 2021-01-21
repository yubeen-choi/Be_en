$(document).ready(function() {

    function webTubular() {
    let options = {
        videoId : 'MzYYUGnmqLA'
        
    };		

    $('#wrapper').tubular(options);
    } //webTubular

    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    jQuery(document).ready(function($){
         if(!isMobile) {
            webTubular();
              //PC
         } else {
            $('#wrapper').addClass('moblie');
            webTubular.destroy();  //MOBILE
         }
    }); //webTubular_media
    

    // warning event
    let id = $('#id');
    let pw = $('#pw');
    let btn = $('#btn');

    $(btn).on('click', function() {
        if($(id).val() == ""){
            $(id).next('label').addClass('warning');
            setTimeout(function(){
                $('label').removeClass('warning');
            },1000);

        }else if($(pw).val() == ""){
            $(pw).next('label').addClass('warning');
            setTimeout(function(){
                $('label').removeClass('warning');
            },1000);
        }
    }); // warning event


    // POPUP warning event
    let popupid = $('#popupid');
    let popupemail = $('#popupemail');
    let popupbtn = $('#popupbtn');

    $(popupbtn).on('click', function() {
        if($(popupid).val() == ""){
            $(popupid).next('label').addClass('warning');
            setTimeout(function(){
                $('label').removeClass('warning');
            },1000);

        }else if($(popupemail).val() == ""){
            $(popupemail).next('label').addClass('warning');
            setTimeout(function(){
                $('label').removeClass('warning');
            },1000);
        }
    }); // POPUP warning event


    //POPUP on
    let forgot = $('.forgot')
    let popup = $('.popup')

    $(forgot).find('a').click(function(e){
        e.preventDefault();
        $(popup).addClass('on');
    });// POPUP on


    //POPUP off
    $(document).click(function(event) {

        if (!$(event.target).closest(".layer, .container").length) {
          $("body").find(".popup").removeClass("on");
        }
      });// POPUP off



    
    
}); //$(function)

