import Envia from '../model/Envia.js';

/**envia informações referente ao cadastro e login de usuarios */

class EnviaUsuario extends Envia{
    constructor(){
        super();
    }

    transmite(usuario,pagina){
        const dados = new FormData();//

        dados.append('class',pagina);
        dados.append('usuario',JSON.stringify(usuario));
        //console.log(dados.get('comando'))
        this._fetch = fetch(`server/${pagina}.php`, {//envia para cadastraUsuario.phps
            method: "POST",
            body: dados,
          
          })
          .then((resp) => resp.json()) //retorna resposta pro cliente
          .then((resp) => {
            if(resp.statusDaResposta == 'ok'){
                console.log('usuario cadastrado com sucesso...',resp);
                return;
            }
            console.log('usuario ja cadastrado no sistema')
          }) //retorna resposta pro cliente
         
    }
}

export default EnviaUsuario;
