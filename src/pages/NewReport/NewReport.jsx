import React, { useContext, useEffect, useState } from "react";
import "./NewReport.scss";

import { candidateContext } from "../../App";

const NewReport = () => {
  const { candidates } = useContext(candidateContext);
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

  console.log(candName);
  console.log(candCompany);
  console.log(candInterviewDate);
  console.log(candPhase);
  console.log(candStatus);

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
        'Authorization': 'Bearer ' + localStorage.getItem("token")
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
      .catch(error => console.error(error))
  };

  const nextHandler = () => {
    candName == ""
      ? alert("Add candidate name")
      : step === 3
      ? setStep(3)
      : setStep(step + 1);
  };
  const backHandler = () => {
    step === 0 ? setStep(1) : setStep(step - 1);
  };

  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((companies) => setCompanies(companies));
  }, []);

  return (
    <div className="NewReport">
      <header>
        <h1>Reports Administration</h1>
        <div className="controls">
          <button className="reports">Reports</button>
          <button className="crt-report">Create Report</button>
        </div>
      </header>

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
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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

              <button onClick={nextHandler}>Next</button>
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
              <p>Candidate:</p>
              <h3>{candName}</h3>
            </div>

            <div className="company-select">
              <input
                type="text"
                placeholdr="search companies"
                onChange={(e) => setSearch(e.target.value)}
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
                <button onClick={backHandler}>Back</button>
                <button onClick={nextHandler}>Next</button>
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

              <p>Candidate:</p>
              <h3>{candName}</h3>

              <p>Company:</p>
              <h3>{candCompany}</h3>
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
                    max="2021-12-31"
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
                <button onClick={backHandler}>Back</button>
                <button onClick={submitReport}>submit</button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default NewReport;
