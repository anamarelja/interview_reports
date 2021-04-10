import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.scss";
import { tokenContext } from "../../App";
import OurFetch from "../../OurFetch";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(tokenContext);
  const [error, setError] = useState("");

  const onUserLogin = () => {
    OurFetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify({
        email: username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        setError(false);
        localStorage.setItem('token', data.accessToken);
        setToken(localStorage.getItem('token'));
      })
      .catch((g) => {
        setError(true);
      });
  };

  return (
    <div className={error ? "errorPage" : "LoginPage"}>
      <header>
        <div className="wrapper">
          <Link to="/" className="links">
             &#8592; Back to Home
          </Link>
        </div>
      </header>

      <div className="Form">
        <p className="welcomeMessage">Sign in to Account</p>
        <div className="inputs">
        <label for="usernmae">Username: </label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />

        <label for="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        {error ? (
          <p className="errorMessage">Incorrect username or password. Please try again.</p>
        ) : null}
        </div>

        <div>
        <button onClick={onUserLogin} className="loggingButton">Sign in</button>
        </div>
        {token && <Redirect to="/admin" />}

        
      </div>
    </div>
  );
};

export default LoginPage;
