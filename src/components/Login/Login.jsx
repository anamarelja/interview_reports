import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import './style.scss'
import { tokenContext } from '../../App'



const Login = () => {

    const {token} = useContext(tokenContext);

    return ( 
        <div className="Login">
            { token ? <button className="loggingButton">Logout</button> : <Link to='/login' className="loggingButton">Login</Link> }
        </div>
     );
}
 
export default Login;