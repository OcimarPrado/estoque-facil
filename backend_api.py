from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
	return jsonify({"msg":"API do Estoque Fácil está rodando!"})

@app.route("/teste")
def teste():
    return jsonify({"msg": "Rota /teste funcionando!"})


if __name__ == "__main__":
	app.run(debug=True)
