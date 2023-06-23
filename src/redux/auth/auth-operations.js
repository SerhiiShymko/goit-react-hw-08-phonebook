// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

// const setToken = token => {
//   instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// export const register = async body => {
//   return await instance.post('/users/signup', body);
// };

// export const login = async body => {
//   const { data } = await instance.post('/auth/login', body);
//   if ('access_token' in data) setToken(data.access_token);
//   return data;
// };

// export const geCurrentUser = async () => {
//   const { data } = await instance('/users/current');
//   return data;
// };

// export const logoutUser = async () => {
//   await instance.post('auth/logout');
//   setToken('');
// };

// const authOperations = {
//   register,
//   login,
//   geCurrentUser,
//   logoutUser,
// };

// export default authOperations;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
