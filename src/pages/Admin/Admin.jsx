import React, { useState } from 'react';
import './style.scss'
import Login from '../../components/Login'
import Modal from '../../components/Modal'

const Admin = () => {
    return ( 
        <div className="Admin">
            <header>
                <input type="text"/>
                <button>Home</button>
                <Login />
                <button>Create new report</button>
            </header>

            <div>OBJEKAT KAD SE ODRADI SUBMIT IZ WIZARDA</div>
            {/* <Modal /> */}

        </div>
     );
}
 
export default Admin;