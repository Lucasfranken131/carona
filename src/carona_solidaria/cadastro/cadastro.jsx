import './cadastro.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Cadastro = () => {
    const navigate = useNavigate()

    const Enviar = async () => {    
        try {
            const name = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("senha").value;
            const age = document.getElementById("idade").value;
            const genero = document.getElementById("genero").value;
            const phone_number = document.getElementById("numero").value;
            const turn = document.getElementById("turno").value;
            const car_model = document.getElementById("modelo").value;
            const plate = document.getElementById("placa").value;
            const user_type = document.getElementById("tipo-de-usuario").value;
    
            const valores = {
                name: name,
                email: email,
                password: password,
                age: age,
                sex: genero,
                phone_number: phone_number,
                turn: turn,
                car_model: car_model,
                plate: plate,
                user_type: user_type
            }

            await axios.post('http://localhost:3001/usuario', valores)
            .then(res => {
              const response = res.data;
              console.log(response);
              navigate(`/home`);
            })
    
        }       
        catch (error) {
            return(<div>Valores inválidos</div>)
        }
    }

    return(
        <body>
            <div id="company-logo-nav" onClick={() => navigate('/')}>
                <img src="https://static.vecteezy.com/system/resources/previews/001/193/929/non_2x/vintage-car-png.png" id="logo" alt="logo"></img>
            </div>
            <div className="container">
                <h1>Cadastro</h1>
                <form id="cadastro">
                    <input type="text" id="nome" placeholder="Nome completo"/>
                    <input type="email" id="email" placeholder="Email"/>
                    <input type="password" id="senha" placeholder="Senha"/>
                    <input type="number" id="idade" placeholder="Idade"/>
                    <select id="genero" name="Gênero">
                        <option value="mas">Masculino</option>
                        <option value="fem">Feminino</option>
                        <option value="outro">Outro</option>
                        <option value="n/a">Prefiro não informar</option>
                    </select>
                    <input type="number" id="numero" placeholder='Número de Telefone'/>
                    <select id="turno" name="Turno">
                        <option value="mat">Matutino</option>
                        <option value="ves">Vespertino</option>
                        <option value="not">Noturno</option>
                    </select>
                    <input type='text' id='model' placeholder='Modelo do veículo'/>
                    <input type='text' id='placa' placeholder='Placa do Veículo'/>
                    <input type="submit" id="enviar" onClick={() => Enviar()} value="Cadastrar"/>
                    <div onClick={() => navigate("/login")}>Já possui uma conta?<strong> clique aqui.</strong></div>
                </form>
            </div>
        </body>
    );
};

export default Cadastro  