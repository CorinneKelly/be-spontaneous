class FlightActionsController {
	constructor(data) {
		this.flightData = new Flight(data)
		this.render()
	}

	render() {
		FlightsView.renderFlights(this.flightData)
	}
}