/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata
import "./components/SearchBar/SearchBarContainer.js";
import SearchBar from "./components/SearchBar/SearchBarContainer.js";
import PostsPage from "./components/PostsContainer/PostsPage.js";
import dummydata from "./dummy-data.js";

const App = () => {
  const [data] = useState(dummydata);
  // set up state for the dummy data and pass to your PostsPage
  return (
    <div className="App">
      <SearchBar />
      <PostsPage postsData={data} />
    </div>
  );
};

export default App;
