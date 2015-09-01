/* Contact Form Character Text Count feature */

$("#message").on("keyup", function() {
	var charCount = $("#message").val().length;
	$("#char-count").html(charCount);
	if(charCount > 50) {
		$("#char-count").css("color", "red");	
	} else {
		$("#char-count").css("color", "black");
	}
}); 

$("button").on("click", function(){
	var comment = $("#message").val();
	$("#visible-comment").html(comment);
});

/* Google Map API */

var map;
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(36.147247, -115.156031),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  map.setTilt(45);
 }

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

/* jQuery hover animation in Steps to Get Started */

$(".notli").hide(function() {
  $("li").filter($(".notli"));
});
  $("h1").hover(function() {
  $(".notli").fadeToggle(1000);

});

