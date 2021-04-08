import React, { useState } from "react";
import "./report.scss";
import Modal from "../../components/Modal";
const Report = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Report">
      <div className="info">
        <span>
          <h4>Google</h4>
        </span>
        <span>
          <h4>12.05.2012</h4>
        </span>
        <span className="last-span">
          <h4>Passed</h4>
          <i class="fas fa-info-circle" onClick={() => setOpenModal(true)}></i>
        </span>
      </div>
      {openModal ? <Modal cancelModal={setOpenModal} /> : null}
    </div>
  );
};

export default Report;
