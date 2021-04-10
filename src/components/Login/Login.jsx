import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { tokenContext } from "../../App";

const Login = () => {
  const { token, setToken } = useContext(tokenContext);

  return (
    <div className="Login">
      {token ? (
        <Link to='/'
          className="loggingButton"
          onClick={() => {
            localStorage.removeItem("token");
            setToken('');
          }}
        >
          Logout
        </Link>
      ) : (
        <Link to="/login" className="loggingButton">
          Login
        </Link>
      )}
    </div>
  );
};

export default Login;
