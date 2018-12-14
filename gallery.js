$(function () {
    
    
    //funkcja scroll
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
    
    $(window).scroll(function() {
        if($(this).scrollTop()>300) $('.scroll-up').fadeIn();
        else $('.scroll-up').fadeOut();
    });
    
    $(window).on('load', function() {
       $('#preloader #image').fadeOut();
        $('#preloader').delay(150).fadeOut('slow');
    });
});