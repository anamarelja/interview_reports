import React, { useState, useEffect, useContext } from "react";
import "./user.scss";
import Login from "../../components/Login";
import Report from "../../components/Report";
import { candidateContext } from "../../App";
import { reportContext } from "../../App";
import { tokenContext } from "../../App";
import { Link } from "react-router-dom";

const User = (props) => {
  const { reports } = useContext(reportContext)
  const { id: matchId } = props.match.params;
  const { candidates } = useContext(candidateContext);

  const { token } = useContext(tokenContext);
  const user = candidates.find((e) => e.id == props.match.params.id);


  return (
    <div className="User">
      <header>
        <div className="wrapper">
          <div>
            <Link to="/" className="links">
              &#8592; Back to Home
            </Link>
            {token && (
              <Link to="/admin" className="links">
                Your Admin Panel
              </Link>
            )}
          </div>
          <Login />
        </div>
      </header>

      <div>
        {user && (
          <div className="user-card">
            <div className="user-info">
              <img src={user.avatar} alt="pic" />
              <div className="user-desc">
                <h3>{user.name}</h3>
                <div>
                  <p>Education: {user.education}</p>
                  <a href={`mailto: ${user.email}`}>
                    Email: {user.email.toLowerCase()}
                  </a>
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
                .filter((reports) => matchId == reports.candidateId)
                .map((e) => (
                  <Report reportInfo={e} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
