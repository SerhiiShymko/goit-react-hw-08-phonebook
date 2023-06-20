import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {}
});

const logIn createAsyncThunk('auth/login', async credentials => {
    try {
        const{data}= await axios.post('users/login', credentials)
        return data;
    } catch (error) {}
})

const logOut createAsyncThunk('auth/login', async credentials => {
    try {
        await axios.post('users/logout', credentials)
        return data;
    } catch (error) {}
})

