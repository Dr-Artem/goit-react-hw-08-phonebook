export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

// const getIsLoggedIn = state => state.auth.isLoggedIn;
// const getUsername = state => state.auth.user.name;

// const authSelectors = {
//     getIsLoggedIn,
//     getUsername,
// };
// export default authSelectors;
