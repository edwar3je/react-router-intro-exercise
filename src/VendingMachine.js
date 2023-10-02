import React from 'react';
import { Link } from "react-router-dom"

const VendingMachine = () => {
    return (
        <div className="vending-machine">
            <img src="https://images.unsplash.com/photo-1625650484478-113df4bfc370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVuZGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"></img>
            <h1>Welcome to the Vending Machine!</h1>
            <h3>Select a snack!</h3>
            <div className="link-container">
                <Link className="link-click" to="/chips">Chips</Link>
                <Link className="link-click" to="/soda">Soda</Link>
                <Link className="link-click" to="/candybar">Candy Bar</Link>
            </div>
        </div>
    );
};

export default VendingMachine;