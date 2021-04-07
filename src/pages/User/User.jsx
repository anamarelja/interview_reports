import React, { useState } from "react";
import "./style.scss";
import Login from "../../components/Login";
import Report from "../../components/Report";
import Modal from "../../components/Modal";

const User = () => {
    
  return (
    <div className="User">
      <header>
        <button>Back</button>
        <Login />
      </header>
      <div>
        <img src="" alt="pic" />
        <h3>Name</h3>
        <h4>Education</h4>
        <h4>Email</h4>
      </div>

      <div className="ReportList">
        <Report />
        <Report />
        <Report />
      </div>

      <Modal />

    </div>
  );
};

export default User;
