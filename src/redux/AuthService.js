import store from "./store";

const isLoggedIn = () => {
  const storeData = store.getState();
  return storeData && storeData.login && storeData.login.isLoggedIn;
};

const getDisplayName = () => {
  const storeData = store.getState();
  return (
    storeData &&
    storeData.login &&
    storeData.login.loginData &&
    storeData.login.loginData.data.username
  );
};
const getUserID = () => {
  const storeData = store.getState();
  return (
    storeData &&
    storeData.login &&
    storeData.login.loginData &&
    storeData.login.loginData.data.id
  );
};

const getAccessToken = () => {
  const storeData = store.getState();
  return (
    storeData &&
    storeData.login &&
    storeData.login.loginData &&
    storeData.login.loginData.token
  );
};

export default { isLoggedIn, getDisplayName, getAccessToken, getUserID };
