const { createSlice } = require('@reduxjs/toolkit');
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        userApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.isLoggedIn = true;
          state.user = payload.user;
        }
      )
      .addMatcher(
        userApi.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.isLoggedIn = true;
          state.user = payload.user;
        }
      )
      .addMatcher(userApi.endpoints.logOut.matchFulfilled, (state, _) => {
        state.token = null;
        state.isLoggedIn = false;
        state.user = null;
      })
      .addMatcher(
        userApi.endpoints.getCurrent.matchFulfilled,
        (state, { payload }) => {
          state.user.name = payload.name;
          state.user.email = payload.email;
          state.isLoggedIn = true;
        }
      );
  },
});

export default authSlice.reducer;
