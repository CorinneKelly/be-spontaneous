var originLat
var originLong
$(() => {
	$("#instructions").hide()
	navigator.geolocation.getCurrentPosition(function(position) {
		originLat = position.coords.latitude
		originLong = position.coords.longitude
		$('#loading').remove()
		$("#instructions").show()
		Google.init()

	}, function() {
		originLong = -74.0059
		originLat = 40.7128
		$('#loading').remove()
		$("#instructions").show()
		Google.init()
	})
})
