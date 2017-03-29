class GoogleApi {
  static getJSON(destination){
    return $.getJSON(`https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&callback=initMap`)
  }
}