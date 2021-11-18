import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header-link">
                <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/6724.png" className="header-logo" alt="logo-klever" loading="lazy" />
            </Link>
            <button className="header-button-login">
                <Link to="/login" className="header-link-login">Login</Link>
            </button>
        </header>
    )
}