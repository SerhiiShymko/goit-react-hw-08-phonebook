import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import css from './AppBar.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';

export const AppBar = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = useSelector(state => selectIsLoggedIn(state));

  return (
    <div>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};
