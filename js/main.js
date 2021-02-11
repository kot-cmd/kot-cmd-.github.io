$(function() {
    $('.slider__inner, .news__slider-inner').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/l.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/r.svg" alt=""></button>',
        infinite: false
    });
    $('.advantages__inner').slick({
        // prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/l.svg" alt=""></button>',
        // nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/r.svg" alt=""></button>',
        infinite: false,
        arrows: false,
        dots: true,
        autoplay: true
    });


    $('select').styler();

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });

});