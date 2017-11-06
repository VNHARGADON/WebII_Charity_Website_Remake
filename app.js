function slideSwitch() {
	var $active = $('#slideshow IMG.active');

	if ($active.length == 0) $active = $('#slideshow IMG:last');
	var $next = $active.next().length ? $active.next() :
		$('#slideshow IMG:first');
	$active.addClass('last-active');
	$next.css({
			opacity: 0.0
		})
		.addClass('active')
		.animate({
			opacity: 1.0
		}, 1000, function () {
			$active.removeClass('active last-active');
		});
}
$(function () {
	setInterval("slideSwitch()", 5000);
});

function myFunction2() {
	document.getElementById("myDropdown2").classList.toggle("show2");
}
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn2')) {
		var dropdowns = document.getElementsByClassName("dropdown-content2");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show2')) {
				openDropdown.classList.remove('show2');
			}
		}
	}
}

function toggleMenu() {
	var menuBox = document.getElementById('drmenu-box');
	if (menuBox.style.display == "inline") {
		menuBox.style.display = "none";
	} else {
		menuBox.style.display = "inline";
	}
}
//Map code cut from official website since I know nothing about maps
function initialize() {
	var preserve = new google.maps.LatLng(37.090240, -95.712891);
	var mapOptions = {
		zoom: 4,
		center: preserve
	}
	var now = new Date().getTime();
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var ctaLayer = new google.maps.KmlLayer({
		url: 'http://www.nature.org/placesweprotect/preserve-map.xml?' + now,
		preserveViewport: true,
	});
	ctaLayer.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function () {
	$("#mySelectMenu").change(function () {
		if ($(this).val()) {
			window.location = ($(this).val());
		}
	});

});
