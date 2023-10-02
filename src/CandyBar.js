import React from 'react';
import { Link } from 'react-router-dom';
import './CandyBar.css';

const CandyBar = () => {
    return (
        <div className="candy-bar-container">
            <img src="https://t3.ftcdn.net/jpg/03/01/55/40/360_F_301554091_eK9O1O6WtMlDnwkGM3mswMlcGC9ZoXrI.jpg"></img>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default CandyBar;