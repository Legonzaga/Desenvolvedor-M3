import Cores from "../models/cores.js";
import { tamanhoCtrl } from "./tamanho.js";
import { precoCtrl } from "./precos.js";


// Tornando o acesso universal
window.selecionarCor = selecionarCor;
window.verTodasCores = verTodasCores;
window.esconderTodasCores = esconderTodasCores;


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
        <div id="listaCores">            
        <div><h3>CORES</h3></div>                
        <fieldset>
        `;

    for (var i = 0; i < this.qtdCoresExibir; i++) {
      let cor = `    
            <div id="cores">                
                <label class="container"> ${this.cores.listaCores[i]}
                <input name="cor" type="checkbox" onclick="selecionarCor();" value="${this.cores.listaCores[i]}">
                <span class="checkmark"></span>
                </label>                                
            </div>`;

      listaCores += cor;
    }

    // Condicional Ternário para exbir/esconder lista de cores
    listaCores +=
      this.qtdCoresExibir === this.qtdTotalCores
        ? `<a href="#" style="text-decoration:undeline;" onclick="esconderTodasCores()">Esconder</a>`
        : `<a href="#" style="text-decoration:undeline;" onclick="verTodasCores()">Ver todas as cores</a>`;

    listaCores += `
        </fieldset>
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


