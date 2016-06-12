
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

// Contact page local storage
if( localStorage.getItem('name') ) {

	document.querySelector('#name').value = localStorage.getItem('name');
}

if( localStorage.getItem('email') ) {

	document.querySelector('#email').value = localStorage.getItem('email');
}

if( localStorage.getItem('subject') ) {

	// Loop over each option
	var selectElement = document.querySelector('#subject');

	for(var i=0; i<selectElement.length; i++) {

		// Is this the option the user chose?
		if( localStorage.getItem('subject') == selectElement[i].value ) {

			// Select this option
			selectElement[i].setAttribute('selected', 'selected');
		}
	}

}

if( localStorage.getItem('message') ) {

	document.querySelector('#message').value = localStorage.getItem('message');
}


// Listen for input on the name field
document.querySelector('#name').onkeyup = function(){

	localStorage.setItem('name', this.value);
}

// Listen for the changes inthe country options
document.querySelector('#email').onkeyup = function(){

	localStorage.setItem('email', this.value);

}

document.querySelector('#subject').onchange = function(){

	localStorage.setItem('subject', this.value);

}

document.querySelector('#message').onkeyup = function(){

	localStorage.setItem('message', this.value);

}

// map 
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: 0, lng: -180},
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });

        var flightPlanCoordinates = [
          {lat: 37.554752, lng: 126.903351},
          {lat: 23.086193, lng: 113.172878},
          {lat: -36.847792, lng: 174.760859},
          {lat: -41.304603, lng: 174.797219}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
 
     
    marker = new google.maps.Marker({
    map: map,
  	draggable: true,
    animation: google.maps.Animation.DROP,
    position: 
    	{lat: -41.304603, lng: 174.797219}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
