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
      <h1>Welcome to PhoneBook, {user.name}!</h1>
      <h2>
        To create your contact, click <Link to="contacts">here</Link>
      </h2>
    </div>
  ) : (
    <div>
      <div className={css.wrapper}>Welcome to PhoneBook!</div>
      <h2>
        First time there? <Link to="register">Sign Up</Link>
      </h2>

      <h2>
        Already have account? <Link to="login">Sign in</Link>
      </h2>
      <img src={bg} alt="Phone book" />
    </div>
  );
};

export default HomePage;
