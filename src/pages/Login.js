import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [loginValue, setLoginValue] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function onSubmitLogin() {
        validateEmail(loginValue.email) && navigate('/carteira');
    }

    const handleChange = ({ target: { name, value }}) => {
        setLoginValue({ ...loginValue, [name]: value });
    }

    return (
        <div>
            <header className="header">
            <Link to="/" className="header-link">
                <img
                    src="https://s2.coinmarketcap.com/static/img/coins/200x200/6724.png"
                    className="header-logo"
                    alt="logo-klever"
                    loading="lazy"
                />
            </Link>
            </header>
            <div className="login-container">
                <img
                    src="https://s2.coinmarketcap.com/static/img/coins/200x200/6724.png"
                    className="login-logo" 
                    alt="logo-klever"
                    loading="lazy"
                />
                <span>Username</span>
                <input
                    className="input-login"
                    type="email"
                    name="email"
                    onChange={handleChange}
                />
                <span>Password</span>
                <input
                    className="input-login"
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                <button
                    onClick={onSubmitLogin}
                    type="submit"
                    className="button-login"
                >
                    Sign In
                </button>
            </div>
        </div>

    )
}