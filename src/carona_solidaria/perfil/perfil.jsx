import Nav from '../nav/nav'
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Perfil = () => {

    const id = Cookies.get("userId");
    const [ error, setError ] = useState();
    const [ user, setUser ] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/usuario/findOne/${id}`)
            const response = res.data[0];
            if(response) {
                setUser(response)
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
    

    return(
        <div>
            <Nav/>
            <html>
                <head>
                    <title>Perfil</title>
                </head>
                <body>
                    <div class="container">
                    <h1>Perfil</h1>
                        <input type="text" id="nome" placeholder="Nome completo" value={user.name}/>
                        <input type="email" id="email" placeholder="Email" value={user.email}/>
                        <input type="password" id="senha" placeholder="Senha" value={user.password}/>
                        <input type="number" id="idade" placeholder="Idade" value={user.age}/>
                        <input type="text" id="sex" value={user.sex}/>
                        <input type="number" id="numero" placeholder='Número de Telefone' value={user.phone_number}/>
                        <input type="text" id="turn" value={user.turn}/>
                        <input type='text' id='model' placeholder='Modelo do veículo' value={user.car_model}/>
                        <input type='text' id='placa' placeholder='Placa do Veículo' value={user.plate}/>
                    </div>
                </body>
            </html>
        </div>
    );
}

export default Perfil;