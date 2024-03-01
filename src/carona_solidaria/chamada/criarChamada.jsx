import Nav from '../nav/nav';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './chamada.css';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const CriarChamada = () => {

    const navigate = useNavigate();
    const phoneNumber = Cookies.get("phoneNumber");
    const userName = Cookies.get("name");
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
        call_creator: userName,
        call_acceptor: "Disponível",
        call_creator_number: phoneNumber,
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
                navigate("/home");
            });
        }
        catch (error) {
            setError(true);
            console.log("Requisição de chamada inválida.", error);
            console.log(formData)
        }
    } 

    return(
        <div>
            <Nav/> 
            <div className='container'>
                <h1><div>Chamada de Viagem</div></h1><hr/>
                <div><input type="text" name="initial_location" onChange={handleInputChange} value={formData.initial_location} placeholder='Ponto de partida'/></div>
                <div><input type="text" name="final_location" onChange={handleInputChange} value={formData.final_location} placeholder='Ponto final'/></div>
                <div><button className="criar-chamada-button" onClick={() => postChamada()}>Criar Chamada</button></div>
            </div>
        </div>
    )
};

export default CriarChamada;