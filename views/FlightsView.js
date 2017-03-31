class FlightsView {
	static renderFlights(flightData) {
		if (flightData.getQuotes() && flightData.getQuotes().length > 0) {
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
		let inbound = quote.inbound.carriers.length > 0 ? quote.inbound.carriers : 'Unknown Inbound Carrier' 
		let outbound = quote.outbound.carriers.length > 0 ? quote.outbound.carriers + ' &' : 'Unknown Outbound Carrier &'
		return `
		<div class="flight-quote"
			<h3>${quote.price}</h3>
			<p>${quote.inbound.destination} <img src="dual_planes.svg" height="30" width="30"> ${quote.outbound.destination}</p>
			<p>${quote.direct}</p>
			<p>${quote.outbound.departureDate} to ${quote.inbound.departureDate}</p>
			<p>Carriers: ${outbound} ${inbound}</p>

			<a href="http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/NYC/${quote.referral.destination}/${quote.referral.deptDate}/${quote.referral.returnDate}?apiKey=${skyScannerApiKey}", target="_blank">LETS GO</a>
		</div>
		`
	}
}
