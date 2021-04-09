import React, { useState, useEffect, useContext } from "react";
import "./user.scss";
import Login from "../../components/Login";
import Report from "../../components/Report";
import { candidateContext } from "../../App";

import { Link } from "react-router-dom";

const User = (props) => {
  const [reports, setReports] = useState([]);

  const { id: matchId } = props.match.params;
<<<<<<< HEAD
  const { candidates } = useContext(candidateContext);
=======
  const {candidates} = useContext(candidateContext);

>>>>>>> c4c410a585cb45e4fa6268a746654205e7b39ade
  const user = candidates.find((e) => e.id == props.match.params.id);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((reports) => setReports(reports));
  }, []);

  console.log(candidates.length)
console.log(candidates)
  return (
    <div className="User">
      <header>
        <Link to="/">
          <button>Back</button>
        </Link>
        <Login />
      </header>

      <div>
        {!candidates.lenght ? 
        (
          <div>
            <div className="user-info">
              <img src={user.avatar} alt="pic" />
              <div className="user-desc">
                <h3>Name: {user.name}</h3>
                <h4>Education: {user.education}</h4>
                <h4>Email: {user.email}</h4>
                <h4>Birth date: {user.birthday.slice(4,15)}</h4>
              </div>
            </div>

            <div className="report-list">
              <div className="report-header">
                <span>
                  <h4>Company</h4>
                </span>
                <span>
                  <h4>Interview Date</h4>
                </span>
                <span>
                  <h4>Status</h4>
                </span>
              </div>
            </div>

            {reports
              .filter((report) => matchId == report.candidateId)
              .map((e) => (
                <Report reportInfo={e} />
              ))}
          </div>
        ) 
        : 
       null
        }
      </div>
    </div>
  );
};

export default User;
