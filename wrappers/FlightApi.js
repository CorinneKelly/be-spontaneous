class FlightApi {
  static getJSON(destination, origin) {
    return $.getJSONP(`https://skyscannerapi-server.herokuapp.com/flights/${destination}/${origin}`)
  }

  static formatDestination(lat, longitude) {
  	return lat.toString().replace(".", "x") + "y" + longitude.toString().replace(".", "x") + "-latlong"
  }
}
