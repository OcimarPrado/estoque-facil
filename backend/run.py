from app import create_app

# Cria o app usando a função create_app()
app = create_app()

if __name__ == "__main__":
    # Inicia o servidor Flask
    app.run(debug=True)
