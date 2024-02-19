import React from 'react';
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const navigate = useNavigate();

  const goToPerfil = () => {
    navigate("/perfil");
  }

  return (
    <div>
      <nav className="nav-bar">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" onClick={() => goToPerfil()} alt="perfil" id="profile-picture"></img>
        <button id="sair">sair</button>
      </nav>
    </div>
  );
}

export default Nav;