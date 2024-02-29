import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookies';

const Login = () => {
    const navigate = useNavigate();
    const [ error, setError ] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const log_in = async () => {
        try {
            await axios.post(`http://localhost:3001/usuario/login`, formData)
            .then(res => {
                const response = res.data;
                Cookies.set('email', formData.email);
                Cookies.set('password', formData.password);
                console.log(response);
                navigate("/home");
                setError(false)
            })
        }
        catch (error) {
            console.log(formData)
            console.log("Erro na requisição:", error)
            setError(true)
        }
    }

    return(
        <div className="container">
            <h1>Login</h1>
            <input type="text" value={formData.email} name="email" placeholder="Email" onChange={handleInputChange}/>
            <input type="text" value={formData.password} name="password" placeholder="Senha" onChange={handleInputChange}/>
            <input type="submit" onClick={() => log_in()}value="Login"/>
            {error ? (<div><strong>Email ou senha incorretas</strong></div>) : (<div></div>)}
            <div onClick={() => navigate("/cadastro")}>Não possui uma conta?<strong> clique aqui.</strong></div>
        </div>
    );
}

export default Login;