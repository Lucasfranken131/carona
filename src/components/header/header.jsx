import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToPerfil = () => {
    navigate("/perfil");
  }

  return (
    <div id="nav">
      <nav>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" onClick={() => goToPerfil()} alt="perfil"></img>
      </nav>
    </div>
  );
}

export default Header;