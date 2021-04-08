import React, { useState } from 'react';
import {  Link } from 'react-router-dom'
import './style.scss'

const LoginPage = () => {
    return ( 
        <div className="LoginPage">
            <Link to='/'>  <button className="btn-home">BACK TO HOME</button></Link>
          
            <div className="Form"> 

                <label for="usernmae">Username: </label>
                <input type="text" name="username"/>

                <label for="password">Password: </label>
                <input type="text" name="password"/>


               <button>LoginPage</button>
                
                
            </div>
        </div>
     );
}
 
export default LoginPage;