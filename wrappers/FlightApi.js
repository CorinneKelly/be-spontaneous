class FlightApi {
  static getJSON(destination, origin) {
    return $.getJSON(`http://localhost:3000/flights/${destination}/${origin}`)
  }

  static formatDestination(lat, longitude) {
  	return lat.toString().replace(".", "x") + "y" + longitude.toString().replace(".", "x") + "-latlong"
  }
}
