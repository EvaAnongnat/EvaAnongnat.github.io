import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import ImageTitle from '../Components/ImageTitle/ImageTitle';
import InputEmail from '../Components/Input/InputEmail';
import InputPass from '../Components/Input/InputPass';
import NotMember from '../Components/NotMember/NotMember'
import GoogleButton from '../Components/IconButton/GoogleButton';
import FacebookButton from '../Components/IconButton/FacebookButton';
import AppleButton from '../Components/IconButton/AppleButton';
import Button from '../Components/Button/Button';

import '../App.css';

const Login = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  useEffect(() => {
    if (email.length > 0) {
      setIsInvalid(!validateEmail(email));
    } else {
      setIsInvalid(false);
    }
  }, [email]);

  return (
    <main>
      <div className="container">
        <NavBar />
        <ImageTitle imgSrc="./workoutio.png" alt="Image Title" />
        <InputEmail
          id="email"
          type="text"
          name="email"
          placeholder="johndoe@lorem.com"
          value={email}
          isInvalid={isInvalid}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputPass
          id="password"
          type="text"
          name="password"
          placeholder="*******"
        />
        <NotMember onSignUpClick={() => alert('sign up')}/>
        <GoogleButton />
        <FacebookButton />
        <AppleButton />
        <Button>Login</Button>
        <Button>Sign in with Apple</Button>
      </div>
    </main>
  );
};

export default Login;
