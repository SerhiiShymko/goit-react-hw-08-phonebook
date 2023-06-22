import css from './UserMenu.module.css';
import { selectUserName } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const name = useSelector(selectUserName);

  return (
    <div className={css.container}>
      <p>
        Welcome bro, <span>{name}</span>!
      </p>
      <button className={css.button} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
