import React from 'react';
import './style.css'

const Button = ({ text, top }) => {
    return (
        <div className={`mt-${top}`}>
            <button className="text-xl btn react">{text}</button>
        </div>
    );
};

export default Button;