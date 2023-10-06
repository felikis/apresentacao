import Envia from "./Envia.js";
//import BuscaRadioController from "../controller/BuscaRadioController.js";
import Main,{buscaRadio} from "../Main.js";


class BuscaRadio extends Envia{
    constructor(){
        super();
        
    }

    transmite(patrimonio,pagina){
        const dados = new FormData();//
        
        dados.append('class',pagina);
        dados.append('patrimonio',patrimonio);
        //console.log(dados.get('comando'))
        this._fetch = fetch(`server/${pagina}.php`, {//envia para cadastraUsuario.phps
            method: "POST",
            body: dados,
          
          })
          
          .then((resp) => resp.json()) //retorna resposta pro cliente
          .then((resp) => {
            if(resp.statusDaResposta == 'ok'){
                buscaRadio.atualizaFormulario(resp)
                return;
            }
            console.log('verifique o patrimonio informado')
          }) //retorna resposta pro cliente
         
    }
}

export default BuscaRadio;