$(document).ready(function() {
   
    let options = {
        videoId : 'MzYYUGnmqLA'
        
    };		

    $('#wrapper').tubular(options);

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
    let signUp = $('.signup')
    let popup = $('.popup')

    $(signUp).find('a').click(function(e){
        e.preventDefault();
        $(popup).addClass('on');
    });

    

    popup.click(function(){
        $(popup).removeClass('on');
    });
    // POPUP on
    


    
}); //$(function)

