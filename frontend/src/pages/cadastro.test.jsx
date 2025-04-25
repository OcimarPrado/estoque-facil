// src/pages/cadastro.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cadastro from './Cadastro';

describe('Tela de Cadastro', () => {
  test('deve exibir campos de nome, email, senha e botão de cadastro', () => {
    render(<Cadastro />);
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
  });

  test('deve permitir digitar nos campos', () => {
    render(<Cadastro />);
    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'Ocimar' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'ocimar@email.com' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: '123456' } });

    expect(screen.getByLabelText(/nome/i).value).toBe('Ocimar');
    expect(screen.getByLabelText(/email/i).value).toBe('ocimar@email.com');
    expect(screen.getByLabelText(/senha/i).value).toBe('123456');
  });

  test('deve exibir mensagem de erro se campos estiverem vazios ao tentar cadastrar', () => {
    render(<Cadastro />);
    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));
    expect(screen.getByText(/preencha todos os campos/i)).toBeInTheDocument();
  });
});
