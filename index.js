$.getJSON("http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/
  {originPlace}/
  {destinationPlace}/
  {outboundPartialDate}/
  {inboundPartialDate}?
  apiKey={apiKey}")

 var country = "USA"
 var currency = "USD"
 var locale = "en-US"
 var originPlace

//  function currencyCheck(){
//  	 var currency_hash = $.getJSON("http://partners.api.skyscanner.net/apiservices/reference/v1.0/currencies?apiKey=${apiKey}")
// // currency_hash["Currencies"].each do |currency| => currency["Code"] == "USD"
//  }
