<template>
    <div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
	mounted () {
		this.ReadyMethods()
	},
	methods: {
		ReadyMethods () {
			window.onpageshow = function(event) {
				//this was done to prevent firefox and other weird browsers from not triggering document ready jquery
				$('.loader-wrapper').fadeOut('slow')
				$('.loader-wrapper').remove('slow')
			};
			$(document).ready(function () {
				// ----------------------------------------
				//  Pre Loader
				// ----------------------------------------
				$(window).on('load', function () {
					$('.loader-wrapper').fadeOut('slow')
					$('.loader-wrapper').remove('slow')
				})
				// ----------------------------------------
				// Dark Header
				// ----------------------------------------
				$(window).scroll(function () {
					var scroll = $(window).scrollTop()
					if (scroll >= 60) {
						$('.navbar').addClass('darkHeader')
					} else {
						$('.navbar').removeClass('darkHeader')
					}
				})
				/*var mobilemenu = $(window).width ()
				if (mobilemenu < 991) {
					$('nav a.nav-link').on('click',
						function (event) {
							if (!$(this).hasClass('dropdown-toggle')) {
								// console.log('click');
								$('.navbar-collapse').collapse('hide')
							}
						})
				}*/
				// ----------------------------------------
				// home removeclass section
				// ----------------------------------------

				var slidercaption = $(window).width()
				if (slidercaption >= 2000) {
					$('.home-right').addClass('home-contain')
				}
				if (slidercaption <= 1024) {
					$('.home-right').addClass('home-contain')
				}

				// ----------------------------------------
				//  GO to Home
				// ----------------------------------------
				$(window).on('scroll', function () {
					if ($(this).scrollTop() > 500) {
						$('.tap-top').fadeIn()
					} else {
						$('.tap-top').fadeOut()
					}
				})
				$('.tap-top').on('click', function () {
					$('html, body').animate({
						scrollTop: 0
					}, 600)
					return false
				})
			})
			$(document).ready(function(){
				if($( window ).width() >= 991 ) {
					$("nav a").on('click', function(event) {
						if (this.hash !== "") {
							var hash = this.hash;
							if($(hash).length){
								event.preventDefault();
								$('html, body').animate({
									scrollTop: $(hash).offset().top - 0
								}, 1000, function(){
								});
								return false;
							}
						}
					});
				}else {
					$("nav a").on('click', function(event) {
						if (this.hash !== "") {
							var hash = this.hash;
							if($(hash).length){
								event.preventDefault();
								$('html, body').animate({
									scrollTop: $(hash).offset().top - 0
								}, 1000, function(){
								});
								return false;
							}
						}
					});
				}
			});
		}
	}
}
</script>
