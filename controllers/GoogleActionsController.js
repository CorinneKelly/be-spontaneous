class GoogleActionsController {
	constructor(marker, map) {
		this.map = map
		this.marker = marker
		this.registerEventListeners(marker)
	}

	registerEventListeners(marker) {
		// clicking the map
		google.maps.event.addListener(this.map, 'click', (event) => {
 		    	let latitude = event.latLng.lat()
				let longitude = event.latLng.lng()
				this.marker.setPosition(event.latLng)
				if (GoogleActionsController.getDistanceFromLatLonInKm(latitude, longitude, -51.7963, -59.5236) < 150) {
					window.location.href = 'http://localhost:8000/pokemon.html'
				} else {
					Flight.find(FlightApi.formatDestination(latitude, longitude), FlightApi.formatDestination(originLat, originLong)).then((data) => {
						let flightActionsController = new FlightActionsController(data)
					})
				}
		})

		// dragging the marker
		google.maps.event.addListener(marker, 'dragend', function (event) {
			let latitude = this.getPosition().lat()
			let longitude = this.getPosition().lng()
			if (GoogleActionsController.getDistanceFromLatLonInKm(latitude, longitude, -51.7963, -59.5236) < 150) {
				window.location.href = 'http://localhost:8000/pokemon.html'
			} else {
				Flight.find(FlightApi.formatDestination(latitude, longitude), FlightApi.formatDestination(originLat, originLong)).then((data) => {
					let flightActionsController = new FlightActionsController(data)
				})
			}
		})
	}

	// Calculate lat & long distance
	static getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
	  	var R = 6371; // Radius of the earth in km
	  	var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
	  	var dLon = this.deg2rad(lon2-lon1); 
	  	var a = 
	    Math.sin(dLat/2) * Math.sin(dLat/2) +
	    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
	    Math.sin(dLon/2) * Math.sin(dLon/2)
	  	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  	var d = R * c; // Distance in km
	  	return d;
	}

	static deg2rad(deg) {
		return deg * (Math.PI/180)
	}
}