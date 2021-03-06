$(document).ready(function(){
    $('#content').css({
        top: $('#top-panel').outerHeight(true),
        bottom: $('#bottom-panel').outerHeight(true)
    });
    if (typeof Swiper === 'function') {
        var mySwiper = new Swiper('.swiper', {
            autoplay: 5000,
            nextButton: '.swiper__btn_direction_right',
            prevButton: '.swiper__btn_direction_left',
            buttonDisabledClass: 'swiper__btn_state_disable',
            wrapperClass: 'swiper__list',
            slideClass: 'swiper__item',
            slideActiveClass: 'swiper__item_state_active',
            slideNextClass: 'swiper__item_position_next',
            slidePrevClass: 'swiper__item_position_prev'
        });
    };
});

$(window).resize(function() {
    $('#content').css({
        top: $('#top-panel').outerHeight(true),
        bottom: $('#bottom-panel').outerHeight(true)
    });
});

$(window).on("orientationchange",function(event){
    $('#content').css({
        top: $('#top-panel').outerHeight(true),
        bottom: $('#bottom-panel').outerHeight(true)
    });
});
