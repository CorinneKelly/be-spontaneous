$(() => {
	Flight.find("LAX").then((data) => {
		console.log(data)
	})

	Google.init();
})




//http://www.sofia-guide.com/assets/aeroflot_tickets.png