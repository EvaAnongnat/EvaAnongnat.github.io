import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import InputActivity from "../Components/Input/InputActivity";
import Profile from "../Components/Profile/Profile";
import History from "../Components/History/";
import Footer from "../Components/Footer/Footer";
import "../App.css";

import { useUserRecords } from "../Components/Hooks/Hooks";

const AddActivity = () => {
  const [posts, setPosts, refreshRecords] = useUserRecords();

  return (
    <main>
      <NavBar />
      <Profile />
      <InputActivity refreshRecords={refreshRecords} />
      <History posts={posts} refreshRecords={refreshRecords} />
      <Footer />
    </main>
  );
};

export default AddActivity;
