import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Login from "../../components/Login";
import Report from '../../components/Report'
import Modal from "../../components/Modal";
import {reportContext} from '../../App'
import { companyContext } from "../../App";

const Admin = () => {

  const companies = useContext(companyContext);
  const {reports} = useContext(reportContext);
  console.log(reports)

  return (
    <div className="Admin">
      <header>
        <div className="wrapper">
          <div>
            <h3>LOGO</h3>
            <input
              type="text"
              placeholder="Search by name or company name..."
            />
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/admin/newreport" className="links">
              Create New Report
            </Link>
          </div>
          <Login />
        </div>
      </header>

      <div>
        {/* {reports.map(e=> <Report reportInfo={e}/>)} */}
      </div>
      {/* <Modal /> */}
    </div>
  );
};

export default Admin;
