import Comunicacao from '../server/Comunicacao.js';
import EnviaLogin from '../model/EnviaLogin.js';
import BuscaRadio from '../model/BuscaRadio.js';

class GetStart{
    constructor(){
        this._comunica;
    }

    loginUsuario(usuario){console.log(usuario)
        this._comunica = new Comunicacao(new EnviaLogin());
        this._comunica.fazEnvio(usuario,'LoginUsuario'); 
    }

    cadastraUsuario(usuario){
        this._comunica = new Comunicacao(new EnviaUsuario());
        this._comunica.fazEnvio(usuario,'CadastraUsuario');     
    }

    cadastraEquipamento(radio){
        this._comunica = new Comunicacao(new EnviaRadio());
        this._comunica.fazEnvio(radio,'CadastraRadio');  
    }

    enviaPatrimonio(patrimonio){
        this._comunica = new Comunicacao(new BuscaRadio());
        this._comunica.fazEnvio(patrimonio,'BuscaRadio');  //no retorno abrir view com dados do radio na classe buscaradio
    }
}

export default GetStart;
/***tem a view busca radio com o campo de entrada do patrimonio
 * e o retorno desta busca abre a view com os dados do radios
 */