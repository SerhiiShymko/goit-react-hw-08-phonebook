import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => selectIsLoggedIn(state));

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

PrivateRoute.prototype = {
  children: propTypes.element,
  redirectTo: propTypes.string,
};

export default PrivateRoute;
