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
    
    $(window).on('load', function() {
        $('#preloader #image').fadeOut();
         $('#preloader').delay(50).fadeOut('slow');
     });
     
    $(window).scroll(function() {
        if($(this).scrollTop()>300) $('.scroll-up').fadeIn();
        else $('.scroll-up').fadeOut();
    });
    
});