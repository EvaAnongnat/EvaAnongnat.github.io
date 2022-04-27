import React from 'react'; 
//import PropTYPEs from "prop-TYPEs";
import "./Posts.css";

const Post = ({ id, activity, date, duration, kcal, distance, deletePost }) => {
  return (
    <main>
      <div className="main">
        <div className="post">
          <table>
            <thead>
              <tr>
                <th scope="col">TYPE</th>
                <th scope="col">DATE</th>
                <th scope="col">DURATION</th>
                <th scope="col">KCAL</th>
                <th scope="col">DISTANCE</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="TYPE">{activity}</td>
                <td data-label="DATE">{new Date(date).toLocaleDateString()}</td>
                <td data-label="DURATION">{duration}</td>
                <td data-label="KCAL">{kcal}</td>
                <td data-label="DISTANCE">{distance}</td>
                <td data-label="">
                  <button className="Post_delete" onClick={() => deletePost(id)}>
                  Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );};

//   Post.PropTYPEs = {
//     id: PropTYPEs.number.isRequired,
//     title: PropTYPEs.string.isRequired,
//     deletePost: PropTYPEs.func.isRequired,
//   };

  export default Post;