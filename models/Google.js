// class Google {
//   // loadScript()
// 	static initMap() {
// 	  var mapCenter = {lat: 32.3078, lng: 64.7505}
// 	  // set to bermuda because its in the middle of the ocean..
// 	  var map = new google.maps.Map(document.getElementById('map'), {
// 	    zoom: 1,
// 	    // 0 is the lowest zoom that displays the whole earth
// 	    center: mapCenter
// 	  })
// 	  var marker = new google.maps.Marker({
// 	    position: mapCenter,
// 	    map: map
// 	  })

// 	}
// }

function loadScript() {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3' +
      '&key=' + googleApiKey +'&callback=initMap' 
  document.body.appendChild(script)
}

function initMap() {
  var mapCenter = {lat: 32.3078, lng: -64.7505}
  // set to bermuda because its in the middle of the ocean..
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    // 0 is the lowest zoom that displays the whole earth
    center: mapCenter
  })
  var marker = new google.maps.Marker({
    position: mapCenter,
    map: map
  })
}