import css from './UserMenu.module.css';
import { selectUserName } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const name = useSelector(selectUserName);

  return (
    <div className={css.UserMenu}>
      <p className={css.userMenu__text}>
        Welcome bro, <span>{name}</span>!
      </p>
      <button className={css.UserMenu__button} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
