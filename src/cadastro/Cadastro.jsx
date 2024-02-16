import './cadastro.css';

const Cadastro = () => {
    return(
        <body>
            <div class="container">
                <h1>Carona Solidária</h1>
                <p>Bem-vindo ao nosso sistema de carona solidária! Nosso objetivo é conectar motoristas com lugares disponíveis em seus veículos a passageiros que precisam de uma carona para o mesmo destino, promovendo assim a partilha de recursos e a redução de emissões de carbono.</p>
                <form id="caronaForm" action="/pagina-de-oferta-de-carona.html">
                <button type="submit">Oferecer Carona</button>
                </form>
            </div>
        </body>
    );
};

export default Cadastro