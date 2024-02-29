import Nav from '../nav/nav';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './chamada.css';

const CriarChamada = () => {

    const queryParameters = new URLSearchParams(window.location.search);
    const userId = queryParameters.get("id");
    const [ chamada, setChamada ] = useState([]);
    const [ error, setError] = useState();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [ formData, setFormData ] = useState({
        call_creator: userId,
        call_acceptor: "Disponível",
        initial_location: '',
        final_location: '',
    });

    const postChamada = async () => {
        try {
            await axios.post(`http://localhost:3001/chamada/createOne`, formData)
            .then(res => {
                const response = res.data;
                setChamada(response)
                console.log("Dados recebidos:", response);
                <a href="https://api.whatsapp.com/send?phone=5548996146419">
                Contato via WhatsApp
                </a>
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
            <div className='container'>
                <h1><div>Chamada de Viagem</div></h1><hr/>
                <div><input type="text" name="initial_location" value={formData.initial_location}/></div>
                <div><input type="text" name="final_location" value={formData.final_location}/></div>
                <div><button onClick={() => postChamada()}>Aceitar Chamada</button></div>
            </div>
        </div>
    )
};

export default CriarChamada;