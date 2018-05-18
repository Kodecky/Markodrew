$(function () {
    
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {$('.scroll-up').fadeIn(); }
            else $('.scroll-up').fadeOut();
    });
    
    $(window).on('load', function() {
        $('#open-js').css('display', 'flex')
    });
    
    
    $('#open-js').on('click', function() {
        $(this).fadeOut(500);
    });
    $('#main-js').fadeIn(1300);
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {$('footer').css('position', 'relative')}
        else($('footer').css('position', 'sticky').fadeIn(300));
    });
    
    
    
});