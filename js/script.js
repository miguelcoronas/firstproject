/*  ---- scroll navigation */
$(document).ready(function() {
	$('a.navbar-brand, a.nav-link').click(function() {
		var $secID = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($secID.attr('href')).offset().top - 57)}, 1000);
	});
	$('body').scroll.spy ({
		target: ".navbar-fixed-top", offset:70
	})
});
