import React from 'react';
import './IconButton.css';

const GoogleButton = ({ children, title}) => {
    const loginWithGoogle = () => {
        window.open('https://www.google.com');
    }
    return <img className='google-btn' src='./google.svg' alt='google' onClick={loginWithGoogle}/>;
}

export default GoogleButton;
