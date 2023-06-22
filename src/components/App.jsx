// import css from './App.module.css';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={ContactsPage} to="/" />
        <Route path="/login" element={LoginPage} to="/" />
        <Route path="/register" element={RegisterPage} to="/" />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
