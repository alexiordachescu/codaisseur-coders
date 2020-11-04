import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Loading, PostsReady } from "../store/feed/actions";
import { checkLoading, getPosts } from "../store/feed/selectors";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const check = useSelector(checkLoading);

  async function fetchNext5Posts() {
    dispatch(Loading());

    const response = await axios.get(
      `${API_URL}/posts?offset=${posts.length}&limit=5`
    );

    const morePosts = response.data.rows;

    dispatch(PostsReady(morePosts));
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {posts.map((post) => {
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
        {check ? (
          <em>Loading...</em>
        ) : (
          <button onClick={fetchNext5Posts}>See more posts!</button>
        )}{" "}
      </h4>
    </div>
  );
}
