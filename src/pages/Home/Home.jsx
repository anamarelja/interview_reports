import React, { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import "./style.scss";
import Card from "../../components/Card";
import Login from "../../components/Login";
import { candidateContext } from "../../App";
import { tokenContext } from '../../App'

const Home = () => {
  const { candidates, setCandidates } = useContext(candidateContext);
  const [search, setSearch] = useState("");
  const filteredCandidates = candidates.filter(e=> e.name.toLowerCase().includes(search.toLowerCase()))
  
  const {token} = useContext(tokenContext);


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
              onChange={(e)=>setSearch(e.target.value)}
            />
            { token && <Link to='/admin' className="links">Your Admin Panel</Link>}
          </div>

          <Login />

        </div>
      </header>
        <div className="wrapper-text">Candidates</div>
      <div className="Cards">
          
        {filteredCandidates.map((e) => (
          <Card user={e} />
        ))}
      </div>
    </div>
  );
};

export default Home;
