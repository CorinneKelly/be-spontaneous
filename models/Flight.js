class Flight {
	constructor(data) {
		this.carriers = data.carriers
		this.places = data.places
		this.quotes = data.quotes
	}

	getNameFromId(category, catName, id) {
		let name = ""
		category.forEach((c) => {
			console.log("looping")
			if (c[catName] == id)
				name = c.Name
		})
		return name
	}

	static find(destination) {
		return FlightApi.getJSON(destination)
	}
}