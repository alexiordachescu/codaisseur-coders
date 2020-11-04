import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });

    const response = await axios.get(
      `${API_URL}/posts?offset=${data.posts.length}&limit=5`
    );

    const morePosts = response.data.rows;

    setData({
      loading: false,
      posts: [...data.posts, ...morePosts],
    });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  console.log("What is data now?", data.posts);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {data.posts.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
            {post.tags.map((tag) => {
              return <span>Tags: {tag.tag}</span>;
            })}
          </div>
        );
      })}

      <h4>
        {data.loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={fetchNext5Posts}>See more posts!</button>
        )}{" "}
      </h4>
    </div>
  );
}
