import { Link } from 'react-router-dom';
import css from '../AppBar/AppBar.module.css';

const AuthNav = () => (
  <div>
    <Link to="/register" className={css.link}>
      Register
    </Link>
    <Link to="/login" className={css.link}>
      Log in
    </Link>
  </div>
);

export default AuthNav;
