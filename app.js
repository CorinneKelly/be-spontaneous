var originLat
var originLong
$(() => {
	navigator.geolocation.getCurrentPosition(function(position) {
		originLat = position.coords.latitude
		originLong = position.coords.longitude
		Google.init()
	})
})




//http://www.sofia-guide.com/assets/aeroflot_tickets.png