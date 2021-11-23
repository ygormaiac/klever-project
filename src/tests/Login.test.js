import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { Login } from '../pages/Login';


describe('Testando Login.js', () => {
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
});
