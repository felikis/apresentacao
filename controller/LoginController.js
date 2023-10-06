import Controller from './Controller.js';
import Tecnico from '../model/Tecnico.js';


class LoginController extends Controller{
    constructor(){
        super();
       
    }

    autentica(nomeUsuario,senha){
        let usuario = new Tecnico();
        usuario.nome    = nomeUsuario;
        usuario.senha   = senha;
        this._startup.loginUsuario(usuario);
    }
}

export default LoginController;