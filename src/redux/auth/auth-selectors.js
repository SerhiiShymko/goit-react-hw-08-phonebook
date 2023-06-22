export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;

// const authSelectors = {
//   selectIsLoggedIn,
//   selectUserName,
// };

// export default authSelectors;
