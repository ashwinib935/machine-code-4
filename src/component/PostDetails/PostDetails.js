import React from "react";
import Post from "../../component/Post/Post";
import { useForum } from "../../context/ForumProvider";
import { useState } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router";
function PostDetails() {
  const { forum, setForum } = useForum();
  const { postId } = useParams();
  const post = forum.find((post) => post.postId === postId);
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
        <Post key={post.postId} post={post} />
        <div>
          {post.comments?.map((post) => (
            <p>{post.comment}</p>
          ))}
        </div>
      </div>
      <div className="section sidebar-right-container">
        {/* <label htmlFor="">
          Sort By
          <select name="" id="" onChange={(e) => setSortType(e.target.value)}>
            <option value="latest">Latest Post</option>
            <option value="mostupvotes">Most Upvoted</option>
          </select>
        </label> */}
      </div>
    </div>
  );
}

export default PostDetails;
