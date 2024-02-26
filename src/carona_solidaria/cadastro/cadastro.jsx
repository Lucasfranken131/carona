import './cadastro.css';

const Cadastro = () => {
    return(
        <body>
            <div className="container">
                <h1>Cadastro</h1>
                <input type="text" id="nome" placeholder="Nome completo"/>
                <input type="email" id="email" placeholder="Email"/>
                <input type="text" id="curso" placeholder="Curso"/>
                <input type="tel" id="telefone" placeholder="Telefone" pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}" required/>
                <input type="password" id="senha" placeholder="Senha"/>
                <input type="submit" id="enviar" value="Enviar"/>
            </div>
        </body>
    );
};

export default Cadastro  
