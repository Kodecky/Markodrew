$(function () {
    
    $(window).on('load', function() {
       $('#preloader #image').fadeOut();
        $('#preloader').delay(50).fadeOut('slow');
    });
    
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });

    // przycisk scrollUp
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {$('.scroll-up').fadeIn(); }
            else $('.scroll-up').fadeOut();
    });

    // animacja sekcji oferta
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('.horizontal-first').offset().top){
            $('.offer .container').addClass('show');
        }
    })

    // animacja sekcji miniGallery
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('.horizontal-second').offset().top){
            $('.mini-gallery [class*="image-"]').addClass('show');
        }
    })
    

    // animacja sekcji stolarnie
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('.horizontal-third').offset().top){
            $('.aboutUs .container').addClass('show');
        }
    })
    

    // animacja sekcji kontakt
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('.horizontal-fourth').offset().top){
            $('.contact .container').addClass('show');
            $('.contact iframe').addClass('show');
        }
    })
    

    // animacja przejścia do strony głównej
    $('#open-js').on('click', function() {
        $(this).fadeOut(500);
    });
    $('#main-js').fadeIn(1300);
    
    // animacja footera w wersji mobilnej
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {$('footer').css('position', 'relative')}
        else($('footer').css('position', 'sticky').fadeIn(300));
    }); 
});