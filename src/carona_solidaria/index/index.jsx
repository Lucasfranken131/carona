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
      <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_558/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png'></img>
      </div>
    </div>
  </div> 
  );
}

export default Index;
