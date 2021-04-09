import React, { useContext, useState } from 'react';
import './style.scss'
import { tokenContext } from '../../App'



const Login = () => {

    const {token} = useContext(tokenContext);

    return ( 
        <div className="Login">
            {token ? <button className="loggingButton">Logout</button> : <button className="loggingButton">Login</button>}
        </div>
     );
}
 
export default Login;