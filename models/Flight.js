class Flight {
	static find(destination) {
		return FlightApi.getJSON(destination);
	}
}