import React, { useState } from 'react';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleCadastro = () => {
    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }
    setErro('');
    // Aqui futuramente chamaremos a API para cadastrar
    console.log('Cadastro enviado:', { nome, email, senha });
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          aria-label="nome"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="email"
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          aria-label="senha"
        />
      </label>
      <br />
      <button onClick={handleCadastro}>Cadastrar</button>
      {erro && <p>{erro}</p>}
    </div>
  );
}
