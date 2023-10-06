import Controller from "./Controller.js";


class CadastraUsuarioController extends Controller{
    constructor(){
        super();
        this._nomeUsuario;
    }

    enviaTecnico(event){
        event.preventDefault();
        let usuario = new Tecnico();
        let $ = document.querySelector.bind(document);
        usuario.nome    = $('#usuario').value;
        usuario.senha   = $('#senha').value;
       
        this._statup.cadastraUsuario(usuario);
    }

    enviaGestor(){
        let usuario = new Gestor();

        this._statup.cadastraUsuario(usuario);
    }
}

export default CadastraUsuarioController