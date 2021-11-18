import React from 'react';
import WalletItem from './WalletItem';

export default function TableItems() {
    return (
        <table className="table-items">
            <tr className="tr-items">
                <th>Valor</th>
                <th>Criptomoeda</th>
                <th>Método de pagamento</th>
                <th>Excluir/Editar</th>
            </tr>
            <WalletItem />
        </table>
    )
}