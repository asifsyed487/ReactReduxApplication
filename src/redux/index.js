import { combineReducers } from "redux";
import posts from "./postSlice";
const reducers = combineReducers({
  posts
});
export default reducers;
