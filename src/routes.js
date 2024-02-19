import React from "react";
import { Route, Routes , BrowserRouter } from "react-router-dom";

import Cadastro from "./carona_solidaria/cadastro/cadastro";
import Chamada from './carona_solidaria/chamada/chamada';
import Home from "./carona_solidaria/home/home";
import Index from './carona_solidaria/index/index';
import Login from "./carona_solidaria/login/login";
import Perfil from './carona_solidaria/perfil/perfil';

function AppRoutes(){
   return(
    <div>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element = { <Cadastro/> }  path="/cadastro" />
                    <Route element = { <Chamada/> } path="/chamada" />
                    <Route element = { <Index/> } path="/" />
                    <Route element = { <Home/> }  path="/home" exact />
                    <Route element = { <Login/> }  path="/login" />
                    <Route element = { <Perfil/> } path="/perfil" />
                </Routes>
            </BrowserRouter>
        </div>
    </div>
   )
}

export default AppRoutes;