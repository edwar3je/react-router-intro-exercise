import React from 'react';
import { Link } from "react-router-dom";
import './Chips.css';

const Chips = () => {
    return (
        <div className="chips-container">
            <img src="https://m.media-amazon.com/images/I/813axPlVxBL.jpg"></img>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Chips;