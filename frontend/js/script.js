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
	
	headerStyle();
	

	// Submenu Dropdown Toggle
	$(document).ready(function() {
		if($('.main-header li.dropdown ul').length){
			$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
			
			//Dropdown Button
			$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
				$(this).prev('ul').slideToggle(500);
			});
			
			//Disable dropdown parent link
			$('.main-header .navigation li.dropdown > a').on('click', function(e) {
				e.preventDefault();
			});
		}
	});
	
	// Submenu Dropdown Toggle
	// $(document).ready(function() {
	// 	if ($('.main-header li.dropdown ul').length) {
	// 		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn" data-route-path=""><span class="fa fa-angle-down"></span></div>');

	// 		// Dropdown Button
	// 		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
	// 			const routePath = $(this).data('route-path');
	// 			if (routePath) {
	// 				// Programmatically navigate using Vue Router
	// 				router.push(routePath);
	// 			} else {
	// 				$(this).prev('ul').slideToggle(500);
	// 			}
	// 		});
	// 	}
	// });

	
	// Mobile Nav Hide Show
	$(document).ready(function() {
		// Your JavaScript code here
		if($('.mobile-menu').length){
		
			var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
			$('.mobile-menu .navigation').append(mobileMenuContent);
			$('.sticky-header .navigation').append(mobileMenuContent);
			$('.mobile-menu .close-btn').on('click', function() {
				$('body').removeClass('mobile-menu-visible');
			});

			//Dropdown Button
			$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
				$(this).prev('ul').slideToggle(500);
			});
			
			//Menu Toggle Btn
			$('.mobile-nav-toggler').on('click', function() {
				$('body').addClass('mobile-menu-visible');
			});
	
			//Menu Toggle Btn
			$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
				$('body').removeClass('mobile-menu-visible');
			});
		}
	});
	
	$(document).ready(function() {
		if ($('#rev_slider_one').revolution === undefined) {
			revslider_showDoubleJqueryError('#rev_slider_one');
		} else {
			$('#rev_slider_one').show().revolution({
				sliderType: 'standard',
				jsFileLocation: '/frontend/plugins/revolution/js/',
				sliderLayout: 'auto',
				dottedOverlay: 'none',
				delay: 9000,
				navigation: {
					keyboardNavigation: 'on',
					keyboard_direction: 'horizontal',
					mouseScrollNavigation: 'off',
					onHoverStop: 'off',
					touch: {
						touchenabled: 'on',
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: 'horizontal',
						drag_block_vertical: false
					},
					arrows: {
						style: 'zeus',
						enable: true,
						hide_onmobile: true,
						hide_under: 600,
						hide_onleave: true,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						tmp: '<div class="tp-title-wrap"> <div class="tp-arr-imgholder"></div> </div>',
						left: {
							h_align: 'left',
							v_align: 'center',
							h_offset: 30,
							v_offset: 0
						},
						right: {
							h_align: 'right',
							v_align: 'center',
							h_offset: 30,
							v_offset: 0
						}
					}
				},
				visibilityLevels: [1240, 1024, 778, 480],
				gridwidth: 1170,
				gridheight: 700,
				lazyType: 'none',
				shadow: 0,
				spinner: 'off',
				stopLoop: 'off',
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: 'off',
				autoHeight: 'off',
				disableProgressBar: 'on',
				hideThumbsOnMobile: 'off',
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: 'off',
					nextSlideOnWindowFocus: 'off',
					disableFocusListener: false,
				}
			});
		}
	});
	

	//Banner Carousel
	$(document).ready(function() {
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
				autoplayTimeout:10000,
				navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1024:{
						items:1
					},
				}
			});    		
		}
	});
	
	
	// Services Carousel
	$(document).ready(function() {
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1280:{
					items:4
				}
			}
		});    		
	}
});
	
	
	// Testimonial Carousel
	$(document).ready(function() {
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
			loop:true,
			margin:32,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1280:{
					items:2
				}
			}
		});    		
	}
});
	
	
	// Gallery Carousel
	$(document).ready(function() {
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1280:{
					items:5
				}
			}
		});    		
	}
});
	
	
	//Product Tabs
	$(document).ready(function() {
	if($('.project-tab').length){
		$('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}
});
	
	
	//Product Carousel
	$(document).ready(function() {
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				},
				1400:{
					items:5
				}
			}
		});    		
	}
});
	
	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }
	 
	 //Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	//Time Picker
	if($('.timepicker').length){
		$('.timepicker').timepicker();
	}
	
	//Date Picker
	if($('.datepicker').length){
		$( '.datepicker' ).datepicker();
	}
	
	
	//LightBox / Fancybox
	$(document).ready(function() {
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
 });

	
	//Contact Form Validation
	$(document).ready(function() {
		if($('#contact-form').length){
			$('#contact-form').validate({
				rules: {
					username: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true
					},
					message: {
						required: true
					}
				}
			});
		}
	});
	
	// Scroll to a Specific Div
	$(document).ready(function() {
		if($('.scroll-to-target').length){
			$(".scroll-to-target").on('click', function() {
				var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
				}, 1500);
		
			});
		}
	 });
	
	
	// Elements Animation
	$(document).ready(function() {
		if($('.wow').length){
			var wow = new WOW(
			{
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       0,          // distance to the element when triggering the animation (default is 0)
				mobile:       true,       // trigger animations on mobile devices (default is true)
				live:         true       // act on asynchronously loaded content (default is true)
			}
			);
			wow.init();
		}
	});


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
$(document).ready(function() {
	$(window).on('scroll', function() {
		headerStyle();
	});
 });
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
$(document).ready(function() {
	$(window).on('load', function() {
		handlePreloader();
	});	
 });

})(window.jQuery);