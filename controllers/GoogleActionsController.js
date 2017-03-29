class GoogleActionsController {
	constructor(marker) {
		this.registerEventListeners(marker);
	}

	registerEventListeners(marker) {	
		google.maps.event.addListener(marker, 'dragend', function (event) {
			console.log(this.getPosition().lat())
			console.log(this.getPosition().lng())

		})
	}

	render() {
		return
	}
}