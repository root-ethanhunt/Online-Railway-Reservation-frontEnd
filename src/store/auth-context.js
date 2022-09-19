import React, { useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  userId: "",
  userIdData: (userId) => {},
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  // role: "USER",
});

const calculationRemainingTime = (expirationTime) => {
  //  const currentTime =
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculationRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return storedToken;
};

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const initialAccess = localStorage.getItem("role");
  const [role, setRole] = useState("USER");
  const [userId, setUserId] = useState({});

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    // localStorage.setItem("role", role);
    // const value = userId.roles;
    // console.log(value);

    const remainingTime = 3600 * 1000;
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const userHandler = (userId) => {
    setUserId(userId);
  };

  const contextValue = {
    token: token,
    userId: userId,
    userIdData: userHandler,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    // role: userId.roles,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
