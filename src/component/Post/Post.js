import React from "react";

import "./Post.css";
import { useForum } from "../../context/ForumProvider";
import { useNavigate } from "react-router";
function Post({ post }) {
  const { forum, setForum, handleBookmark, handleupvote, handledownvote } =
    useForum();
  const navigate = useNavigate();
  return (
    <div className="container-postcard">
      <div className="postcard grid grid-cols-[2rem_43vw] gap-2 text-sm border-b px-4 py-3 cursor-pointer">
        <div>arrow</div>
        <div className="post-data">
          <div className="post-user">
            <div className="cursor-pointer select-none">
              <img src={post.picUrl} alt="" className="userImage" />
            </div>
            <div>
              <p>
                Posted by <span>@{post.username}</span>
              </p>
              <p>{post.createdAt}</p>
            </div>
          </div>
          <div>
            <h3>{post.post}</h3>
            <div className="tag-div">
              {post.tags.map((tag) => (
                <span className="tag">{tag}</span>
              ))}
            </div>
            <p>{post.postDescription}</p>
          </div>
          <div className="btn-action">
            <button
              onClick={() => handleupvote(post.postId)}
              style={{
                backgroundColor:
                  post.upvotes > post.downvotes ? "green" : "red",
              }}
            >
              Upvote
            </button>
            ({post.upvotes})
            <button
              onClick={() => handledownvote(post.postId)}
              style={{
                backgroundColor:
                  post.upvotes < post.downvotes ? "green" : "red",
              }}
            >
              Downvote
            </button>
            ({post.downvotes})
            <div>
              <p>Diff({post.upvotes - post.downvotes})</p>
            </div>
            <button onClick={() => navigate(`/postDetails/${post.postId}`)}>
              <i class="fa fa-comment"></i>
            </button>
            <button>share</button>
            <button
              onClick={() => handleBookmark(post.postId)}
              style={{ backgroundColor: post.isBookmarked ? "blue" : "red" }}
            >
              bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
