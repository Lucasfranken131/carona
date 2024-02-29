import './cadastro.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const navigate = useNavigate();
    const [ hasCar, setHasCar ] = useState(false);
    const [ error, setError ] = useState(false);
    
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
        car_model: 'Não possui',
        plate: 'Não possui',
        user_type: 'Passageiro'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const checkCar = () => {
        if(hasCar == false) {
            setFormData({ ...formData, car_model: '', plate: '' })

            setHasCar(true)

        }
        else {
            setFormData({ ...formData, car_model: 'Não possui', plate: 'Não possui' })
            setHasCar(false)
        }
    }
 
    const createUser = async () => {
        try {
            console.log("Seus dados antes de serem enviados:", formData)
            await axios.post('http://localhost:3001/usuario/createOne', formData)
            .then(res => {
                const response = res.data;
                console.log("Sua response:", response);
                navigate(`/home`);
                setError(false);
            });

        } catch (error) {
            console.log('Erro ao enviar o formulário:', error);
            setError(true)
        }
    };

    return (
        <div className="container">
            <h1>Cadastro</h1>
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
                <div>Possui carro:<input type="checkbox" name="hasCar" checked={formData.hasCar} onClick={() => checkCar()} /></div>
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
                <input type='submit' onClick={() => createUser()} value="Cadastrar"/>
                {error ? (<div>Cadastro inválido</div>) : (<div></div>)}
                <div onClick={() => navigate("/login")}>Já possui uma conta? <strong>clique aqui.</strong></div>
        </div>
    );
};

export default Cadastro;
