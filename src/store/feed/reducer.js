const initialState = {
  loading: true,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "feed/Loading": {
      return { ...state, loading: true };
    }
    case "feed/PostsReady": {
      return { loading: false, posts: [...state.posts, ...action.payload] };
    }
    default: {
      return state;
    }
  }
}
