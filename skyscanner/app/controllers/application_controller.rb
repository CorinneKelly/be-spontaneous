class ApplicationController < ActionController::API
	include HTTParty

	def incoming
		destination = params[:destination].gsub("x", ".").gsub("y", ",")
		origin_destination = params[:origin].gsub("x", ".").gsub("y", ",")
		response = HTTParty.get("http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/US/USD/en-US/#{origin_destination}/#{destination}/anytime/anytime/?apiKey=#{Rails.application.secrets.flight_api}").to_json
		render :json => response
	end
end
