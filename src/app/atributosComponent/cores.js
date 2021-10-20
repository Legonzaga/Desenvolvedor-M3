import Cores from "../models/cores.js";
import { tamanhoCtrl } from "./tamanho.js";
import { precoCtrl } from "./precos.js";


// Tornando o acesso universal
window.selecionarCor = selecionarCor;
window.verTodasCores = verTodasCores;
window.esconderTodasCores = esconderTodasCores;

window.exibirListaCoresMobile = exibirListaCoresMobile;
window.esconderListaCoresMobile = esconderListaCoresMobile;
/**
 * Classe para o controle da View relacionada Cores do produto
 */
export default class CoresController {
  cores;
  contador = 0;
  qtdCoresExibir = 5; // Cores para exibição inicial
  qtdTotalCores; // Quantidade total de cores
  coresSelecionadas = [];

  constructor() {
    this.cores = new Cores();
    this.qtdTotalCores = this.cores.listaCores.length;
  }

  // Construção da view da Lista de Cores na sidebar
   exibirCores() {     
    let listaCores = `            
        <div id="listaCores" class="flex column">            
          <div class="flex space-between flex-center" display:inline-flex;>
            <h3>CORES</h3>
            <div id="btnMobExibirCores" onclick="exibirListaCoresMobile()"><h3>&#x2b;</h3></div>
            <div id="btnMobEsconderCores" onclick="esconderListaCoresMobile()"><h3>&#9866;</h3></div>
          </div>
        `;

    listaCores += `
      <div id="cores">
    `;

    for (var i = 0; i < this.qtdCoresExibir; i++) {
      let cor = `    
            <div class="flex center">                
                <label class="container"> ${this.cores.listaCores[i]}
                <input name="cor" type="checkbox" onclick="selecionarCor();" value="${this.cores.listaCores[i]}">
                <span class="checkmark"></span>
                </label>                                
            </div>`;

      listaCores += cor;
    }

    listaCores += `
      </div>
    `;



    // Condicional Ternário para exbir/esconder lista de cores
    listaCores +=
      this.qtdCoresExibir === this.qtdTotalCores
        ? `<a href="#" style="text-decoration:undeline;" onclick="esconderTodasCores()">Esconder</a>`
        : `<a href="#" style="text-decoration:undeline;" onclick="verTodasCores()">Ver todas as cores</a>`;

    listaCores += `
        
        </div>`;

    return listaCores;
  }

  /// Exibe a lista com todas as cores do array de cores
  exibirListaCompletaCores() {
    this.qtdCoresExibir = this.qtdTotalCores;
    document.getElementById("listaCores").innerHTML = this.exibirCores();
  }

  /// Exibe apenas as 5 cores iniciais da lista
  esconderListaCompletaCores() {
    this.qtdCoresExibir = 5;
    document.getElementById("listaCores").innerHTML = this.exibirCores();
  }

} // EOC

/*###################################################################################### */

export const coresCtrl = new CoresController();

/// Recebe o evento onclick. Exibe lista completa de cores na sidebar
export function verTodasCores() {
  coresCtrl.exibirListaCompletaCores();

  let cor = document.getElementsByTagName("cor").value;
  console.log(cor);
}

/// Recebe o evento onclick. Esconde lista completa de cores na sidebar
export function esconderTodasCores() {
  coresCtrl.esconderListaCompletaCores();
}

// Seleção para o filtro de cores
export function selecionarCor() {

  coresCtrl.coresSelecionadas = []; 

  let corSelecionada = document.getElementsByName("cor");

  for (const c of corSelecionada) {
    if (c.checked) {      
      coresCtrl.coresSelecionadas.push(c.defaultValue);
    }
  }  
  let produtos = filtrarProdutos(coresCtrl.coresSelecionadas, tamanhoCtrl.tamanhoSelecionado, precoCtrl.faixaPrecoSelecionada);  //Função definida em produtos.js

  console.log(coresCtrl.coresSelecionadas);
}


export function exibirListaCoresMobile(){
  
  document.getElementById("btnMobExibirCores").addEventListener('click', function(){
    
    this.style.display = 'hidden'; 
    
    document.getElementById("btnMobEsconderCores").style.display = 'flex';
    document.getElementById("btnMobEsconderCores").style.visibility = 'visible';

    document.getElementById("btnMobExibirCores").style.display = 'none';

    document.getElementById("cores").style.visibility = 'visible';    
    
  });
}

export function esconderListaCoresMobile(){
  
  document.getElementById("btnMobEsconderCores").addEventListener('click', function(){
    
    this.style.display = 'none';    
    
    document.getElementById("btnMobExibirCores").style.visibility = 'visible';
    document.getElementById("btnMobExibirCores").style.display= 'flex';

    document.getElementById("cores").style.visibility = 'hidden';    
    
    document.getElementById("cores").style.visibility = 'hidden';    
  });
}
