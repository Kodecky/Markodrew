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
            }, 1000);
        }
    });

    // przycisk scrollUp
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {$('.scroll-up').fadeIn(); }
            else $('.scroll-up').fadeOut();
    });

    // animacja sekcji oferta
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > $('.horizontal-first').offset().top){
            $('.aboutUs .container').addClass('show');
        } 
        // else $('.offer .container').removeClass('show');
    })

    // animacja sekcji miniGallery
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > $('.horizontal-second').offset().top){
            // if ($(this).scrollTop() > $('.mini-gallery .container .row:nth-of-type(4)').offset().top){
                $('.gallery-link .container').addClass('show-gallery');
        } 
        // else $('.mini-gallery [class*="image-"]').removeClass('show');
    })
    

    // animacja sekcji stolarnie
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > $('.horizontal-third').offset().top){
        // if ($(this).scrollTop() > $('.mini-gallery .container .row:nth-of-type(4)').offset().top){
            $('.offer .container').addClass('show');
        } 
        // else $('.aboutUs .container').removeClass('show');
    })
    

    // animacja sekcji kontakt
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > $('.horizontal-fourth').offset().top){
        // if ($(this).scrollTop() > $('.aboutUs .container p').offset().top){
            $('.contact .container').addClass('show');
            $('.contact iframe').addClass('show');
        } 
        // else {
        //     $('.contact .container').removeClass('show');
        //     $('.contact iframe').removeClass('show');
        // }
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

    const firstIMG = document.querySelector('.carousel-inner .first-item');
    const secondIMG = document.querySelector('.carousel-inner .second-item');
    const thirdIMG = document.querySelector('.carousel-inner .third-item');
    const fourthIMG = document.querySelector('.carousel-inner .fourth-item');
    const imgTAB = [firstIMG, secondIMG, thirdIMG, fourthIMG];
        

});
