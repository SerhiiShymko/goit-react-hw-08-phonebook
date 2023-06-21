import axios from 'axios';

const url = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const apiContacts = async () => {
  const { data } = await url.get('/');
   return data;
};
