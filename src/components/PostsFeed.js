import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchNext5Posts } from "../store/feed/actions";
import { checkLoading, getPosts } from "../store/feed/selectors";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const check = useSelector(checkLoading);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {posts.map((post) => {
        return (
          <div>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
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
          <button onClick={() => dispatch(fetchNext5Posts)}>
            See more posts!
          </button>
        )}{" "}
      </h4>
    </div>
  );
}
