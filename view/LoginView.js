import View from '../view/View.js'
import LoginController from '../controller/LoginController.js';


class LoginView extends View{
    constructor(elemento){
        super(elemento);
        this._login;
    }

    _template(){
        this._elemento.innerHTML = 
        `
        <div id="" style="width:100%; position:relative; height:200px;padding-top:60px; background-color:#28679f;text-align: center;">
            <span style="color:#FFF;font-size:25px"></span>
        </div>
        <section>
            <form class="mt-4">
                <div class="mb-3">
                <label for="usuario" class="form-label">Usuário:</label>
                <input type="text" class="form-control" id="usuario">
                </div>
                <div class="mb-3">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senha">
                </div>
                
                <button type="button" id="btnLogin" class="btn btn-primary">Entrar</button>
            </form>
        </section>
    
        `
        let btnLogin = document.getElementById('btnLogin')
        btnLogin.addEventListener(('click'),()=>{
            let usuario = document.getElementById('usuario').value;
            let senha   = document.getElementById('senha').value;
           
            this._login = new LoginController();
            this._login.autentica(usuario,senha);
        })
    }
    
}

export default LoginView