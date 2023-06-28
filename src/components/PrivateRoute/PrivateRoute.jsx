// import propTypes from 'prop-types';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

// function PrivateRoute({ children, redirectTo = '/' }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? children : <Navigate to={redirectTo} />;
// }

// PrivateRoute.prototype = {
//   children: propTypes.element,
//   redirectTo: propTypes.string,
// };

// export default PrivateRoute;

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
