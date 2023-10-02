import React from 'react';
import { Link } from "react-router-dom";
import './Soda.css';

const Soda = () => {
    return (
        <div className="soda-container">
            <img src="https://www.themeathousemarket.com/cdn/shop/products/grocery-coca-cola-classic-canned-coke-products-12-oz-can-14052198088757_1024x1024.png?v=1611222385"></img>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Soda;