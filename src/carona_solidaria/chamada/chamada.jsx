import Nav from '../nav/nav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chamada.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Chamada = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id");
    const name = Cookies.get("name");
    const [chamada, setChamada] = useState([]);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/chamada/findOne/${id}`);
            const response = res.data[0];
            if (response) {
                setChamada(response);
                setError(false);
                console.log("Dados recebidos:", response);
            } else {
                setError(true);
            }
        } catch (error) {
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
            active: "inativo",
            call_acceptor: name
        }
        try {
            await axios.put(`http://localhost:3001/chamada/updateOne/${id}`, putResponse);
            navigate(`https://api.whatsapp.com/send?phone=55489${chamada.call_creator_number}`);
        } catch (error) {
            setError(true);
            console.log("Requisição de chamada inválida.", error);
        }
    }

    return (
        <div>
            <Nav />
            {error ? (
                <div>
                    <h1>Requisição inválida</h1>
                </div>
            ) : (
                <div className='inside_chamada'>
                    <h1>Chamada de Viagem</h1>
                    <hr />
                    <div className="chamada-info">
                        <div className="chamada-label">Motorista:</div>
                        <div className="chamada-value">{chamada.call_creator}</div>
                    </div>
                    <div className="chamada-info">
                        <div className="chamada-label">Passageiro:</div>
                        <div className="chamada-value">{chamada.call_acceptor}</div>
                    </div>
                    <div className="chamada-info">
                        <div className="chamada-label">Início da Viagem:</div>
                        <div className="chamada-value">{chamada.initial_location}</div>
                    </div>
                    <div className="chamada-info">
                        <div className="chamada-label">Destino da Viagem:</div>
                        <div className="chamada-value">{chamada.final_location}</div>
                    </div>
                    <div className="chamada-info">
                        <div className="chamada-label">Data de criação da Chamada:</div>
                        <div className="chamada-value">{chamada.call_date}</div>
                    </div>
                    <div><button onClick={aceitarChamada}>Aceitar Chamada</button></div>
                </div>
            )}
        </div>
    )
};

export default Chamada;
