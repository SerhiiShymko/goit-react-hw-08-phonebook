import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/auth-selectors';
import bg from '../../image/bg/bg.jpg';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);

  return isLoggedIn ? (
    <div className={css.wrapper}>
      <h1>Welcome to PhoneBook, {user}!</h1>
      <h2>
        To create your contact, click <Link to="contacts">here</Link>
      </h2>
    </div>
  ) : (
    <div className={css.bg}>
      <img src={bg} alt="Phone book" className={css.backgroundImage} />
      <div className={css.wrapper}>
        <h1>Welcome to PhoneBook!</h1>
        <h2>
          First time there?
          <Link to="register" className={css.link}>
            Sign Up
          </Link>
        </h2>

        <h2>
          Already have account?
          <Link to="login" className={css.link}>
            Sign in
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
