import GetStart from '../model/GetStart.js';

class Controller{
    constructor(){
        this._startup = new GetStart();
    }

    carregaView(view){
        view.update();
    }
}

export default Controller
