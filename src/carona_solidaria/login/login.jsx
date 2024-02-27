import React from 'react';
import axios from 'axios';

const Login = () => {
    const login = async () => {
        await axios.post(`http://localhost:3001/login`)
        .then
    }

    return(
        <div className="container">
            <h1>Login</h1>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Senha"/>
            <input type="submit" value="Login"/>
        </div>
    );
}

export default Login;