import React, { useState } from "react";
import "./report.scss";
import Modal from "../../components/Modal";

const Report = (props) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Report">
      <div className="info">
        <span>
          <h5>{props.reportInfo.companyName}</h5>
        </span>
        <span>
          <h5>{props.reportInfo.interviewDate.slice(0,15)}</h5>
        </span>
        <span className="last-span">
          <h5>{props.reportInfo.status}</h5>
          <i class="fas fa-info-circle" onClick={() => setOpenModal(true)}></i>
        </span>
      </div>
      {openModal ? <Modal cancelModal={setOpenModal} reportInfo={props.reportInfo}/> : null}
      
    </div>
  );
};

export default Report;
