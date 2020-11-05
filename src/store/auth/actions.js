import Axios from "axios";

export function userLoggedIn(token, userProfile) {
  return {
    type: "userLoggedIn",
    payload: { token, userProfile },
  };
}

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    try {
      const response = await Axios.post(
        "https://codaisseur-coders-network.herokuapp.com/login", // Get JWT token from here
        {
          email: email,
          password: password,
        }
      );
      const { jwt } = response.data;
      console.log("what is jwt?", jwt);

      const userProfile = await loginValidate(jwt); // Call the login validator!
      dispatch(userLoggedIn(jwt, userProfile));
    } catch (e) {
      console.log(e);
    }
  };
}

const loginValidate = async (token) => {
  // retrieve the user info + check the token
  console.log("I got here");
  try {
    const response = await Axios.get(
      "https://codaisseur-coders-network.herokuapp.com/me", // If JWT is correct, retrieve the user profile!
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("What is?", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
