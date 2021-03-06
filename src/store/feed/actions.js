import axios from "axios";
import { API_URL } from "../config";

export function Loading() {
  return {
    type: "feed/Loading",
  };
}

export function PostsReady(morePosts) {
  return { type: "feed/PostsReady", payload: morePosts };
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(Loading());

  const offset = getState().feed.posts.length;
  const response = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);

  const morePosts = response.data.rows;

  dispatch(PostsReady(morePosts));
}
