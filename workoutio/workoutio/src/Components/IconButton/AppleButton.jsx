import React from 'react';
import './IconButton.css';

const AppleButton = ({ children, title}) => {
    const loginWithApple = () => {
        window.open('https://www.apple.com');
    }
    return <img className='apple-btn' src='./apple.svg' alt='apple' onClick={loginWithApple}/>;
}

export default AppleButton;