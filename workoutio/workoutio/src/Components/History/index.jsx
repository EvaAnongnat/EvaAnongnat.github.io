import React, {useState, useEffect} from "react";
import Post from "../Posts/Posts";
import { useUserRecords } from "../Hooks/Hooks";
// import {removeRecords } from '../Api/Api';
import axios from "axios";
import "./History.css";

const History = ({ posts, refreshRecords }) => {
  //TODO: make delete post
    const deletePost = async (recordId) => {
      await axios.delete(`http://localhost:4000/users/me/records/${recordId}`);
      refreshRecords();
      // const updatePosts = posts.filter((post) => post.id !== id);
      // setPosts(updatePosts);
    };
  
  return (
    <main>
      <h2 className="title">Recent Activities</h2>
      <div className="history">
        {posts.map((post, index) => (
          <Post
            key={index}
            id={post._id}
            activity={post.activity}
            date={post.date}
            duration={post.duration}
            kcal={post.kcal}
            distance={post.distance}
            deletePost={deletePost}
          />
        ))}
      </div>
    </main>
  );
};

export default History;
