import React, { useState } from "react";
import "./report.scss";
import Modal from "../../components/Modal";

const Report = (props) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Report">
      <div className="info">
        <span>
          <p>{props.reportInfo.companyName}</p>
        </span>
        <span>
          <p>{props.reportInfo.interviewDate.slice(0,15)}</p>
        </span>
        <span className="last-span">
          <p>{props.reportInfo.status}</p>
          <i class="fas fa-info" onClick={() => setOpenModal(true)}></i>
        </span>
      </div>
      {openModal ? <Modal cancelModal={setOpenModal} reportInfo={props.reportInfo}/> : null}
    </div>
  );
};

export default Report;
