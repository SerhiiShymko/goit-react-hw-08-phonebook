const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
};

export default authSelectors;
