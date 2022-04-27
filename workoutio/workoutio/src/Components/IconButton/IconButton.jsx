import React from 'react';
import './IconButton.css';

const IconButton = ({ children, title, src, alt, onClick }) => {
  // const IconClick = () => {
  //   window.open("https://www.apple.com");
  // };
  return (
    <div className="icon-div">
      <img className="icon-btn" src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

export default IconButton;