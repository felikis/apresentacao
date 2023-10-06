import GetStart from "../model/GetStart.js";
import Main,{buscaRadio} from "../Main.js";

class BuscaRadioController{
    constructor(){
        console.log('busca-controller')
        this._listaDeRadios = [];
        this._startup = new GetStart();

    }

    carregaView(view){
        view.update();
    }

    buscaRadio(patrimonio){
        this._startup.enviaPatrimonio(patrimonio);
    }

    adicionaNaLista(radio){
        this._listaDeRadios.push(radio);
        console.log('lista',this._listaDeRadios)

    }

    removeDaLista(indice){console.log('removendo ',indice)
        this._listaDeRadios.splice(indice,1);//a partir da posicao indice tira um elemento
        console.log(this._listaDeRadios)
        buscaRadio.atualizaListaDeRadio(this._listaDeRadios);
    }

    get listaDeRadios(){
        return this._listaDeRadios;
    }
}

export default BuscaRadioController;