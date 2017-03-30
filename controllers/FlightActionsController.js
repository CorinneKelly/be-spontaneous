class FlightActionsController {
	constructor(data) {
		this.flightData = new Flight(data)
		this.render()
		//flight.getNameFromId(data.Carriers, "CarrierId", 1793)
		//flight.getNameFromId(data.Places, "PlaceId", 1793)
	}

	render() {
		FlightsView.renderFlights(this.flightData)
	}
}