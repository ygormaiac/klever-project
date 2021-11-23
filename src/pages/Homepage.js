import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import useFetchApi from '../hooks/useFetchApi';
import CriptoCard from '../components/CriptoCard';

export default function Homepage() {
    const { data } = useFetchApi();

    return (
        <div className="container-sections">
            <Header />
            <section className="section-presentation">
                <div className="section-initial">
                    <p>A maior plataforma de <span className="initial-animation">Criptomoedas</span> da América!</p>
                    <button className="header-button-login">
                        <Link to="/login" className="header-link-login">Start</Link>
                    </button>
                </div>
                <div className="section-details">
                    <div className="cripto-details">
                        <img
                            src="https://logosmarcas.net/wp-content/uploads/2020/08/Bitcoin-Logo.png"
                            alt="logo-bitcoin"
                            className="img-card-cripto"
                            loading="lazy"
                        />
                        <span>Bitcoin</span>
                    </div>
                    <div className="cripto-details">
                        <img
                            src="https://s2.coinmarketcap.com/static/img/coins/200x200/6724.png"
                            alt="logo-klever"
                            className="img-card-cripto"
                            loading="lazy"
                        />
                        <span>Klever</span>
                    </div>
                    <div className="cripto-details">
                        <img
                            src="https://marcas-logos.net/wp-content/uploads/2020/03/ETHEREUM-LOGO.png"
                            alt="logo-ethereum"
                            className="img-card-cripto"
                            loading="lazy"
                        />
                        <span>Ethereum</span>
                    </div>
                </div>
            </section>
            <section className="section-information">
                <h3 className="title-information">Comece agora de forma bem simples:</h3>
                <div className="information-details">
                    <div className="cards-information">
                        <span className="number-information">01</span>
                        <span className="subtitle-information">Abra sua conta</span>
                        <p>De forma fácil e gratuita.</p>
                    </div>
                    <div className="cards-information">
                        <span className="number-information">02</span>
                        <span className="subtitle-information">Adicione seu saldo</span>
                        <p>Via TED/DOC ou PIX.</p>
                    </div>
                    <div className="cards-information">
                        <span className="number-information">03</span>
                        <span className="subtitle-information">Compre um ativo</span>
                        <p>Acesse os ativos.</p>
                    </div>
                </div>
            </section>
            <section className="selection-container">
                <h3 className="title-selection">Veja nossa seleção de ativos:</h3>
                <div className="selection-details">
                    { data.map((cripto, index) => (
                        <CriptoCard
                            key={index}
                            name={cripto.name}
                            symbol={cripto.symbol}
                            price={cripto.price}
                            img={cripto.icon}
                        />
                    ))}
                </div>   
            </section>
            <footer className="footer-home">
                <ul>
                    <li className="footer-details"><Link to="/login" className="header-link-login">Login</Link></li>
                    <li className="footer-details"><Link to="/login" className="header-link-login">Informações</Link></li>
                    <li className="footer-details"><Link to="/login" className="header-link-login">Contato</Link></li>
                </ul>
            </footer>
        </div>
    )
}