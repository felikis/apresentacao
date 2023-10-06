

class FormUsuarioView extends View{
    constructor(elemento){
        super(elemento)
    }

    _template(){
       
        return`
        
        <section>
            <form >
                <label>Usuário:</label>
                <input required id="usuario" type="text"/>
                <label>Senha:</label>
                <input required id="senha" type="password"/>
                <input type="button" value="Cadastrar"/>
            </form>
        </section>
        <div style="border: 1px solid #000;">
            dsffsdfsdfsdf
        </div>
       
        `
    }
}

