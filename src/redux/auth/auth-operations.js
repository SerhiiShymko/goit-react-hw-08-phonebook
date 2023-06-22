import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const register = async body => {
  return await instance.post('/users', body);
};

export const login = async body => {
  const { data } = await instance.post('/auth/login', body);
  if ('access_token' in data) setToken(data.access_token);
  return data;
};

export const getProfile = async () => {
  const { data } = await instance('/auth/profile');
  return data;
};