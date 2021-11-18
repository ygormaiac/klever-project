import { fireEvent, screen } from '@testing-library/react';
import App from './App';
import Login from './pages/Login';
import renderWithRouter from './renderWithRouter';

describe('Testando a homepage e a página de login', () => {
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
  });
  test('Testar se o botão com o texto start redireciona para a rota "/login" ', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByRole('button', {
      name: /Start/i,
    }));
    const { pathname } = history.location;
    expect(pathname).toBe('/login');
  });
  test('Testar se o botão Sign In redireciona para "/carteira" ', () => {
    const { history }= renderWithRouter(<Login />);
    fireEvent.click(screen.getByRole('button', {
      name: /Sign In/i,
    }));
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
  test('Testar se existe um input do tipo email', () => {
    const inputText = screen.getByRole('textbox', {
      name: /email/i,
    });
    expect(inputText).toBeInTheDocument();
  });
  test('Verifica se existe um botão de excluir', () => {
    const btnDelete = screen.getByRole('button', {
      name: /editar/i,
    });
    expect(btnDelete).toBeInTheDocument();
  })
})
