import React from 'react';
import './index.css';

const Index = () => {
  return (
<div>
  <h1>Bem-vindo ao Carona Solidária</h1>
  <p>Nós tornamos fácil e seguro compartilhar caronas entre alunos e funcionários da faculdade. Economize dinheiro, conheça novas pessoas e faça a diferença no meio ambiente.</p>
  <div class="cadastro">
      <div class="box">
          <h2>Cadastre-se</h2>
          <p>Registre-se gratuitamente e crie seu perfil para começar a compartilhar caronas.</p>
          <a href="pagina_de_cadastro.html" class="button">Cadastre-se</a>
      </div>
      <div class="box">
          <h2>Login</h2>
          <p>Já possui uma conta? Faça login para acessar sua conta.</p>
          <a href="pagina_de_login.html" class="button">Login</a>
      </div>
  </div>
</div>
  );
}

export default Index;
