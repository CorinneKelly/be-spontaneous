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
			<p>
			ID: ${quote.id}
			Price: ${quote.price}
			Direct: ${quote.direct}
			Outbound Info:
			</p>
			<p>
				Destination: ${quote.outbound.destination}
				Departure: ${quote.outbound.departureDate}
				Origin: ${quote.outbound.origin}
				Carriers: ${quote.outbound.carriers}
			</p>
			<p>
				Destination: ${quote.inbound.destination}
				Departure: ${quote.inbound.departureDate}
				Origin: ${quote.inbound.origin}
				Carriers: ${quote.inbound.carriers}
			</p>
			<a href="http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/NYC/${quote.referral.destination}/${quote.referral.deptDate}/${quote.referral.returnDate}?apiKey=${skyScannerApiKey}", target="_blank">LETS GO</a>
		</div>
		`
	}
}