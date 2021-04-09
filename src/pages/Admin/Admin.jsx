import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import './style.scss'
import Login from '../../components/Login'
import Modal from '../../components/Modal'
import {companyContext} from '../../App'

const Admin = () => {

    const companies = useContext(companyContext);

    return ( 
        <div className="Admin">
            <header>
                <input type="text"/>
                <button>Home</button>
                <Login />
                <Link to='/admin/newreport'>Create New Report</Link>
            </header>

            <div>OBJEKAT KAD SE ODRADI SUBMIT IZ WIZARDA</div>
            {/* <Modal /> */}

        </div>
     );
}
 
export default Admin;