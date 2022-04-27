import React from 'react';
import './IconButton.css';

const FacebookButton = ({ children, title}) => {
    const loginWithFb = () => {
        window.open('https://www.facebook.com');
    }
    return <img className='fb-btn' src='./fb.svg' alt='facebook' onClick={loginWithFb}/>;
}

export default FacebookButton;