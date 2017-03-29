$(() => {
	Flight.find("LAX").then((data) => {
		console.log(data)
	})

	loadScript()
	initMap()
})




//http://www.sofia-guide.com/assets/aeroflot_tickets.png