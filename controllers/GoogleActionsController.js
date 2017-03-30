class GoogleActionsController {
	constructor(marker) {
		this.registerEventListeners(marker);
	}

	registerEventListeners(marker) {	
		google.maps.event.addListener(marker, 'dragend', function (event) {
			var latitude = this.getPosition().lat()
			var longitude = this.getPosition().lng()
			Flight.find(FlightApi.formatDestination(latitude, longitude)).then((data) => {
				let flightActionsController = new FlightActionsController(data)
			})
		})
	}

	render() {
		return
	}
}