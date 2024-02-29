import React from 'react';
import { useNavigate } from "react-router-dom";
import "./nav.css";
import Cookies from 'js-cookies';

const Nav = () => {
  const userId = Cookies.get('id_user');
  const navigate = useNavigate();

  const goToPerfil = () => {
    navigate(`/perfil?user=${userId}`);
  }

  const goToHome = () => {
    navigate("/home");
  }

  const goToIndex = () => {
    navigate("/");
    Cookies.removeItem('userId');
    Cookies.removeItem('email');
    Cookies.removePassword('password');
  }



  return (
    <div>
      <nav className="nav-bar">
        <div id="company-logo-nav" onClick={() => goToHome()}>
          <div id="company-name"><strong>Carona Solidária</strong></div>
          <img src="https://static.vecteezy.com/system/resources/previews/001/193/929/non_2x/vintage-car-png.png" id="logo" alt="logo"></img>
        </div>
        <div id="profile-nav">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" onClick={() => goToPerfil()} alt="perfil" id="profile-picture"></img>
          <button id="sair" onClick={() => goToIndex()}>Sair</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;