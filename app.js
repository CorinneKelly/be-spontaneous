$(() => {
	Flight.find("LAX").then((data) => {
		console.log(data)
	})

	Google.initMap()
})




//http://www.sofia-guide.com/assets/aeroflot_tickets.png