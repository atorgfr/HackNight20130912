window.hackmap = window.hackmap || {};

(function(hackmap) {

	hackmap.map = {};
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=hackmap.getmap';
	document.body.appendChild(script);

	hackmap.getmap = function() {
	  hackmap.map = initialize();
	};

	hackmap.addMarker= function(lat, long, url, nom)
	{
		var image = {
		    url: url,
		    size: new google.maps.Size(50, 50)
		  };

		var myLatlng = new google.maps.LatLng(lat + (Math.random() * 0.0020), long + (Math.random() * 0.0020));
	    var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: hackmap.map,
	      icon: image,
	      title: nom
	    });
	}

	function initialize() {
	  var mapOptions = {
	    zoom: 2,
	    center: new google.maps.LatLng(46.000, 2.000),
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  };

	  return new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	}
})(hackmap);