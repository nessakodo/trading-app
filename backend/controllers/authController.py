from flask_restful import Resource, reqparse
from werkzeug.security import generate_password_hash
from backend.models.user import User, db

# Implement your authentication logic here
class Register(Resource):
    def post(self):
        # Implement registration logic
        pass

class Login(Resource):
    def post(self):
        # Implement login logic
        pass
