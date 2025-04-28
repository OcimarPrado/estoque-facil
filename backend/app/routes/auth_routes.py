from flask import Blueprint

# Criar o Blueprint para a aplicação principal
main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def home():
    return "Bem-vindo ao Estoque Fácil!"
