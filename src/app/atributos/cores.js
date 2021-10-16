import Cores from "../models/cores.js";

export default class CoresController {
  cores;
  contador = 0;
  qtdCoresExibir = 5; // Cores para exibição inicial
  qtdTotalCores; // Quantidade total de cores

  constructor() {
    this.cores = new Cores();
    this.qtdTotalCores = this.cores.listaCores.length;
  }

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
                <input name="cor" type="checkbox" >
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

  exibirListaCompletaCores() {
    this.qtdCoresExibir = this.qtdTotalCores;
    document.getElementById("listaCores").innerHTML = this.exibirCores();
  }

  esconderListaCompletaCores() {
    this.qtdCoresExibir = 5;
    document.getElementById("listaCores").innerHTML = this.exibirCores();
  }
} // EOC

const coresCtrl = new CoresController();

/// Exibe lista completa de cores na sidebar
export function verTodasCores() {
  coresCtrl.exibirListaCompletaCores();
  
  let cor = document.getElementsByTagName('cor').value;
  console.log(cor);
}

/// Esconde lista completa de cores na sidebar
export function esconderTodasCores() {
  coresCtrl.esconderListaCompletaCores();
}
