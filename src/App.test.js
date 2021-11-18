import { fireEvent, screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';

describe('Testando a homepage', () => {
  test('Testar se o link com texto "Login" redireciona para a rota "/login" ', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByRole('link', {
      name: /home/i,
    }));
    const { pathname } = history.location;
    expect(pathname).toBe('/login');
  });
  test('Testar se existe um parágrafo com o texto inicial', () => {
    const initialText = screen.getByRole('paragraph', {
      name: /A maior plataforma de criptomoedas/i,
    });
    expect(initialText).toBeInTheDocument();
  })
})
