import React, { useState } from 'react';
import useFetchApi from '../hooks/useFetchApi';
import { useDispatch } from 'react-redux';
import { moneyActions } from '../redux/reducers/money';

export default function FormWallet() {
    const { data } = useFetchApi();
    const dispatch = useDispatch();
    const onClick = () => dispatch(moneyActions.addToMoney({ ...moneyData, id: moneyData.id++ }));

    const [moneyData, setMoneyData] = useState({
        valor: 0,
        metodo: 'Bitcoin',
        pagamento: 'TED',
        id: 0,
    });

    const handleSubmit = (event) => event.preventDefault();

    const handleChange = ({ target: { name, value } }) => {
        setMoneyData({ ...moneyData, [name]: value });
    }

    return (
        <div className="form-container">
            <form className="form-wallet" onSubmit={handleSubmit}>
                <label className="label-wallet">
                    Valor:
                    <input
                        name="valor"
                        type="number"
                        className="input-wallet"
                        onChange={handleChange}
                    />
                </label>
                <label className="label-wallet">
                    Criptomoeda:
                    <select className="select-wallet" onChange={handleChange} name="metodo">
                        { data.map((cripto, index) => (
                            <option key={ index } value={ cripto.name } className="option-wallet">
                                { cripto.name }
                            </option>
                        ))}
                    </select>
                </label>
                <label className="label-wallet">
                    Método de pagamento:
                    <select className="select-wallet" onChange={handleChange} name="pagamento">
                        <option>TED</option>
                        <option>DOC</option>
                        <option>PIX</option>
                    </select>
                </label>
                <button type="button" className="wallet-button" onClick={onClick}>Adicionar</button>
            </form>
        </div>
    )
}