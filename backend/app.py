from flask import Flask, jsonify
from flask_cors import CORS
from flask_restful import Api
from controllers import authController, watchlistController
from config import Config


app = Flask(__name__)
CORS(app)

api = Api(app)

api.add_resource(authController.Register, '/register')
api.add_resource(authController.Login, '/login')
api.add_resource(watchlistController.Watchlist, '/watchlist')

if __name__ == '__main__':
    app.run()
