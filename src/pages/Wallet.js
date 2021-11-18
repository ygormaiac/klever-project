import React from 'react';
import FormWallet from '../components/FormWallet';
import { Link } from 'react-router-dom';
import TableItems from '../components/TableItems';

export default function Wallet() {
    return (
        <div>
            <header className="header">
            <Link to="/" className="header-link">
                <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/6724.png" className="header-logo" alt="logo-klever" loading="lazy" />
            </Link>
            <button className="header-button-login">
                <Link to="/" className="header-link-login">Sign Out</Link>
            </button>
            </header>
            <FormWallet />
            <div className="table-div">
                <TableItems />
            </div>
        </div>
    )
}