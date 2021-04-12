import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.scss";
import Login from "../../components/Login";
import Modal from "../../components/Modal";
import { reportContext } from "../../App";
import { tokenContext } from "../../App";

const Admin = () => {
  const { reports, setReports } = useContext(reportContext);
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState("");
  const [search, setSearch] = useState("");
  const { token } = useContext(tokenContext);

  const inputSearch = (e) => {
    setSearch(e.target.value);
    setReports(
      reports.filter(
        (e) =>
          e.candidateName
            .toLocaleLowerCase()
            .startsWith(`${search.toLocaleLowerCase()}`) ||
          e.companyName
            .toLocaleLowerCase()
            .startsWith(`${search.toLocaleLowerCase()}`)
      )
    );
  };

  return (
    <div className="Admin">
      {token == null && <Redirect to="/login"></Redirect>}
      <header>
        <div className="wrapper">
          <div>
            <h3>LOGO</h3>
            <input
              type="text"
              placeholder="Search by name or company name..."
              onChange={inputSearch}
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
      <div className="">
        {reports.map((e) => (
          <div className="Report">
            <div>
              <p className="details">Name</p>
              <p>{e.candidateName}</p>
            </div>

            <div>
              <p className="details">Company</p>
              <p>{e.companyName}</p>
            </div>
            
            <div>
              <button
                onClick={() => {
                  setOpenModal(true);
                  setUser(e);
                }}
              >
                i
              </button>
              <button>x</button>
            </div>
          </div>
        ))}
        {openModal ? (
          <Modal cancelModal={setOpenModal} reportInfo={user} />
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
