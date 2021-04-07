import React, { useState } from 'react';
import './style.scss'

const Login = () => {
    return ( 
        <div className="Login">
            <button>BACK TO HOME</button>

            <div className="Form"> 

                <label for="usernmae">Username: </label>
                <input type="text" name="username"/>

                <label for="password">Password: </label>
                <input type="text" name="password"/>

                <button>Login</button>
                
            </div>
        </div>
     );
}
 
export default Login;