import React, { useContext, useEffect, useState } from "react";
import "./NewReport.scss";
import { Redirect, Link } from "react-router-dom";
import { candidateContext } from "../../App";
import { tokenContext } from "../../App";

const NewReport = () => {
  const { candidates } = useContext(candidateContext);
  const { token } = useContext(tokenContext);

  const [search, setSearch] = useState("");
  const [step, setStep] = useState(1);
  const [companies, setCompanies] = useState([]);

  const filteredCandidates = candidates.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredCompanies = companies.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const [candName, setCandName] = useState("");
  const [candCompany, setCandCompany] = useState("");
  const [candInterviewDate, setCandInterviewDate] = useState("");
  const [candPhase, setCandPhase] = useState("");
  const [candStatus, setCandStatus] = useState("");
  const [candID, setCandID] = useState("");
  const [compID, setCompID] = useState("");
  const [candNote, setCandNote] = useState("");

  const [candidateActive, setCandidateActive] = useState(false);
  const [activeCompany, setActiveCompany] = useState(false);

  const addName = (cand, i) => {
    setCandName(cand.name);
    setCandID(cand.id);
    setCandidateActive({ active: i });
  };

  const addCompany = (comp, i) => {
    setCandCompany(comp.name);
    setCompID(comp.id);
    setActiveCompany({ active: i });
  };

  const submitReport = () => {
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        candidateId: candID,
        candidateName: candName,
        companyId: compID,
        companyName: candCompany,
        interviewDate: candInterviewDate,
        phase: candPhase,
        status: candStatus,
        note: candNote,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const nextHandler = () => {
    step === 1
      ? candName == ""
        ? alert("Enter candidate name")
        : setStep(2)
      : candCompany == ""
      ? alert("Enter company name")
      : setStep(3);
  };

  const backHandler = () => {
    step === 0 ? setStep(1) : setStep(step - 1);
  };

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((companies) => setCompanies(companies));
  }, []);

  return (
    <div className="NewReport">
      {token == null && <Redirect to="/login"></Redirect>}
      <div className="header-container">
        <header>
          <p className="main-title">Reports Administration</p>
          <div className="controls">
            <Link to="/Admin">
              <button className="reports-btn">All Reports</button>
            </Link>
          </div>
        </header>
      </div>

      <main>
        {step === 1 && (
          <section className="page ">
            <div className="wizard-steps">
              <div className="step-one active">
                <p>1</p>
                <h4>Select Candidate</h4>
              </div>
              <div className="step-two">
                <p>2</p>
                <h4>Select Company</h4>
              </div>
              <div className="step-three">
                <p>3</p>
                <h4>Fill Report Details</h4>
              </div>
            </div>

            <div className="candidate-select">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />

              <div className="candidate-list">
                {filteredCandidates.map((cand, i) => (
                  <div
                    className={
                      i == candidateActive.active
                        ? "candidate-active"
                        : "candidate"
                    }
                    onClick={() => addName(cand, i)}
                  >
                    {cand.name}
                  </div>
                ))}
              </div>

              <button className="handler-btn" onClick={nextHandler}>
                Next
              </button>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="page ">
            <div className="wizard-steps">
              <div className="step-one ">
                <p>1</p>
                <h4>Select Candidate</h4>
              </div>
              <div className="step-two active">
                <p>2</p>
                <h4>Select Company</h4>
              </div>
              <div className="step-three">
                <p>3</p>
                <h4>Fill Report Details</h4>
              </div>
              <p className="candidate-title">Candidate:</p>
              <h3 className="candidate-text">{candName}</h3>
            </div>

            <div className="company-select">
              <input
                type="text"
                placeholder="Search.."
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />

              <div className="company-list">
                {filteredCompanies.map((comp, i) => (
                  <div
                    className={
                      i == activeCompany.active ? "company-active" : "company"
                    }
                    onClick={() => addCompany(comp, i)}
                  >
                    {comp.name}
                  </div>
                ))}
              </div>
              <div className="buttons">
                <button className="handler-btn" onClick={backHandler}>
                  Back
                </button>
                <button className="handler-btn" onClick={nextHandler}>
                  Next
                </button>
              </div>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="page">
            <div className="wizard-steps">
              <div className="step-one ">
                <p>1</p>
                <h4>Select Candidate</h4>
              </div>
              <div className="step-two ">
                <p>2</p>
                <h4>Select Company</h4>
              </div>
              <div className="step-three active">
                <p>3</p>
                <h4>Fill Report Details</h4>
              </div>

              <p className="candidate-title">Candidate:</p>
              <h3 className="candidate-text">{candName}</h3>

              <p className="company-title">Company:</p>
              <h3 className="company-text">{candCompany}</h3>
            </div>

            <div className="interview-select">
              <div className="controls">
                <div className="date">
                  <p>Interview Date:</p>
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value={candInterviewDate}
                    min="1990-01-01"
                    max={today}
                    onChange={(e) => setCandInterviewDate(e.target.value)}
                    required
                  />
                </div>

                <div className="phase">
                  <p>Phase:</p>
                  <select
                    name="phase"
                    onChange={(e) => setCandPhase(e.target.value)}
                    required
                  >
                    <option value="cv">cv</option>
                    <option value="hr">hr</option>
                    <option value="tech">tech</option>
                    <option value="final">final</option>
                  </select>
                </div>
                <div className="status">
                  <p>Status</p>
                  <select
                    name="status"
                    onChange={(e) => setCandStatus(e.target.value)}
                    required
                  >
                    <option value="passed">passed</option>
                    <option value="declined">declined</option>
                  </select>
                </div>
              </div>

              <div className="notes">
                <p>Notes</p>
                <textarea
                  name="notes"
                  placeholder="Enter some text here"
                  onChange={(e) => setCandNote(e.target.value)}
                ></textarea>
              </div>

              <div className="buttons">
                <button className="handler-btn" onClick={backHandler}>
                  Back
                </button>
                <button className="handler-btn" onClick={submitReport}>
                  submit
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default NewReport;
