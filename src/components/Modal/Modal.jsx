import React, { useState } from "react";
import "./modal.scss";

const Modal = (props) => {
  return (
    <div className="background">
      <div className="Modal">
        <h4>{props.reportInfo.candidateName}</h4>

        <section className="modal-info">

          <section>
            <div>
              <p>Company</p>
              <h5>{props.reportInfo.companyName}</h5>
            </div>
            <div>
              <p>Interview Date</p>
              <h5>{props.reportInfo.interviewDate.slice(0,15)}</h5>
            </div>
            <div>
              <p>Phase</p>
              <h5>{props.reportInfo.phase}</h5>
            </div>
            <div>
              <p>Status</p>
              <h5>{props.reportInfo.status}</h5>
            </div>
          </section>

          <section className="notes">
            <h5>Notes</h5>
            <p>{props.reportInfo.note}</p>
          </section>
        </section>

      <button onClick={() => props.cancelModal(false)}>x</button>
      </div>

    </div>
  );
};

export default Modal;
