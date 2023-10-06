import Main,{buscaRadioController} from "../Main.js";
import View from "./View.js";

class BuscaRadioView extends View{
    constructor(elemento){
        super(elemento);
        this._lista;
    }


    _template(){
      this._elemento.innerHTML = `
        <div id="" style="width:100%; position:relative; height:200px;padding-top:60px; background-color:#28679f;text-align: center;">
            
        </div>
        <div class="container border border-1 p-2">
            <span style="color:#000;font-size:16spx"> Informe o patrimônio ou serial do rádio</span>
            <form class="row g-3 mt-5">
                <div class="col-auto">
                    <!--<label for="patrimonio" class="">Patrimônio</label>-->
                    <input type="text" class="form-control" placeholder="Nº de patrimônio ou serial" id="patrimonio">
                </div>
                <div class="col-auto">
                    <button type="button" id="btnBuscaRadio" class="btn btn-primary mb-3">Buscar rádio</button>
                </div>

                <div class="col-4">
                  <button type="button" class="btn btn-primary">Cancelar</button>
                </div>

            </form>
        </div>

        <div id="formulario">
        </div>

        <div id="lista">
        </div>
        `
        let btnBuscaRadio = document.getElementById('btnBuscaRadio');
        let patrimonio = document.getElementById('patrimonio').value;
        btnBuscaRadio.addEventListener(('click'),()=>{
          buscaRadioController.buscaRadio(patrimonio)
        })
    }

    atualizaFormulario(dados){
        let form = document.getElementById('formulario')
       
        form.innerHTML = `
        
        <form class="row g-3 mt-2">
        <div class="col-md-4">
          <label for="isReadio" class="form-label">ID do rádio</label>
          <input type="text" class="form-control" disabled id="idRadio">
        </div>
        <div class="col-md-4">
          <label for="pat" class="form-label">Patrimônio</label>
          <input type="text" class="form-control" id="pat">
        </div>
        <div class="col-md-6">
          <label for="serial" class="form-label">Nº de série</label>
          <input type="text" class="form-control" id="serial">
        </div>
        <div class="col-12">
          <label for="marca" class="form-label">Marca</label>
          <input type="text" class="form-control" id="marca">
        </div>
        <div class="col-12">
          <label for="modelo" class="form-label">Modelo</label>
          <input type="text" class="form-control" id="modelo">
        </div>
      
        <div class="col-md-4">
          <label for="inputState" class="form-label">Unidade</label>
          <input type="text" class="form-control" id="local">
        </div>
        <div class="col-md-2">
          <label for="descLocal" class="form-label">Local</label>
          <input type="text" class="form-control" id="descLocal">
        </div>

        <div class="col-md-2">
          <button type="button" class="btn btn-primary">Salvar alterações</button>
          <button type="button" id="adicionaRadio" class="btn btn-primary">Adicionar rádio</button>
        </div>
      
       </form>
        `
        this._carregaFormulario(dados);

        const promise = new Promise((resolve,reject)=>{
          let adiciona = document.getElementById('adicionaRadio');
          adiciona.addEventListener(('click'),()=>{
              buscaRadioController.adicionaNaLista((dados));
              resolve(buscaRadioController.listaDeRadios);//chama a promise .then de ok
          });
        });

        promise.then(
          (lista)=>{
            this.atualizaListaDeRadio(lista)
          }
        );
        
    }

    _carregaFormulario(dados){
      let $ = document.querySelector.bind(document);
      $('#idRadio').value     = dados.idRadio;
      $('#pat').value         = dados.patrimonio;
      $('#serial').value      = dados.serie;
      $('#marca').value       = dados.marca;
      $('#modelo').value      = dados.modelo;
      $('#local').value       = dados.local;
      $('#descLocal').value   = dados.descricaoLocal;

    }

    atualizaListaDeRadio(listaDeRadio){
      this._lista = document.getElementById('lista')
           
      this._lista.innerHTML = 
      `
        <ul class="list-group list-group-flush mt-4">
          ${listaDeRadio.map((item,indice)=>{//map roda mais de uma vez e cria listner apenas uma
           
            return`
            
            <li class="list-group-item position-relative">ID: ${item.idRadio} Patrimônio:${item.patrimonio}-${indice}
              <svg id="${indice}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash position-absolute top-0 end-0" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg>
            </li>
            
            `
          }).join('')}
        </ul>
      `
      listaDeRadio.map((item,indice)=>{
        let removeItem = document.getElementById(indice);
            removeItem.addEventListener(('click'),()=>{
              buscaRadioController.removeDaLista(indice);
          })
      })

    }//fecha a funcao
}

export default BuscaRadioView;