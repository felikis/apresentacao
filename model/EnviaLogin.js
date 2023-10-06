import Envia from "./Envia.js";
import BuscaRadioView from "../view/BuscaRadioView.js";

class EnviaLogin extends Envia{
    constructor(){
        super();
        this._buscaRadioView = new BuscaRadioView('#conteudo');
    }
    //salva na base de dados as informações referente à programação do radio como id, patrimonio, etc
    transmite(usuario,pagina){
        let fomradata = new FormData();
        fomradata.append('class',pagina);
        fomradata.append('usuario',JSON.stringify(usuario));

        this._fetch = fetch(`server/${pagina}.php`, {//envia para cadastraRadio.php
            method: "POST",
            body: fomradata,
            
          })
          .then((resp) => resp.json()) 
          .then((resp) => {
            if(resp.statusDaResposta == 'ok'){ console.log(resp.resposta)
                this._buscaRadioView.update();
            }
           
          }) 
    }
}

export default EnviaLogin;