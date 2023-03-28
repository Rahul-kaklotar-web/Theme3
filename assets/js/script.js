/*
    ---------------------------------------------------------------------

    Template Name: Digibiz
    Template Description: Digibiz - HTML Template
    Version: 1.0
    Template Author: Rahul Kaklotar

    ---------------------------------------------------------------------

    JS INDEX
    ================
	1. Scroll Navbar
	2. Menu On Hover
	3. Preloader
    4. Back To Top
	5. Portfolio Lightbox 
	6. Testimonials Carousel

 */

(function($) {
    "use strict";

    // 1. Scroll Navbar
    $(function() {
        var header = $(".start-style");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });


    // 2. Menu On Hover
    $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
        if ($(window).width() > 991) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function() {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

    // 3. Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(500).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // 4. Back To Top
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });

    // 5. Portfolio Lightbox 
    const portfolioLightbox = GLightbox({
        selector: '.glightbox'
    });

    // 6. Testimonials Carousel (Uses The Swiper Library)
    var swiper = new Swiper('.testimonials-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        // autoplay: true,
        mousewheel: {
            invert: false,
        },
        // autoHeight: true,
        pagination: {
            el: '.slider-pagination',
            clickable: true,
        }
    });
    // 6. Porfolio Isotope and Filter
    $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });

        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });
    });

})
(jQuery);