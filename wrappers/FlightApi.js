class FlightApi {
  static getJSON(destination){
    return $.getJSON(`http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/US/USD/en-US/NYC/${destination}/anytime/?apiKey=${skyScannerApiKey}`)   
  }
}
