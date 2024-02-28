import './perfil.css';
import Nav from "../nav/nav";

const Perfil = () => {
    return(
        <div>
            <Nav/>
            <html>
                <head>
                    <title>Perfil</title>
                </head>
                <body>
                    <div class="container">
                    <h1>Perfil</h1>
                        <form>
                            <input type="text" id="nome" placeholder="Nome completo"/>
                            <input type="email" id="email" placeholder="Email"/>
                            <input type="password" id="senha" placeholder="Senha"/>
                            <input type="number" id="idade" placeholder="Idade"/>
                            <select id="genero" name="Gênero">
                                <option value="mas">Masculino</option>
                                <option value="fem">Feminino</option>
                                <option value="outro">Outro</option>
                                <option value="n/a">Prefiro não informar</option>
                            </select>
                            <input type="number" id="numero" placeholder='Número de Telefone'/>
                            <select id="turno" name="Turno">
                                <option value="mat">Matutino</option>
                                <option value="ves">Vespertino</option>
                                <option value="not">Noturno</option>
                            </select>
                            <input type='text' id='model' placeholder='Modelo do veículo'/>
                            <input type='text' id='placa' placeholder='Placa do Veículo'/>
                            <button type="submit">Editar</button>
                        </form>
                    </div>
                </body>
            </html>
        </div>
    );
}

export default Perfil;