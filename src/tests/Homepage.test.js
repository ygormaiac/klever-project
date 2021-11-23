import { fireEvent, screen, render } from '@testing-library/react';
import App from '../App';
import Homepage from '../pages/Homepage';
import renderWithRouter from '../renderWithRouter';

describe('Testando a homepage', () => {
  beforeEach(() => renderWithRouter(<Homepage />));

  test('Testar se existe um parágrafo com o texto inicial', () => {
    render(<Homepage />);
    const initialText = screen.getByText(/A maior plataforma de criptomoedas/i);
    expect(initialText).toBeInTheDocument();
  });

  test('Testar se o botão com o texto start redireciona para a rota "/login" ', () => {
    const { history } = renderWithRouter(<Homepage />);
    fireEvent.click(screen.getByRole('button', {
      name: /Start/i,
    }));
    const { pathname } = history.location;
    expect(pathname).toBe('/login');
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
  
  test('Verifica se o botão de Sign Out redireciona para a página inicial', () => {
    const { history } = renderWithRouter(<Wallet />);
    fireEvent.click(screen.getByRole('button', {
      name: /Sign In/i,
    }));
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});