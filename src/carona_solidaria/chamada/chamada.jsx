import Nav from '../nav/nav';

import { useState, useEffect } from 'react';
import axios from 'axios';
import './chamada.css';

const Chamada = () => {

    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    const [ chamada, setChamada ] = useState([]);

    const fetchData = async () => {
        try {
            await axios.get(`http://localhost:3001/chamada/${id}`)
            .then(res => {
                const response = res.data;
                setChamada(res.data)
                console.log("Dados recebidos:", response);
                return response;
            });
        }
        catch (error) {
            console.log("Requisição de chamada inválida.", error);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);

    const aceitarChamada = async () => {
        const putResponse = {
            active: 0
        }
        try {
            await axios.put(`http://localhost:3001/chamada/${id}`, putResponse)
            .then(res => {
                const response = res.data;
                setChamada(res.data)
                console.log("Dados recebidos:", response);
            });
        }
        catch (error) {
            console.log("Requisição de chamada inválida.", error);
        }
    } 

    return(
        <div>
            <Nav/>
            <div className='call-info'>
                <h1><div>Chamada de Viagem</div></h1><hr/>
                <div>Início da Viagem: {chamada.initial_location}</div>
                <div>Destino da Viagem: {chamada.final_location}</div>
                <div>Data de criação da Chamada: {chamada.call_date}</div>
                <div><button onClick={() => aceitarChamada()}>Aceitar Chamada</button></div>
            </div>
        </div>
    )
};

export default Chamada;