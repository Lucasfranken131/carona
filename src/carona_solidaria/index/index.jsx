import React from 'react';
import './index.css';
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
  <div>
    <div class="index">
      <div class="content">
        <h1>Bem-vindo ao Carona Solidária</h1>
        <p>Nós tornamos fácil e seguro compartilhar caronas entre alunos e funcionários da faculdade. Economize dinheiro, conheça novas pessoas e faça a diferença no meio ambiente.</p>
        <div class="cadastro">
            <div class="box">
                <h2>Cadastre-se</h2>
                <p>Registre-se gratuitamente e crie seu perfil para começar a compartilhar caronas.</p>
                <div class="clickable" onClick={() => navigate("/cadastro")}>Cadastro</div>
            </div>
            <div class="box">
                <h2>Login</h2>
                <p>Já possui uma conta? Faça login para acessar sua conta.</p>
                <div class="clickable" onClick={() => navigate("/login")}>Login</div>
            </div>
        </div>
    </div>
      <div class="image">
      <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_698/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png'></img>
      </div>
    </div>
  </div> 
  );
}

export default Index;