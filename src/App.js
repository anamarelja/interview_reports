import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoginPage from "./pages/LoginPage";
import NewReport from "./pages/NewReport";
import User from "./pages/User";

export const candidateContext = React.createContext({});
export const tokenContext = React.createContext({});
export const reportContext = React.createContext({});
export const validContext = React.createContext({});

function App() {
  const [candidates, setCandidates] = useState([]);
<<<<<<< HEAD

=======
>>>>>>> 40c4ffc74cf905e0b1cc4cf435881ef45d7b8937
  const [reports, setReports] = useState([]);
  const [validReports, setValidReports] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const { Provider: CandidatesProvider } = candidateContext;
  const { Provider: TokenProvider } = tokenContext;
  const { Provider: ReportProvider } = reportContext;
  const { Provider: ValidProvider } = validContext;

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

  useEffect(() => {
    if (!validReports) {
      fetch("http://localhost:3333/api/reports")
        .then((res) => res.json())
        .then((reports) => setReports(reports));
      setValidReports(true);
    }
  }, [validReports]);

  return (
    <div className="App">
      <Switch>
        <CandidatesProvider value={{ candidates, setCandidates }}>
          <TokenProvider value={{ token, setToken }}>
            <ReportProvider value={{ reports, setReports }}>
              <ValidProvider value={{ validReports, setValidReports }}>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={Admin} />
                <Route path="/login" component={LoginPage} />
                <Route path="/user:id" component={User} />
                <Route path="/admin/newreport" component={NewReport} />
              </ValidProvider>
            </ReportProvider>
          </TokenProvider>
        </CandidatesProvider>
      </Switch>
    </div>
  );
}

export default App;
