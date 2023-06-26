import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { ProgressBar } from 'react-loader-spinner';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<ProgressBar />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
