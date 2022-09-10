import ReactDOM from "react-dom/client";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthContext from "../../store/auth-context";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <div>
      <div class="ui blue inverted segment" style={{ margin: "0" }}>
        <div class="ui  secondary  menu">
          <Link to="/">{<a class="active item">Home</a>}</Link>
          <Link to="/">{<a class="item">Book Ticket</a>}</Link>
          <Link to="/about">{<a class="item">About Us</a>}</Link>
          <Link to="/find-train">{<a class="item">Search Train</a>}</Link>
          <Link to="/contact">{<a class="item">Contact Us</a>}</Link>
          <div class="right menu">
            {isLoggedIn && (
              <Link to="/profile">{<a class="ui item">Profile</a>}</Link>
            )}
            {!isLoggedIn && (
              <Link to="/signin">{<a class="ui item">Sign in</a>}</Link>
            )}
            {!isLoggedIn && (
              <Link to="/signup">{<a class="ui item">Sign up</a>}</Link>
            )}
            {isLoggedIn && (
              <div>
                <a class="ui item" onClick={logoutHandler}>
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
