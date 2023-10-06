class Usuario{
    constructor(){
        this._nome;
        this._senha;
        this._numeroPM;
    }

    set nome(nome){
        if(nome.length >= 4){
            this._nome = nome;
            return true;
        }
        return false;
        //alert('O nome deve possuir mais de 3 caracteres.'); dei]xar esta responsabilidade para a view
    }

    set senha(senha){
        if(senha.length >= 4){
            this._senha = senha;
            return true;
        }
        return false;
        //alert('A senha deve possuir mais de 3 caracteres.');deixar esta responsabilidade para a view
    }

    set matricula(numero){
        if(numero.length == 7){
            this._numeroPM = numero;
            return true;
        }
        return false;
        //alert('Número inválido.')deixar esta responsabilidade para a view
    }

    get nome(){
        return this._nome;
    }

    get senha(){
        return this._senha;
    }
}

export default Usuario;