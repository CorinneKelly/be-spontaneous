class ApplicationController < ActionController::API
	include HTTParty

	def serve

		destination = params[:destination]
		byebug
		response = HTTParty.get("http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/US/USD/en-US/NYC/#{destination}/anytime/?apiKey=#{Rails.application.secrets.flight_api}").to_json
		render :json => response
	end
end
