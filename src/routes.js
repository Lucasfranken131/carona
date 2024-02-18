import React from "react";
import { Route, Routes , BrowserRouter } from "react-router-dom";

import Cadastro from "./components/cadastro/cadastro";
import Chamada from './components/chamada/chamada';
import Home from "./components/home/home";
import Index from './components/index/index';
import Login from "./components/login/login";
import Perfil from './components/perfil/perfil';

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