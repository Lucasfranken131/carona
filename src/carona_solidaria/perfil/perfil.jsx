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
                    <div class="quadro">
                    <h1>Perfil</h1>
                        <div class="grupo-campos">
                            <form>
                                <label for="nome">Nome:</label>
                                <input type="text" id="nome" name="nome" required />

                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required />

                                <label for="cpf">CPF:</label>
                                <input type="text" id="cpf" name="cpf" required />

                                <label for="dataNascimento">Data de Nascimento:</label>
                                <input type="date" id="dataNascimento" name="dataNascimento" required />

                            </form>
                        </div>

                        <div class="grupo-campos">
                            <form>
                                <label for="sobrenome">Sobrenome:</label>
                                <input type="text" id="sobrenome" name="sobrenome" required />

                                <label for="genero">Gênero:</label>
                                <input type="text" id="genero" name="genero" />

                                <label for="telefone">Telefone:</label>
                                <input type="tel" id="telefone" name="telefone" />

                            </form>
                        </div>
                    <button type="submit">Editar</button>
                    </div>
                </body>
            </html>
        </div>
    );
}

export default Perfil;