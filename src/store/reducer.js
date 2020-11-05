import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";
import loginPageSliceReducer from "./auth/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
  loginPage: loginPageSliceReducer,
});

export default reducer;
