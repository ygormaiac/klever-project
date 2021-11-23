import React from 'react';
import { getByLabelText, render } from '@testing-library/react';
import WalletItem from '../components/WalletItem';

describe('Testando WalletItem e FormWallet', () => {
    test('Testando se existe um botão de deletar no documento', () => {
        const { getByTestId } = render(<WalletItem />);

        const btnElement = getByTestId('delete-btn');
        expect(btnElement).toBeInTheDocument();
    })
})