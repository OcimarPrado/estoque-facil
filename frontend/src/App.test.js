import { render, screen } from '@testing-library/react';
import App from './App';

test('exibe título Estoque Fácil', () => {
  render(<App />);
  const titulo = screen.getByText(/estoque fácil/i);
  expect(titulo).toBeInTheDocument();
});
