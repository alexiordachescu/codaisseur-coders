import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showLoggedInUser, checkLogin } from "../store/auth/selectors";

export default function Toolbar() {
  const showName = useSelector(showLoggedInUser);

  return (
    <div>
      {showName === null ? (
        <Link to={`/login`}>
          <h2>Please login to see more contents!</h2>
        </Link>
      ) : (
        <h2>Welcome, {showName.name}</h2>
      )}
    </div>
  );
}
