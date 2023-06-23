// import authOperations from './auth-operations';

// const { createSlice } = require('@reduxjs/toolkit');

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addMatcher(
//         authOperations.endpoints.login.matchFulfilled,
//         (state, { payload }) => {
//           state.token = payload.token;
//           state.isLoggedIn = true;
//           state.user = payload.user;
//         }
//       )
//       .addMatcher(
//         authOperations.endpoints.register.matchFulfilled,
//         (state, { payload }) => {
//           state.token = payload.token;
//           state.isLoggedIn = true;
//           state.user = payload.user;
//         }
//       )
//       .addMatcher(
//         authOperations.endpoints.logOut.matchFulfilled,
//         (state, _) => {
//           state.token = null;
//           state.isLoggedIn = false;
//           state.user = null;
//         }
//       )
//       .addMatcher(
//         authOperations.endpoints.getCurrent.matchFulfilled,
//         (state, { payload }) => {
//           state.user.name = payload.name;
//           state.user.email = payload.email;
//           state.isLoggedIn = true;
//         }
//       );
//   },
// });

// export const persisteAuthReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const persisteAuthReducer = authSlice.reducer;
