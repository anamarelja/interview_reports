import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Login from "../../components/Login";
import Modal from "../../components/Modal";
import { companyContext } from "../../App";

const Admin = () => {
  const companies = useContext(companyContext);

  return (

    <div className="Admin">

      <header>
        <div className="wrapper">
          <div>
            <h3>Admin Panel</h3>
            <input type="text" placeholder="Search by name or company name..."/>
            <Link to="/" className="links">Home</Link>
            <Link to="/admin/newreport" className="links">Create New Report</Link>
          </div>
          <Login />
        </div>
      </header>

      <div>OBJEKAT KAD SE ODRADI SUBMIT IZ WIZARDA</div>
      {/* <Modal /> */}

    </div>
  );
};

export default Admin;
