//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  // console.log("postPage", props.postsData);
  return (
    <div className="posts-container-wrapper">
      {props.postsData.map(post => (
        // console.log('mapDATA', post.timestamp)
        <Post post={post} key={post.timestamp} />
      ))}
    </div>
  );
};

export default PostsPage;
