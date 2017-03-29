class Google {
	function initMap() {
	  var mapCenter = {lat: 32.3078, lng: 64.7505}
	  // set to bermuda because its in the middle of the ocean..
	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 1,
	    // 0 is the lowest zoom that displays the whole earth
	    center: mapCenter
	  })
	  var marker = new google.maps.Marker({
	    position: mapCenter,
	    map: map
	  })
	}
}