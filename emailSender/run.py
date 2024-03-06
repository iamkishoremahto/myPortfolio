from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/sendEmail', methods=['POST'])
def sendMessage():
    data = request.json
    print(data)
    return jsonify({"status": "success"})

if __name__ == '__main__':

    app.run(debug= True)