import css from './UserMenu.module.css';
import { selectUserName } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const user = useSelector(selectUserName);

  return (
    <div className={css.UserMenu}>
      <p className={css.userMenu__text}>
        Welcome, <span>{user.name}</span>!
      </p>
      <button className={css.UserMenu__button} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
