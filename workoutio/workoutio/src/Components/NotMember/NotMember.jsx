import React from 'react';
import { Link } from "react-router-dom";


import './NotMember.css';

const NotMember = ({ isLoggedIn = false, signUpPath= '/signup' }) => {

  if(isLoggedIn) return null;
  
  return (<div className='not-member'>
            Not a member?
            <span className='bold signup'>
                <Link to={signUpPath} className='signup pointer'>Sign Up</Link>
            </span>
          </div>);
}

export default NotMember;