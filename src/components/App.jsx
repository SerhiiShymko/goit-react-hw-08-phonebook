// import css from './App.module.css';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { ProgressBar } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
// import { useSelector } from 'react-redux';
// import { getToken } from 'redux/auth/auth-selectors';
// import { setToken } from 'redux/auth/auth-operations';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  // const token = useSelector(getToken);

  // const { isLoading } = setToken(undefined, {
  //   skip: !token,
  // });

  return (
    <>
      <Toaster />
      <AppBar />
      {/* {isLoading ? (
        <ProgressBar />
      ) : ( */}
      <Suspense fallback={<ProgressBar />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={ContactsPage} redirectTo="/" />
          <Route path="/login" element={LoginPage} redirectTo="/" />
          <Route path="/register" element={RegisterPage} redirectTo="/" />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {/* )} */}
    </>
  );
};
