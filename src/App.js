import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoginPage from "./pages/LoginPage";
import NewReport from "./pages/NewReport";
import User from "./pages/User";

export const candidateContext = React.createContext({});
export const tokenContext = React.createContext({});

function App() {
  const [candidates, setCandidates] = useState([]);
  const [token, setToken] = useState('');

  const { Provider: CandidatesProvider } = candidateContext;
  const { Provider : TokenProvider }= tokenContext;


  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) =>
        data.map((e, i) => ({
          ...e,
          avatar: `https://loremflickr.com/320/240/headshot?random=${i}`,
        }))
      )
      .then((data) => setCandidates(data));
  }, []);

  return (
    <div className="App">
      <Switch>
        <CandidatesProvider value={{candidates, setCandidates}}>
          <TokenProvider value={{token, setToken}}>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/login" component={LoginPage} />
          <Route path="/user:id" component={User} />
          <Route path="/admin/newreport" component={NewReport} />
          {/* <Redirect from="" to="/"></Redirect> */}
          </TokenProvider>
        </CandidatesProvider>
      </Switch>
    </div>
  );
}

export default App;
