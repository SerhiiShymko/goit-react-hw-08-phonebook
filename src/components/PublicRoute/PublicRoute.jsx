// import propTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

// function PublicRoute({ children, restricted = false, redirectTo = '/' }) {
//   const isLoggedIn = useSelector(state => selectIsLoggedIn(state));
//   const shouldRedirect = isLoggedIn && restricted;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : children;
// }

// PublicRoute.prototype = {
//   children: propTypes.element,
//   restricted: propTypes.bool,
//   redirectTo: propTypes.string,
// };

// export default PublicRoute;


import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default PublicRoute;