export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;

// const authSelectors = {
//   selectIsLoggedIn,
//   selectUserName,
// };

// export default authSelectors;
