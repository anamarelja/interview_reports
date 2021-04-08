
import React, { useState,useEffect,useContext } from "react";
import "./user.scss";
import Login from "../../components/Login";
import Report from "../../components/Report";
import {candidateContext} from "../../App";   

import { Link } from "react-router-dom";
import { computeHeadingLevel } from "@testing-library/dom";

const User = (props) => {

  const [reports, setReports] = useState([]);

  const { id: matchId } = props.match.params;
  console.log(matchId);


  const candidates = useContext(candidateContext);

const user = candidates.find ((e) => e.id==props.match.params.id);



  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((reports) => setReports(reports));
  }, []);

  if(candidates.length){
    return (
      <div className="User">
        <header>
          <Link to="/">
            <button>Back</button>
          </Link>
          <Login />
        </header>
  
        <div className="user-info">
          
          <img src={user.avatar} alt="pic" />
  
          <div className="user-desc">
            <h3>Name: {user.name}</h3>
            <h4>Education: {user.education}</h4>
            <h4>Email: {user.email}</h4>
          </div>


      </div>
      {reports.filter(report => matchId == report.candidateId).map(e =>(
        <Report reportInfo={e}/>
        ))}

    </div>
  );
}
};

export default User;
