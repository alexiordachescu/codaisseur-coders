import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import ReactMarkdown from "react-markdown";
import { selectPostAndComments } from "../store/postPage/selectors";
import moment from "moment";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postsAndComments = useSelector(selectPostAndComments);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {!postsAndComments ? (
        <p>Loading</p>
      ) : (
        <>
          <h1>{postsAndComments.post.title}</h1>
          <p>
            By <strong>{postsAndComments.post.developer.name}</strong> /{" "}
            {moment(postsAndComments.post.createdAt).format("DD-MM-YYYY")}{" "}
            <span>
              {postsAndComments.post.tags.map((tag) => {
                return (
                  <React.Fragment key={tag.id}>
                    <span>{tag.tag}</span>{" "}
                  </React.Fragment>
                );
              })}
            </span>
          </p>

          <ReactMarkdown source={postsAndComments.post.content} />

          <h2>Comments</h2>
          {postsAndComments.comments.rows.length === 0 ? (
            <p>Sorry, no comments yet!</p>
          ) : (
            postsAndComments.comments.rows.map((comment) => {
              return (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                  <p>
                    By <strong>{comment.developer.name}</strong> &bull;{" "}
                    {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                  </p>
                </div>
              );
            })
          )}
        </>
      )}
    </div>
  );
}
