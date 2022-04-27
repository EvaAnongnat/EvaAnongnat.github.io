import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Post from "../Components/Posts/Posts";
import Profile from "../Components/Profile/Profile";
import History from "../Components/History"
import Footer from "../Components/Footer/Footer";

import "../App.css";

import { useUserRecords } from "../Components/Hooks/Hooks";

const ActivityList = (props) => {
  const [posts] = useUserRecords();

  return (
    <main>
      <NavBar />
      <Profile />
      <History posts={posts} />
      <Footer />
    </main>
  );
};

export default ActivityList;
