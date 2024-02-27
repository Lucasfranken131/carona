import Nav from '../nav/nav';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './chamada.css';

const Chamada = () => {

    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    const [ chamada, setChamada ] = useState([]);
    const [ error, setError] = useState();

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/chamada/findOne/${id}`)
            const response = res.data[0];
            if(response) {
                setChamada(response)
                setError(false);
                console.log("Dados recebidos:", response);
            }
            else {
                setError(true);
            }
        }
        catch (error) {
            setError(true);
            console.log("Requisição de chamada inválida.", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const aceitarChamada = async () => {
        const putResponse = {
            ...chamada,
            active: "inativo"
        }
        try {
            await axios.put(`http://localhost:3001/chamada/updateOne/${id}`, putResponse)
            .then(res => {
                const response = res.data;
                setChamada(response)
                console.log("Dados recebidos:", response);
            });
        }
        catch (error) {
            setError(true);
            console.log("Requisição de chamada inválida.", error);
        }
    } 

    return(
        <div>
            <Nav/>
            { error ? 
                (
                <div>
                    <h1>Requisição inválida</h1>
                </div>
                ) : (   
                <div className='call-info'>
                    <h1><div>Chamada de Viagem</div></h1><hr/>
                    <div>Motorista: {chamada.driver_name}</div>
                    <div>Passageiro: {chamada.passenger_name}</div>
                    <div>Início da Viagem: {chamada.initial_location}</div>
                    <div>Destino da Viagem: {chamada.final_location}</div>
                    <div>Data de criação da Chamada: {chamada.call_date}</div>
                    <div><button onClick={() => aceitarChamada()}>Aceitar Chamada</button></div>
                </div>
                )
            }
        </div>
    )
};

export default Chamada;