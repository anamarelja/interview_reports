import React, { useContext, useState } from "react";
import "./NewReport.scss";

import { candidateContext } from "../../App";

const NewReport = () => {
  const { candidates } = useContext(candidateContext);

  //   const [reportCandidates,setReportCandidates] = useState()
  let [step, setStep] = useState(1);


  const nextHandler = () =>{
      step === 3 ? setStep(3) : setStep(step + 1)
      console.log(step);
  }

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
          <section className="page-one ">
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
              <input type="text" />

              <div className="candidate-list">
                {candidates.map((cand) => (
                  <div className="candidate">{cand.name}</div>
                ))}
              </div>

              <button onClick={nextHandler}>Next</button>
            </div>
          </section>
        )}

        {step === 2 &&  <section className="page-one ">
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
            </div>

            <div className="candidate-select">
              <input type="text" />

              <div className="candidate-list">
                {candidates.map((cand) => (
                  <div className="candidate">John Doe</div>
                ))}
              </div>

              <button onClick={nextHandler}>Next</button>
            </div>
          </section>}

        {step === 3 &&<section className="page-one ">
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
            </div>

            <div className="candidate-select">
              <input type="text" />

              <div className="candidate-list">
                {candidates.map((cand) => (
                  <div className="candidate">John Doe</div>
                ))}
              </div>

              <button onClick={nextHandler}>Next</button>
            </div>
          </section>}
}
      </main>
    </div>
  );
};

export default NewReport;
