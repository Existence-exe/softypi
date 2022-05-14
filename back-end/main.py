from crypt import methods
from flask import Flask, redirect, url_for, request 
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home() : 
    return "hi"

@app.route('/play',methods=['POST'])
def play() :
    return 'this is fine'

if __name__ == "__main__" : 
    app.run(debug = True)
