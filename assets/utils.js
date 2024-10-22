$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-200px'
        }, 'slow');
        
        $(".text").css("color", "#003049");
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
        
        $(".text").css("color", "#EAE2B7");
    });
});


