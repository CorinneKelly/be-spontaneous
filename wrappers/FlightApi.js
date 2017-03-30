class FlightApi {
  static getJSON(destination){
    return $.getJSON(`http://localhost:3000/flights/${destination}`)
  }

  static formatDestination(lat, longitude){
  	return lat.toString().replace(".", "x") + "y" + longitude.toString().replace(".", "x") + "-latlong"
  }
}
