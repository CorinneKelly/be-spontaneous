class FlightApi {
  static getJSON(destination){
    return $.getJSON(`http://localhost:3000/flights/${destination}`)
  }
}
