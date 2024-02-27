import React from 'react';
import Nav from '../nav/nav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [items, setItems] = useState([]);
    const [dataLength, setDataLength] = useState();
    const navigate = useNavigate();

    const fetchData = () => {
        axios.get('http://localhost:3001/chamada/findActives')
        .then(res => {
            const response = res.data;
            console.log("Dados recebidos:", response);
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
            }
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div>
            <Nav/>
            <h1>Carona Solidária</h1>
            <div>
                <button onClick={() => navigate('/criarChamada')}>Criar Chamada</button>
            </div>
            <p>
            {items.map(item => (
                <React.Fragment key={item.id_call}> 
                    <div className='chamada' onClick={() => navigate(`/chamada?id=${item.id_call}`)}>
                            <div>{item.driver_name}</div>
                    </div>
                </React.Fragment>
            ))}
            </p>            
        </div>
    );
}

export default Home;