(function($) {
    "use strict";
    
    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if($('.preloader').length){
            $('.preloader').delay(200).fadeOut(500);
        }
    }
    
    //Update Header Style and Scroll to Top
    function headerStyle() {
        if($('.main-header').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var sticky_header = $('.main-header .sticky-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos > 100) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass("animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
        }
    }
    
    $(document).ready(function() {
        headerStyle();
        
        // Submenu Dropdown Toggle
        if ($('.main-header li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn" data-route-path=""><span class="fa fa-angle-down"></span></div>');

            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
                const routePath = $(this).data('route-path');
                if (routePath) {
                    router.push(routePath);
                } else {
                    $(this).prev('ul').slideToggle(500);
                }
            });
        }

        // Mobile Nav Hide Show
        if($('.mobile-menu').length){
            var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
            $('.mobile-menu .navigation').append(mobileMenuContent);
            $('.sticky-header .navigation').append(mobileMenuContent);
            $('.mobile-menu .close-btn').on('click', function() {
                $('body').removeClass('mobile-menu-visible');
            });
            $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
                $(this).prev('ul').slideToggle(500);
            });
            $('.mobile-nav-toggler').on('click', function() {
                $('body').addClass('mobile-menu-visible');
            });
            $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
                $('body').removeClass('mobile-menu-visible');
            });
        }

        // Banner Carousel
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                loop: true,
                margin: 0,
                nav: true,
                singleItem: true,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                autoplayTimeout: 10000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    }
                }
            });
        }

        // Services Carousel
        if ($('.services-carousel').length) {
            $('.services-carousel').owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                loop: true,
                margin: 30,
                nav: true,
                singleItem: true,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                autoplayTimeout: 10000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    },
                    1280: {
                        items: 4
                    }
                }
            });
        }

        // Testimonial Carousel
        if ($('.testimonial-carousel').length) {
            $('.testimonial-carousel').owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                loop: true,
                margin: 32,
                nav: true,
                singleItem: true,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                autoplayTimeout: 10000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 2
                    },
                    1280: {
                        items: 2
                    }
                }
            });
        }

        // Gallery Carousel
        if ($('.gallery-carousel').length) {
            $('.gallery-carousel').owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                loop: true,
                margin: 30,
                nav: true,
                singleItem: true,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                autoplayTimeout: 10000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    },
                    1280: {
                        items: 5
                    }
                }
            });
        }

        // Other initialization code...
    });

    $(window).on('scroll', function() {
        headerStyle();
    });

    $(window).on('load', function() {
        handlePreloader();
    });

})(window.jQuery);
