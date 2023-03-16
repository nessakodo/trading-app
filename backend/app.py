import requests
from flask import Flask, jsonify
from flask_cors import CORS
from flask_restful import Api
from controllers import authController, watchlistController
from config import Config
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})

api = Api(app)

api.add_resource(authController.Register, '/register')
api.add_resource(authController.Login, '/login')
api.add_resource(watchlistController.Watchlist, '/watchlist')

@app.route('/api/cryptocurrencies', methods=['GET'])
def get_cryptocurrencies():
    # Fetch the top 100 cryptocurrencies by market cap
    url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    response = requests.get(url)

    if response.status_code == 200:
        cryptocurrencies = response.json()
        # Extract the relevant information from the API response
        crypto_data = [
            {
                "id": crypto["id"],
                "name": crypto["name"],
                "symbol": crypto["symbol"].upper(),
                "price": round(crypto["current_price"], 2),
                "market_cap": crypto["market_cap"],
                "market_cap_rank": crypto["market_cap_rank"],
            }
            for crypto in cryptocurrencies
        ]
        return jsonify(crypto_data)
    else:
        return jsonify({"error": "Unable to fetch cryptocurrency data"}), 500


if __name__ == '__main__':
    app.run()
