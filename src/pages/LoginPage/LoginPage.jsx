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
        setToken(data);
      })
      .catch((g) => {
        setError(true);
      });
  };

  return (
    <div className={error ? "errorPage" : "LoginPage"}>
      <Link to="/">
        {" "}
        <button className="btn-home">BACK TO HOME</button>
      </Link>

      <div className="Form">
        <label for="usernmae">Username: </label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label for="password">Password: </label>
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button onClick={onUserLogin}>LoginPage</button>
        {token && <Redirect to="/admin" />}

        {error ? (
          <p>Incorrect username or password. Please try again.</p>
        ) : null}
      </div>
    </div>
  );
};

export default LoginPage;
