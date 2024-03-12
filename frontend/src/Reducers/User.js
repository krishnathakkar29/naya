import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    //login
    .addCase("loginRequest", (state, action) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("loginSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    })
    .addCase("loginFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.isAuthenticated = false;
    })

    //register
    .addCase("registerRequest", (state, action) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("registerSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    })
    .addCase("registerFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.isAuthenticated = false;
    })

    //load user
    .addCase("loadUserRequest", (state, action) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("loadUserSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    })
    .addCase("loadUserFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.isAuthenticated = false;
    });
});

export const postOfFollowingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('postofFollowingRequest', (state) => {
      state.loading = true;
    })
    .addCase('postofFollowingSuccess', (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase('postofFollowingFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});

export default userReducer;
