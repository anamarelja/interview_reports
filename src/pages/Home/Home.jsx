import React, { useState, useEffect, useContext } from 'react';
import './style.scss'
import Card from '../../components/Card'
import Login from '../../components/Login'
import {candidateContext} from '../../App';


const Home = () => {

    const candidates = useContext(candidateContext)

    return ( 
        <div className="Home">
            <header>
                <input type="text"/>
                <login />
        
            </header>


            <div className="Cards">
                {candidates.map((e, i, arr) => (
                    <Card user={e}/>
                ))}
        
            </div>
        </div>
     );
}
 
export default Home;