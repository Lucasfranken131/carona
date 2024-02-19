import React from 'react';
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const navigate = useNavigate();

  const goToPerfil = () => {
    navigate("/perfil");
  }

  const goToHome = () => {
    navigate("/home");
  }

  const goToIndex = () => {
    navigate("/");
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
          <button id="sair" onClick={() => goToIndex()}>sair</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;