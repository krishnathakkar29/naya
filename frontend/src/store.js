import { configureStore } from "@reduxjs/toolkit";
import userReducer, { postOfFollowingReducer } from "./Reducers/User";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer
  },
});

export default store;
