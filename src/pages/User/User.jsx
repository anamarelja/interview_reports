import React, { useState, useEffect } from "react";
import "./user.scss";
import Login from "../../components/Login";
import Report from "../../components/Report";

import { Link } from "react-router-dom";

const User = (props) => {
  const [reports, setReports] = useState([]);

  const { id: matchId } = props.match.params;
  console.log(matchId);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((reports) => setReports(reports));
  }, []);
  
  console.log(reports);
  return (
    <div className="User">
      <header>
        <Link to="/">
          <button>Back</button>
        </Link>
        <Login />
      </header>

      <div className="user-info">
        <img src="" alt="pic" />

        <div className="user-desc">
          <h3>Name</h3>
          <h4>Education</h4>
          <h4>Email</h4>
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
      {reports.filter(report => matchId == report.candidateId).map(e =>(
        <Report reportInfo={e}/>
        ))}
      {/* <Modal /> */}
    </div>
  );
};

export default User;
