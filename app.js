var originLat
var originLong
$(() => {
	navigator.geolocation.getCurrentPosition(function(position) {
		originLat = position.coords.latitude
		originLong = position.coords.longitude
		$('#loading').remove()
		Google.init()

	}, function() {
		originLong = -74.0059
		originLat = 40.7128
		$('#loading').remove()
		Google.init()
	})
})
