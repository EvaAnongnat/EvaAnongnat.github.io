import React from "react";
import "./Button.css";

const ActivityButton = ({ children, onClick}) => {
  return (
    <button className="custom-btn" type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default ActivityButton;
