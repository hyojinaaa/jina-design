
// building select nav for mobile width only
$(function(){
	// building select menu
	$('<select />').appendTo('nav');

	// building an option for select menu
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'Choise Page...'
	}).appendTo('nav select');

	$('nav ul li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('nav select');

	});

	// on clicking on link
	$('nav select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});
});
//end

// show and hide sub menu
$(function(){
	$('nav ul li').hover(
		function () {
			//show its submenu
			$('ul', this).slideDown(150);
		}, 
		function () {
			//hide its submenu
			$('ul', this).slideUp(150);			
		}
	);
});
//end

// Highlight current anchor
$(document).ready(function(){
	var str=location.href.toLowerCase();

	$(".nav li a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
 			$("li.highlight").removeClass("highlight");
			$(this).parent().addClass("highlight");
		}
 	});
 });

// Slide menu on mobile device
$('.menu').on('click', function(e){
   $(this).toggleClass('active');
   $(this).siblings('.fullscreen-menu').toggleClass('active');
});
