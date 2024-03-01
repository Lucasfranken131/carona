import Nav from '../nav/nav';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './chamada.css';

const Zap = () => {

    const navigate = useNavigate()
    const queryParameters = new URLSearchParams(window.location.search);
    const number = queryParameters.get("number");
    const [ error, setError] = useState()
    
    const call = async () => {
    };

    return(
        <div>
            <Nav/>
            { error ? 
                (
                <div>
                    <h1>Requisição inválida</h1>
                </div>
                ) : (   
                    <div onClick={() => call()}>
                    Contato via WhatsApp
                    </div>
                )
            }
        </div>
    )
};

export default Zap;