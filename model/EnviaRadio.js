class EnviaRadio extends Envia{
    constructor(){
        super();
    }
//salva na base de dados as informações referente à programação do radio como id, patrimonio, etc
    transmite(radio,pagina){
        let fomradata = new FormData();
        fomradata.append('class',pagina);
        fomradata.append('radios',JSON.stringify(radio));

        this._fetch = fetch(`server/${pagina}.php`, {//envia para cadastraRadio.php
            method: "POST",
            body: fomradata,
            
          })
          .then((resp) => resp.json()) 
          .then((resp) => {
            if(resp.resposta == 'ok'){
                console.log('usuario cadastrado com sucesso...',resp)
            }
           
          }) 
         
    }
}