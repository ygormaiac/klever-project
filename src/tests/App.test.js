import { fireEvent, screen, render } from '@testing-library/react';
import App from '../App';
import Login from '../pages/Login';
import Homepage from '../pages/Homepage';
import renderWithRouter from '../renderWithRouter';
import Wallet from '../pages/Wallet';

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
    render(<Homepage />);
    const initialText = screen.getByText(/A maior plataforma de criptomoedas/i);
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
  test('Verifica se existe um botão de editar', () => {
    const btnDelete = screen.getByRole('button', {
      name: /editar/i,
    });
    expect(btnDelete).toBeInTheDocument();
  });
  test('Verifica se existe um h3 na página', () => {
    render(<Homepage />);
    const titleH3 = screen.getByRole('heading', {
      name: /Comece agora de forma/i,
    });
    expect(titleH3).toBeInTheDocument();
  });
  test('Verifica se o Header contém uma imagem', () => {
    render(<Homepage />);
    const headerImg = screen.getByAltText('logo-klever');
    expect(headerImg).toHaveAttribute('src', 'https://s2.coinmarketcap.com/static/img/coins/200x200/6724.png');
  });
  test('Verifica se o botão de Sign Out redireciona para a página inicial', () => {
    const { history } = renderWithRouter(<Wallet />);
    fireEvent.click(screen.getByRole('button', {
      name: /Sign In/i,
    }));
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});
