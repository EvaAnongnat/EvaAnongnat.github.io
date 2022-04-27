import React from "react";
import ProfilePic from '../../Images/profilepic001_resize.jpg';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <img className="profile-pic" src={ProfilePic} alt="profilepic" />
      <p className="profile-name"> Sarah Doely </p>
    </div>
  );
}

export default Profile;