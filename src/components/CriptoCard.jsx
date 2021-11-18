import React from 'react';

export default function CriptoCard({ name, symbol, price, img }) {
    return (
        <div className="selection-cripto">
            <img src={img} alt={name} className="img-criptos" />
            <h4>{name}</h4>
            <span className="symbol-criptos">{symbol}</span>
            <span className="price-criptos">{price}</span>
        </div>
    )
}