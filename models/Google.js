function initMap() {Google.loadMap()}

class Google {
  static init() {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3' +
    '&key=' + 'AIzaSyBrn2cdDNjKP7XYgtvEiaIYiB_6fDZ7-XM' +'&callback=initMap'
    document.body.appendChild(script)
  }

  static loadMap(){
    let mapCenter = {lat: 40.4168, lng: -3.7038}
    let newYork = {lat: originLat, lng: originLong}
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: mapCenter,
      keyboardShortcuts: false
    })
    let marker = new google.maps.Marker({
      draggable: true,
      position: newYork,
      map: map
    })
    map.setMapTypeId(google.maps.MapTypeId.HYBRID)
    // can change to satellite or terrain or delete line for regular traffic view
    let googleActionsController = new GoogleActionsController(marker, map)
  }
}