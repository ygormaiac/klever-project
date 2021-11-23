import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { Header } from '../components/Header';

describe('Testando Header.js', () => {
    beforeEach(() => renderWithRouter(<Header />));

    test('Verifica se o Header contém uma imagem', () => {
        const headerImg = screen.getByAltText('logo-klever');
        expect(headerImg).toHaveAttribute('src', 'https://s2.coinmarketcap.com/static/img/coins/200x200/6724.png');
    });

    test('Testar se o link com texto "Login" redireciona para a rota "/login" ', () => {
        const { history } = renderWithRouter(<App />);
        fireEvent.click(screen.getByRole('link', {
          name: /home/i,
        }));
        const { pathname } = history.location;
        expect(pathname).toBe('/login');
    });
});