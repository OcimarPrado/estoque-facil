from flask import Flask
from .routes.auth_routes import main_bp  # Corrigido para 'main_bp'

def create_app():
    app = Flask(__name__)
    
    # Registra o blueprint
    app.register_blueprint(main_bp)  # Corrigido para 'main_bp'
    
    return app
