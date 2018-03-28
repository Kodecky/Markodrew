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
        if ($(this).scrollTop() > 300) {$('.scroll-up').fadeIn();}
        else $('.scroll-up').fadeOut();
    });
    
    /*$("#enter-js").click(function(){
        $("#open-js").fadeOut("500");
        $("#main-js").fadeIn("1300");
    }); */
    
    $('#open-js').delay(2500).fadeOut(500);
    $('#main-js').delay(2500).fadeIn(1300);
    
});