import React, { useEffect, useState } from "react";
import "../css/feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase";
import Flipmove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Flipmove>
        {posts.map((post) => {
          return (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          );
        })}
      </Flipmove>
      {/* <Post
        image="http://4.bp.blogspot.com/-uhjF2kC3tFc/U_r3myvwzHI/AAAAAAAACiw/tPQ2XOXFYKY/s1600/Circles-3.gif"

        image="https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif"
        image="https://i.pinimg.com/originals/81/28/a4/8128a49d5f7b10b38d9aa6dd17544198.gif"
      /> */}
    </div>
  );
};

export default Feed;
