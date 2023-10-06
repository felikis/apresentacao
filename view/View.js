class View{
    constructor(elemento){
        this._elemento = document.querySelector(elemento);
    }

    update(){
        this._template();
    }
}

export default View