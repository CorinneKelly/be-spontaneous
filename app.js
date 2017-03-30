var originLat
var originLong
$(() => {
	loading_page.html
	navigator.geolocation.getCurrentPosition(function(position) {
		originLat = position.coords.latitude
		originLong = position.coords.longitude
		Google.init()
	})
})
