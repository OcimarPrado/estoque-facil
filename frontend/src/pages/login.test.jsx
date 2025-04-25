import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';

describe('Tela de Login', () => {
  test('deve exibir campos de email e senha e botão de login', () => {
    render(<Login />);
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  test('deve permitir digitar nos campos de email e senha', () => {
    render(<Login />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const senhaInput = screen.getByLabelText(/senha/i);

    fireEvent.change(emailInput, { target: { value: 'teste@email.com' } });
    fireEvent.change(senhaInput, { target: { value: '123456' } });

    expect(emailInput.value).toBe('teste@email.com');
    expect(senhaInput.value).toBe('123456');
  });

  test('deve exibir mensagem de erro se campos estiverem vazios ao tentar logar', () => {
    render(<Login />);
    
    const loginButton = screen.getByRole('button', { name: /entrar/i });
    fireEvent.click(loginButton);

    expect(screen.getByText(/preencha todos os campos/i)).toBeInTheDocument();
  });
});
