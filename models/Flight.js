class Flight {
	constructor(data) {
		this.carriers = data.Carriers
		this.places = data.Places
		this.quotes = data.Quotes
	}

	getNameFromId(category, catName, id) {
		let name = ""
		category.forEach((c) => {
			if (c[catName] == id)
				name = c.Name
		})
		return name
	}

	getAiportCodeFromId(id) {
		let airportCode = ""
		this.places.forEach((place) => {
			if (place.PlaceId == id)
				airportCode = place.SkyscannerCode
		})
		return airportCode
	}

	getQuotes() {
		return this.quotes
	}

	getDirectInfo(directInfo) {
		if (directInfo) {
			return "Direct Flight"
		} else {
			return "Non-Direct Flight"
		}
	}

	getQuoteData(id) {
		let quote;
		this.getQuotes().forEach((q) => {
			if (q.QuoteId == id)
				quote = q
		})
		if (quote) {
			let outBoundPlanes = quote.OutboundLeg.CarrierIds.map((c) => {
				return this.getNameFromId(this.carriers, "CarrierId", c)
			})
			let inBoundPlanes = quote.InboundLeg.CarrierIds.map((c) => {
				return this.getNameFromId(this.carriers, "CarrierId", c)
			})
			return {
				id: quote.QuoteId, 
				price: `$${quote.MinPrice}`,
				direct: this.getDirectInfo(quote.Direct), 
				outbound: {
					departureDate: this.formatDate(quote.OutboundLeg.DepartureDate),
					destination: this.getNameFromId(this.places, "PlaceId", quote.OutboundLeg.DestinationId),
					origin: this.getNameFromId(this.places, "PlaceId", quote.OutboundLeg.OriginId),
					carriers: outBoundPlanes
				},
				inbound: {
					departureDate: this.formatDate(quote.InboundLeg.DepartureDate),
					destination: this.getNameFromId(this.places, "PlaceId", quote.InboundLeg.DestinationId),
					origin: this.getNameFromId(this.places, "PlaceId", quote.InboundLeg.OriginId),
					carriers: inBoundPlanes
				},
				referral: {
					deptDate: quote.OutboundLeg.DepartureDate.slice(0,10),
					returnDate: quote.InboundLeg.DepartureDate.slice(0,10),
					destination: this.getAiportCodeFromId(quote.OutboundLeg.DestinationId)
				} 

			}

		} else {
			return "No Quote with Id: " + id
		}
	}

	formatTime(dateTime) {
		let timeFromObject = new Date(dateTime)
		if (timeFromObject.getHours() > 12) {
			var flightTime = (timeFromObject.getHours() - 12) + ":" + timeFromObject.getMinutes() + "PM"
		} else {
			var flightTime = timeFromObject.getHours() + ":" + timeFromObject.getMinutes() + "AM"
		}
		return flightTime
	}

	formatDate(dateTime) {
		let dateFromObject = new Date(dateTime)
		let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		let stringDate = monthArray[dateFromObject.getMonth()] + ' ' + dateFromObject.getDate() + ' ' +  dateFromObject.getFullYear()
		return stringDate
	}

	static find(destination) {
		return FlightApi.getJSON(destination)
	}
}