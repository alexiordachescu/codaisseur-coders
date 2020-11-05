import Axios from "axios";

export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return function thunk(dispatch, getState) {
    Axios.post("https://codaisseur-coders-network.herokuapp.com/login", {
      email: email,
      password: password,
    });

    console.log(
      "TODO: make login request, get an access token",
      email,
      password
    );
  };
}
