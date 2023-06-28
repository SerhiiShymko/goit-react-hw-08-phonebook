import css from './UserMenu.module.css';
import { selectUserName } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.UserMenu}>
      <p className={css.userMenu__text}>
        Welcome, <span>{user}</span>!
      </p>
      <button
        className={css.UserMenu__button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
