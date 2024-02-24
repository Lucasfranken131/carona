import './cadastro.css';

const Cadastro = () => {
    return(
        <body>
            <div className="container">
                <h1>Carona Solidária</h1>
                <input type="text" id="nome" placeholder="Nome completo"/>
                <input type="email" id="email" placeholder="Email"/>
                <input type="password" id="senha" placeholder="Senha"/>
                <input type="submit" id="enviar" value="Enviar"/>
            </div>
        </body>
    );
};

export default Cadastro  
