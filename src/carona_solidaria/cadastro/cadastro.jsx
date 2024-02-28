import './cadastro.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const navigate = useNavigate();
    const [ hasCar, setHasCar ] = useState(false);
    
    // Estados para rastrear os valores dos campos de entrada
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        email: '',
        password: '',
        age: '',
        sex: 'Masculino',
        phone_number: '',
        turn: 'Matutino',
        car_model: '',
        plate: '',
        user_type: 'Passageiro'
    });

    // Função para manipular a mudança nos campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const checkCar = () => {
        if(hasCar == false) {
            setFormData.car_model = 'Não possui';
            setFormData.plate = 'Não possui';
            setHasCar(true)

        }
        else {
            setHasCar(true)
            setFormData(formData.car_model = '');
            setFormData(formData.plate = '');
        }
    }
 
    // Função para enviar o formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão do envio do formulário
        
        try {
            await axios.post('http://localhost:3001/usuario/createOne', formData);
            navigate(`/home`);
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
        }
        console.log(formData)
    };

    return (
        <div className="container">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nome completo" required />
                <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} placeholder="CPF" required maxLength={14}/>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Senha" required />
                <input type="text" name="age" pattern="\d*" maxLength={3} value={formData.age} onChange={handleInputChange} placeholder="Idade" required />
                <select name="sex" value={formData.sex} onChange={handleInputChange}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                    <option value="Prefiro não informar">Prefiro não informar</option>
                </select>
                <input type="text" name="phone_number" pattern="\d*" value={formData.phone_number} onChange={handleInputChange} placeholder="Número de Telefone" required minLength="8" maxLength="8" />
                <select name="turn" value={formData.turn} onChange={handleInputChange}>
                    <option value="Matutino">Matutino</option>
                    <option value="Vespertino">Vespertino</option>
                    <option value="Noturno">Noturno</option>
                </select>
                <label>Possui carro:<input type="checkbox" name="hasCar" Checked={formData.hasCar} onClick={() => checkCar()} /></label>
                {hasCar ? (  // Renderizar os campos relacionados ao carro se hasCar for true
                    <>
                        <input type="text" name="car_model" value={formData.car_model} onChange={handleInputChange} placeholder="Modelo do veículo" required />
                        <input type="text" name="plate" value={formData.plate} onChange={handleInputChange} placeholder="Placa do Veículo" required />
                    </>
                ) : (<></>)}
                <select name="user_type" value={formData.user_type} onChange={handleInputChange}>
                    <option value="Passageiro">Passageiro</option>
                    <option value="Motorista">Motorista</option>
                </select>
                <input type="submit" value="Cadastrar" />
                <div onClick={() => navigate("/login")}>Já possui uma conta? <strong>clique aqui.</strong></div>
            </form>
        </div>
    );
};

export default Cadastro;
