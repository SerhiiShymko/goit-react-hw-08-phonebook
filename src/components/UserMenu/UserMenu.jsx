import css from './UserMenu.module.css';
import { selectUserName } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <p className={css.userMenu__text}>
        Welcome, <span>{user}</span>!
      </p>
      <Link
        className={css.link}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Link>
    </div>
  );
};

export default UserMenu;
