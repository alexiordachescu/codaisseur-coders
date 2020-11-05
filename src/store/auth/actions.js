import Axios from "axios";

export function userLoggedIn(token, userDetails) {
  return {
    type: "userLoggedIn",
    payload: { token, userDetails }, // import the dispatched data (sent from thunk) and send it to the reducer
  };
}

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    const response = await Axios.post(
      "https://codaisseur-coders-network.herokuapp.com/login", // Get JWT token from here
      {
        email: email,
        password: password,
      }
    );
    console.log("What is response?", response); // Check what I need to store -> I store the data now (jwt):
    const jwt = response.data;
    console.log("What is getState?", getState().loginPage.accessToken.jwt); // I retrieve the jwt string from here

    const check = await Axios.get(
      "https://codaisseur-coders-network.herokuapp.com/me", // If JWT is correct, retrieve the user profile!
      {
        headers: {
          Authorization: `Bearer ${getState().loginPage.accessToken.jwt}`,
        },
      }
    );
    console.log("What is check?", check); // Check what I need to store -> Ok, I store the data now (for the user details)
    const userProfile = check.data;

    dispatch(userLoggedIn(jwt, userProfile)); // dispatch jwt + userProfile to a new action creator
  };
}
