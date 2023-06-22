import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.container}>
      <p>mango@mail.com</p>
      <button className={css.button} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
