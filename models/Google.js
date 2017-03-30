function initMap() {Google.loadMap()}

class Google {
  static init() {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3' +
    '&key=' + googleApiKey +'&callback=initMap'
    document.body.appendChild(script)
  }
  static loadMap(){
    let mapCenter = {lat: 40.4168, lng: -3.7038}
    let newYork = {lat: 40.7128, lng: -74.0059}
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: mapCenter,
      // navigationControl: false,
      // mapTypeControl: false,
      // scaleControl: false,
      // scrollWheel: false,
      // draggable: true
      // attempted to disable mac scroll - unsuccessful
    })
    let marker = new google.maps.Marker({
      draggable: true,
      position: newYork,
      map: map
    })
    let googleActionsController = new GoogleActionsController(marker)
    map.setMapTypeId(google.maps.MapTypeId.SATELLITE)
  }
}