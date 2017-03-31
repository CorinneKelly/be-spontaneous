class FlightApi {
  static getJSON(destination, origin) {
    return $.getJSON(`https://pacific-inlet-61461.herokuapp.com/flights/${destination}/${origin}`)
  }

  static formatDestination(lat, longitude) {
  	return lat.toString().replace(".", "x") + "y" + longitude.toString().replace(".", "x") + "-latlong"
  }
}
