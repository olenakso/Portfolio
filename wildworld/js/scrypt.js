/* popup */
$(document).ready(function() {
	/*         $('.image-popup-vertical-fit').magnificPopup({
	            type: 'image',
	            closeOnContentClick: true,
	            mainClass: 'mfp-img-mobile',
	            image: {
	                verticalFit: true
	            }
	            
	        }); */
	/*          $('.image-popup-fit-width').magnificPopup({
	            type: 'image',
	            closeOnContentClick: true,
	            image: {
	                verticalFit: false
	            }
	        }); */
	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
});


/* прокрутка */
$('#toTop').on('click', function() {
	$('html,body').animate({
		scrollTop: 0
	}, 500);
});
window.onscroll = function up() {
	if (window.pageYOffset > "200") {
		$('#toTop').css("display", "block")
	} else {
		$('#toTop').hide(500); /* css("display","none") */
	}
}


/* sticky menu */
jQuery("document").ready(function($) {
	var nav = $('.nav-container');
	$(window).scroll(function() {
		if ($(this).scrollTop() > 136) {
			nav.addClass("f-nav");
			$(".nav-item-link").css("color", "#000");
		} else {
			nav.removeClass("f-nav");
			$(".nav-item-link").css("color", "#fff");
		}
	});
});