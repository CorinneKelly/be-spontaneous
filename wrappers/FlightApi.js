class FlightApi {
  static getJSON(destination){
    return $.getJSON(`http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/US/USD/en-US/NYC/${destination}/anytime/?apiKey=co385841356843233542384262589472`)   
  }
}
