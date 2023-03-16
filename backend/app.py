from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET'])
def api():
    return jsonify({"message": "Hello from Python backend!"})

if __name__ == '__main__':
    app.run(debug=True)
