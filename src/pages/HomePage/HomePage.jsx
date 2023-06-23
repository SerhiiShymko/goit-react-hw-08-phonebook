import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

// import { AppBar } from 'components/AppBar/AppBar';

// import AppBar from 'components/AppBar/AppBar';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <div>
      {/* <div>Welcome to PhoneBook, {user.name}!</div> */}
      <div>Welcome to PhoneBook, user!</div>
      <h2>
        To create your contact, click <Link to="contacts">here</Link>
      </h2>
    </div>
  ) : (
    <div>
      <div>Welcome to PhoneBook!</div>
      <h2>
        First time there? <Link to="register">Sign Up</Link>
      </h2>

      <h2>
        Already have account? <Link to="login">Sign in</Link>
      </h2>
    </div>
  );
};

export default HomePage;
