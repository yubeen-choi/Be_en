$(document).ready(function(){
    
    //navigation
    let nav = $('.headWrap');
    
    nav.find('button').click(function(){
        nav.toggleClass('on');
       
    });    
    

  //swiper slider1
    let swiper1 = undefined;
    let swiperOption = {
    slidesPerView: "auto",
    spaceBetween: -30,
    centeredSlides: true,
    speed: 1000,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    };

    function slideMake() {
    let winWidth = $(window).width();

    if (winWidth >= 960 && swiper1 !== undefined) {
    swiper1.destroy();
    swiper1 = undefined;
    } else if (winWidth < 960 && swiper1 === undefined) {
    swiper1 = new Swiper(".slide1", swiperOption);
    }
    }

    slideMake();

    $(window).resize(function () {
    slideMake();
    });
 


    //swiper slider2
    let swiper2 = new Swiper('.slide2', {
      pagination: {
        el: '.swiper-pagination',
          clickable: true,
      },
        loop: true,
        speed: 1000,
    });
    
    

    
    // transition
    function startShow(se,pl){
        let wscroll = $(this).scrollTop();
        
        if(wscroll > $(se).offset().top - ($(this).height()/1.3)){
            $(se).find(pl).addClass('show');
        }else{
            $(se).find(pl).removeClass('show');
        }
    }
    
    
    // run
    $(window).scroll(function(){
        startShow('#main_Product','h3, .slide1')
        startShow('#main_Series','.SeriesWrap')
        startShow('#main_NewProduct','.NewProductBg, h3')
        startShow('.Deadpool','.bg_bar, .Bg_box')
        startShow('.HarryPotter','.bg_bar, .Bg_box')
    });
    
    
    
});