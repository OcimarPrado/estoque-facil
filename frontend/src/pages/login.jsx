import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      setErro('Preencha todos os campos');
    } else {
      setErro('');
      // lógica de autenticação virá aqui
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Entrar
        </button>

        {erro && <p>{erro}</p>}
      </form>
    </div>
  );
}
