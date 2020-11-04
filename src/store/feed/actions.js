export function Loading() {
  return {
    type: "feed/Loading",
  };
}

export function PostsReady(morePosts) {
  return { type: "feed/PostsReady", payload: morePosts };
}
