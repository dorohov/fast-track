'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/garantorel';  
	//var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="slick-prev"><svg class="icon-svg icon-owl-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#owl-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-next"><svg class="icon-svg icon-owl-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#owl-next"></use></svg></button>';	
	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true,
		autoplay: true,
		autoplaySpeed: 4000,
	});
}); 