import React from 'react';
import { BiTrash, BiEditAlt, BiZoomIn } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { moneyActions } from '../redux/reducers/money';
import { Link } from 'react-router-dom';

export default function WalletItem() {
    const money = useSelector((state) => state.money.money);

    const dispatch = useDispatch();
    const deleteClick = (id) => dispatch(moneyActions.removeToMoney(id));
    const editClick = (id) => dispatch(moneyActions.editToMoney(id));

    return (
        money.map((expense) => (
            <tbody>
                <tr key={expense.id} className="tr-items-add">
                    <td>{expense.valor}</td>
                    <td>{expense.metodo}</td>
                    <td>{expense.pagamento}</td>
                    <td>
                    <button
                        type="button"
                        data-testid="delete-btn"
                        className="button-delete"
                        onClick={() => deleteClick(expense.id)}
                    >
                        <BiTrash size={20} />
                    </button>
                    <button
                        onClick={() => editClick(expense.id)}
                        type="button"
                        data-testid="edit-btn"
                        className="button-edit"
                    >
                    <BiEditAlt size={20} />
                    </button>
                    <Link to={`/carteira/${expense.id}`} className="link-details">
                        <button className="button-details">
                            <BiZoomIn size={20} />
                        </button>
                    </Link>
                    </td>
                </tr>
            </tbody>
        ))
    )
}