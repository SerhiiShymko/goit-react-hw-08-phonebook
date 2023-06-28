// import css from './App.module.css';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Toaster />
      {isRefreshing ? (
        <ProgressBar />
      ) : (
        <Suspense fallback={<ProgressBar />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={ContactsPage} redirectTo="/login" />
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute component={LoginPage} redirectTo="/contacts" />
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute component={RegisterPage} redirectTo="/" />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
