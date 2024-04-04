from flask import Flask, jsonify
from flask_cors import CORS #This allows me to do requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/products/arepas") 
def lulo():
    return jsonify({
                "arepas": [
                    {
                        "id": 1,
                        "nombre": "Arepa con mantequilla y sal",
                        "p_unitario": 1_000
                    },
                    {
                        "id": 2,
                        "nombre": "Arepa con chorizo",
                        "p_unitario": 5_000
                    },
                    {
                        "id": 3,
                        "nombre": "Arepa rellena de pollo y queso",
                        "p_unitario": 6_500
                    },
                    {
                        "id": 4,
                        "nombre": "Arepa rellena de carne y queso",
                        "p_unitario": 7_500
                    },
                    {
                        "id": 5,
                        "nombre": "Arepa con jamón y queso",
                        "p_unitario": 4_500
                    },
                    {
                        "id": 6,
                        "nombre": "Arepa con queso doble",
                        "p_unitario": 2_800
                    },
                    {
                        "id": 7,
                        "nombre": "Arepa con queso sencillo",
                        "p_unitario": 2_000
                    },
                ]
    })

@app.route("/products/bebidas")
def lulo2():
    return jsonify({
        "bebidas": [
                    {
                        "id": 1,
                        "nombre": "Tinto",
                        "p_unitario": 1_000
                    },
                    {
                        "id": 2,
                        "nombre": "Café con leche",
                        "p_unitario": 1_500
                    },
                    {
                        "id": 3,
                        "nombre": "Aromática",
                        "p_unitario": 1_000
                    }
                ]
    })

if __name__ == "__main__":
    app.run(debug=True, port=9000)
