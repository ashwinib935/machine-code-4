import React from "react";
import Header from "../../component/Header/Header";
import "./Home.css";
import Post from "../../component/Post/Post";
import { useForum } from "../../context/ForumProvider";
import { useState } from "react";

function Home() {
  const { forum, setForum } = useForum();
  const [sortType, setSortType] = useState("latest");
  if (sortType === "latest") {
    const newForum = forum.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setForum(newForum);
  } else if (sortType === "mostupvotes") {
    const newForum = forum.sort((a, b) => b.upvotes - a.upvotes);
    console.log("newForum", newForum);
    setForum(newForum);
  }
  return (
    <div className="home-container">
      <div className="section sidebar-left-container">
        <Header />
        <div className="userdetails">
          <div className="user-avatar cursor-pointer select-none">
            <img src="" alt="" className="h-8 w-8 rounded-full" />
          </div>
          <div>
            <p>Tanay Pratap</p>
            <p>@tanaypratap</p>
          </div>
        </div>
      </div>
      <div className="section middle-container">
        <h2>Latest Post</h2>
        {forum.map((post) => (
          <Post key={post.postId} post={post} />
        ))}
      </div>
      <div className="section sidebar-right-container">
        <label htmlFor="">
          Sort By
          <select name="" id="" onChange={(e) => setSortType(e.target.value)}>
            <option value="latest">Latest Post</option>
            <option value="mostupvotes">Most Upvoted</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Home;
