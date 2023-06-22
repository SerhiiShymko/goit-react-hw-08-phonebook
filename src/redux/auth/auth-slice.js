import { getProfile, login, register, setToken } from './auth-operations';


const { createSlice } = require('@reduxjs/toolkit');
// import authOperations from './auth-operations';

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
        login.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.isLoggedIn = true;
          state.user = payload.user;
        }
      )
      .addMatcher(
        register.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.isLoggedIn = true;
          state.user = payload.user;
        }
      )
      .addMatcher(setToken.endpoints.logOut.matchFulfilled, (state, _) => {
        state.token = null;
        state.isLoggedIn = false;
        state.user = null;
      })
      .addMatcher(
        getProfile.endpoints.getCurrent.matchFulfilled,
        (state, { payload }) => {
          state.user.name = payload.name;
          state.user.email = payload.email;
          state.isLoggedIn = true;
        }
      );
  },
});

export default authSlice.reducer;
