const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "posts/Loading":
      return { loading: true, post: null, comments: [] };

    case "posts/Ready": {
      return {
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }

    default:
      return state;
  }
};
