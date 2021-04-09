import React, { useState, useEffect, useContext } from "react";
import "./user.scss";
import Login from "../../components/Login";
import Report from "../../components/Report";
import { candidateContext } from "../../App";

import { Link } from "react-router-dom";

const User = (props) => {
  const [reports, setReports] = useState([]);

  const { id: matchId } = props.match.params;

  const { candidates } = useContext(candidateContext);
  const user = candidates.find((e) => e.id == props.match.params.id);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((reports) => setReports(reports));
  }, []);

  return (
    <div className="User">
      <header>
        <div className="wrapper">
          <Link to="/" className="links">
             &#8592; Back to Home
          </Link>
          <Login />
        </div>
      </header>

      <div>
        {!candidates.lenght ? (
          <div className="user-card">
            <div className="user-info">
              <img src={user.avatar} alt="pic" />
              <div className="user-desc">
                <h3>{user.name}</h3>
                <div>
                <p>Education: {user.education}</p>
                <a href = {`mailto: ${user.email}`}>Email: {user.email.toLowerCase()}</a>
                <p>Birth date: {user.birthday.slice(4, 15)}</p>
                </div>
                
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

            <div className="final-reports">
            {reports
              .filter((report) => matchId == report.candidateId)
              .map((e) => (
                <Report reportInfo={e} />
              ))}
            </div>
            
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default User;
