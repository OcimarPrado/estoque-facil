from flask import request, jsonify
from ..models.user_model import User
from .. import db
from flask_jwt_extended import create_access_token

def register_user():
    data = request.get_json()
    nome = data.get('nome')
    email = data.get('email')
    senha = data.get('senha')

    if User.query.filter_by(email=email).first():
        return jsonify({"erro": "Email já cadastrado"}), 409

    user = User(nome=nome, email=email)
    user.set_password(senha)

    db.session.add(user)
    db.session.commit()

    return jsonify({"mensagem": "Usuário registrado com sucesso"}), 201

def login_user():
    data = request.get_json()
    email = data.get('email')
    senha = data.get('senha')

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(senha):
        return jsonify({"erro": "Credenciais inválidas"}), 401

    token = create_access_token(identity=email)
    return jsonify({"token": token}), 200
