import React, { useState, useEffect } from 'react';
import Nav from '../nav/nav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './home.css'; // Importando o arquivo de estilos CSS

const Home = () => {
    const userId = Cookies.get("userId");
    const [items, setItems] = useState([]);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:3001/chamada/findActives');
            const response = res.data;
            console.log("Dados recebidos:", response);

            if (response) {
                setError(false);
                setItems(response);
            } else {
                setError(true);
            }
        } catch (error) {
            console.log('Chamada inválida', error);
            setError(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Nav />
            <h1>Carona Solidária</h1>
            {error ? (
                <div>
                    <h1>Não foi possível se conectar com o servidor</h1>
                </div>
            ) : (
                <div>
                    <div><button className="submit-button" onClick={() => navigate(`/chamada/criarChamada?user=${userId}`)}>Criar Chamada</button></div>
                    <div className="chamada-list">
                        {items.map(item => (
                            <div className='chamada' key={item.id_call} onClick={() => navigate(`/chamada?id=${item.id_call}`)}>
                                <div className='chamada-info'>
                                    <div className='chamada-label'>Criador da chamada:</div>
                                    <div className='chamada-value'>{item.call_creator}</div>
                                </div>
                                <div className='chamada-info'>
                                    <div className='chamada-label'>Ponto de partida:</div>
                                    <div className='chamada-value'>{item.initial_location}</div>
                                </div>
                                <div className='chamada-info'>
                                    <div className='chamada-label'>Ponto de chegada:</div>
                                    <div className='chamada-value'>{item.final_location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
