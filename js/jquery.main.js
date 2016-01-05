$(document).ready(function(){
    $('#swiper').css({
        top: $('#top-panel').outerHeight(true),
        bottom: $('#bottom-panel').outerHeight(true)
    });
    var mySwiper = new Swiper ('.swiper', {
        autoplay: 5000,
        spaceBetween: 5,
        nextButton: '.swiper__btn_direction_right',
        prevButton: '.swiper__btn_direction_left',
        buttonDisabledClass: 'swiper__btn_state_disable',
        wrapperClass: 'swiper__list',
        slideClass: 'swiper__item',
        slideActiveClass: 'swiper__item_state_active',
        slideNextClass: 'swiper__item_position_next',
        slidePrevClass: 'swiper__item_position_prev'
    });

//slideClass	string	'swiper-slide'	CSS class name of slide
//slideActiveClass	string	'swiper-slide-active'	CSS class name of currently active slide
//slideVisibleClass	string	'swiper-slide-visible'	CSS class name of currently visible slide
//slideDuplicateClass	string	'swiper-slide-duplicate'	CSS class name of slide duplicated by loop mode
//slideNextClass	string	'swiper-slide-next'	CSS class name of slide which is right after currently active slide
//slidePrevClass	string	'swiper-slide-prev'	CSS class name of slide which is right before currently active slide
//wrapperClass	string	'swiper-wrapper'	CSS class name of slides' wrapper
//bulletClass	string	'swiper-pagination-bullet'	CSS class name of single pagination bullet
//bulletActiveClass	string	'swiper-pagination-bullet-active'	CSS class name of currently active pagination bullet
//paginationHiddenClass	string	'swiper-pagination-hidden'	CSS class name of pagination when it becomes inactive
//buttonDisabledClass	string	'swiper-button-disabled'	CSS class name of next/prev button when it becomes disabled

});

$(window).resize(function() {
    $('#swiper').css({
        top: $('#top-panel').outerHeight(true),
        bottom: $('#bottom-panel').outerHeight(true)
    });
});

$(window).on("orientationchange",function(event){
    $('#swiper').css({
        top: $('#top-panel').outerHeight(true),
        bottom: $('#bottom-panel').outerHeight(true)
    });
});
