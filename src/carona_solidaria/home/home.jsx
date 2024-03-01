import React from 'react';
import Nav from '../nav/nav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Home = () => {

    const userId = Cookies.get("userId")
    const [items, setItems] = useState([]);
    const [dataLength, setDataLength] = useState();
    const [ error, setError ] = useState();
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            await axios.get('http://localhost:3001/chamada/findActives')
            .then(res => {
                const response = res.data;
                console.log("Dados recebidos:", response);
            if(response) {
                setError(false);
            }
            else {
                setError(true);
            }

            if (Array.isArray(response) || typeof response === 'object') {
                const dataArray = Array.isArray(response) ? response : [response];
                console.log("Tipo de dados é uma array ou objeto.");
                
                if (dataArray.length === 0) {
                    console.log("Final da página");
                } else if (dataLength !== dataArray.length) {
                    setDataLength(dataArray.length);
                    setItems(prevItems => [...prevItems, ...dataArray]);
                }
            } else {
                console.error("Os dados não são do tipo esperado (array ou objeto).");
                setError(true);
            }
        });
        }
        catch (error) {
            console.log('chamada inválida', error);
            setError(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div>
            <Nav/>
            <h1>Carona Solidária</h1>
            {error ? 
            (
            <div>
                <h1>Não foi possível se conectar com o servidor</h1>
            </div>
            ) : (
            <div>
                <div><button onClick={() => navigate(`/chamada/criarChamada?user=${userId}`)}>Criar Chamada</button></div>
                <p>
                {items.map(item => (
                    <React.Fragment key={item.id_call}> 
                        <div className='chamada' onClick={() => navigate(`/chamada?id=${item.id_call}`)}>
                            <div className='valores-chamada'>Criador da chamada: {item.call_creator}</div>
                            <div className='valores-chamada'>Ponto de partida: {item.initial_location}</div>
                            <div className='valores-chamada'>Ponto de chegada: {item.final_location}</div>
                        </div>
                    </React.Fragment>
                ))}
                </p>   
            </div>
            )}
         
        </div>
    );
}

export default Home;