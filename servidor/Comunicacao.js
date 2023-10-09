
class Comunicacao{
    constructor(envio){
        this._envio = envio;
    }

    fazEnvio(dados,pagina){
        this._envio.transmite(dados,pagina);
    }
}

export default Comunicacao;