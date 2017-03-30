class FlightsView {
	static renderFlights(flightData) {
		if (flightData.getQuotes()) {
			window.location.href = "#flights-wrapper"
			let flightsList = flightData.getQuotes().map((quote) => {
				return this.flightTemplate(flightData.getQuoteData(quote.QuoteId))
			})
			$("#flights").html(flightsList)
		} else {
			$("#flights").html("no flights bro")
		}
	}

	static flightTemplate(quote) {
		return `
		<div class="flight-quote"
			<h3>${quote.price}</h3>
			<p><strong>${quote.inbound.destination}</strong> to <strong>${quote.outbound.destination}</strong></p>
			<p>${quote.direct}</p>
			<p>${quote.outbound.departureDate} to ${quote.inbound.departureDate} </p>
			<p>Carriers: ${quote.inbound.carriers} & ${quote.outbound.carriers} </p>

			<a href="http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/NYC/${quote.referral.destination}/${quote.referral.deptDate}/${quote.referral.returnDate}?apiKey=${skyScannerApiKey}", target="_blank">LETS GO</a>
		</div>
		`
	}
}

			// Price: ${quote.price}
			// Direct: ${quote.direct}
			// Outbound Info:
			// </p>
			// <p>
			// 	Destination: ${quote.outbound.destination}
			// 	Departure: ${quote.outbound.departureDate}
			// 	Origin: ${quote.outbound.origin}
			// 	Carriers: ${quote.outbound.carriers}
			// </p>
			// <p>
			// 	Destination: ${quote.inbound.destination}
			// 	Departure: ${quote.inbound.departureDate}
			// 	Origin: ${quote.inbound.origin}
			// 	Carriers: ${quote.inbound.carriers}
			// </p>