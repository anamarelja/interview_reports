import React, { useState, useEffect, useContext } from "react";
import "./style.scss";
import Card from "../../components/Card";
import Login from "../../components/Login";
import { candidateContext } from "../../App";

const Home = () => {
  const { candidates, setCandidates } = useContext(candidateContext);
  const [search, setSearch] = useState("");
  console.log(candidates);

  const inputSearch = (e) => {
    setSearch(e.target.value);
    setCandidates(
      candidates.filter((e) =>
        e.name.toLocaleLowerCase().startsWith(`${search.toLocaleLowerCase()}`)
      )
    );
  };

  return (
    <div className="Home">
      <header>
        <div className="wrapper">
          <div>
            <h4>LOGO</h4>
            <input
              type="text"
              value={search}
              placeholder="Seacrh by name..."
              onChange={inputSearch}
            />
          </div>

          <Login />
        </div>
      </header>
        <div className="wrapper-text">Candidates</div>
      <div className="Cards">
          
        {candidates.map((e) => (
          <Card user={e} />
        ))}
      </div>
    </div>
  );
};

export default Home;
