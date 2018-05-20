$(function () {
    var request,
        $current,
        cache = {},
        $frame = $('.photo-viewer'),
        $thumbs = $('.thumb');
    
    function crossFade($img) {
        
        if ($current) {
            $current.stop().fadeOut('slow');
        }
        
        $img.css({
            marginLeft: -$img.width() / 2,
            marginTop: -$img.width() / 2
        });
        
        $img.stop().fadeTo('slow', 1);
        $current = $img;
    }
    
    $(document).on('click', '.thumb', function (e) {
        var $img,
            src = this.href,
            request = src;
        
        e.preventDefault();
        
        $thumbs.removeClass('active');
        $(this).addClass('active');
        
        if (cache.hasOwnProperty(src)) {
            if (cache[src].isLoading === false) {
                crossFade(cache[src].$img);
            }
        } else {
            $img = $('<img/>');
            cache[src] = {
                $img: $img,
                isLoading: true
            };
            
            $img.on('load', function () {
                $img.hide();
                
                $frame.removeClass('is-loading').append($img);
                cache[src].isLoading = false;
                
                if (request === src) {
                    crossFade($img);
                }
            });
            
            $frame.addClass('is-loading');
            
            $img.attr({
                'src': src,
                'alt': this.title || ''
            });
        }
    });
    
    $('.thumb').eq(0).click();
    
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
        $('#preloader').delay(350).fadeOut('slow');
    });
    
    $(window).scroll(function() {
        if($(this).scrollTop()>300) $('.scroll-up').fadeIn();
        else $('.scroll-up').fadeOut();
    });
    
});