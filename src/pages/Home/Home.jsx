import React, { useState } from 'react';
import './style.scss'
import Card from '../../components/Card'
import Login from '../../components/Login'


const Home = () => {
    return ( 
        <div className="Home">
            <header>
                <input type="text"/>
                <login />
        
            </header>

            <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
     );
}
 
export default Home;