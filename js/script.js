$('.carousel').carousel({
    interval: 2000,
    touch: true
});
$('.categories-carousel').owlCarousel({
    loop: true,
    margin: 45,
    nav: true,
    autoplay: true,
    responsiveClass: true,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 1,
            touchDrag: true,
            mouseDrag: true,
        },
        768: {
            items: 2,
            touchDrag: true,
            mouseDrag: true,
        },
        1200: {
            items: 3,
            touchDrag: false,
            mouseDrag: false,
        }
    }
});
$('.partners').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    center: true,
    responsiveClass: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
            touchDrag: true,
            mouseDrag: true,
        },
        480: {
            margin: 60,
            items: 3,
            touchDrag: true,
            mouseDrag: true,
        },
        1000: {
            items: 5,
            margin: 60
        }
    }
});
$('.related-carousel').owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    dots: true,
    autoplay: false,
    responsiveClass: true,
    items: 3,
    responsive: {
        0: {
            items: 1,
            touchDrag: true,
            mouseDrag: true,
            margin: 20,
        },
        480: {
            items: 3,
            touchDrag: true,
            mouseDrag: true,
            margin: 30
        },
        1000: {
            items: 3
        }
    }
});
$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    items: 1,
    dots: false
});
$(function () {
    var Page = (function () {
        var $navArrows = $('#nav-arrows').show(),
            $shadow = $('#shadow').hide(),
            slicebox = $('#sb-slider').slicebox({
                orientation: 'r',
                speed: 600,
                autoplay: true,
                interval: 3000,
                cuboidsRandom: true,
                onReady: function () {

                    $navArrows.show();
                    $shadow.show();

                }
            }),
            init = function () {
                initEvents();
            },
            initEvents = function () {
                // add navigation events
                $navArrows.children(':first').on('click', function () {
                    slicebox.next();
                    return false;
                });
                $navArrows.children(':last').on('click', function () {
                    slicebox.previous();
                    return false;
                });
            };
        return {
            init: init
        };
    })();
    Page.init();
});

var countDownDate = new Date("July 5, 2020 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("ex").innerHTML = "EXPIRED";
    }
}, 1000);
jQuery(document).ready(function ($) {
    $('.open-mobile-menu').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').toggleClass('opened');
        $(this).toggleClass('opened');
    });
    $('.menu-button').click(function (e) {
        e.preventDefault();
        $('aside').toggleClass('opened');
        $('div.content').toggleClass('fullwidth');
    });
    $('.language > a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).next('ul').toggleClass('opened');
    });
    $(window).click(function () {
        $('.language ul').removeClass('opened');
    });
    $('.has-submenu > a').click(function (e) {
        e.preventDefault();
        $(this).next('ul').slideToggle(500);
        $(this).toggleClass('opened');
    });
    $('.open-search').click(function (e) {
        e.preventDefault();
        $('.search-form').fadeIn();
    });
    $('.overlay').click(function () {
        $('.search-form').fadeOut();
    });
    $('.mo').click(function (e) {
        e.preventDefault();
        $(this).next('.complete').show();
        $(this).hide();
    });
});
AOS.init();
$(window).on('load', function () {
    $('.loading').fadeOut("slow");
});
$('.timeLine').timeLine({
    mainColor: '#4DB7AA',
    opacity: '0.85',
    lineColor: '#fafafa'
});

$('.count').rCounter({
    duration: 35
});
$('.carousel').carousel({
    interval: 10000
});