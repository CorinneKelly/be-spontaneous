class FlightsView {
	static renderFlights(flightData) {
		if (flightData.getQuotes() && flightData.getQuotes().length > 0) {
			window.location.href = "#flights-wrapper"
			let flightsList = flightData.getQuotes().map((quote) => {
				return this.flightTemplate(flightData.getQuoteData(quote.QuoteId))
			})
			$("#instructions").remove()
			$("#flights").html(flightsList)
		} else {
			$("#flights").html("No flights bro, try moving the marker closer to an airport.")
		}
	}

	static flightTemplate(quote) {
		let inbound = quote.inbound.carriers.length > 0 ? quote.inbound.carriers : 'Unknown Inbound Carrier' 
		let outbound = quote.outbound.carriers.length > 0 ? quote.outbound.carriers + ' &' : 'Unknown Outbound Carrier &'
		return `
		<div class="flight-quote">
			<div class="flight-left">
				<h3>${quote.price}</h3>
				<a href="http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/NYC/${quote.referral.destination}/${quote.referral.deptDate}/${quote.referral.returnDate}?apiKey=co385841356843233542384262589472}", target="_blank">LETS GO</a>
			</div>

			<div class="flight-right">
				<p>${quote.inbound.destination} <img src="dual_planes.svg" height="30" width="auto"> ${quote.outbound.destination}</p>
				<p>${quote.direct}</p>
				<p>${quote.outbound.departureDate} to ${quote.inbound.departureDate} </p>
				<p>Carriers: ${outbound} ${inbound} </p>
			</div>
		</div>
		`
	}
}
