const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function loginSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "userLoggedIn": {
      return {
        accessToken: action.payload.token,
        me: action.payload.userDetails,
      };
    }

    default: {
      return state;
    }
  }
}
