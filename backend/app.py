from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app


# Configuration for MongoDB
# TODO: .env file
app.config["MONGO_URI"] = "mongodb://mongodb:27017/mydatabase"
mongo = PyMongo(app)


@app.route('/create', methods=['POST'])
def create():
    # Retrieve data from request
    data = request.json

    # output data to the console
    print(data)

    # Insert data into the MongoDB collection
    mongo.db.collection.insert_one(data)
    return jsonify(message="Data added successfully"), 201

@app.route('/list', methods=['GET'])
def list_data():
    data = mongo.db.collection.find({})
    data_list = [{"_id": str(item["_id"]), "data": item["data"]} for item in data]
    return jsonify(data_list)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
