// import css from './App.module.css';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';

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

      {/* {isLoading ? (
        <ProgressBar />
      ) : ( */}
      <Suspense fallback={<ProgressBar />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      {/* )} */}
    </>
  );
};
