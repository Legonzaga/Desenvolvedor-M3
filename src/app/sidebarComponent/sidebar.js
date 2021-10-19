import CoresController from "../atributosComponent/cores.js";
import TamanhoController from "../atributosComponent/tamanho.js";
import PrecoController from "../atributosComponent/precos.js";

export default class SidebarController {
  coresControl;
  tamanhoControl;
  precoControl;

  constructor() {
    this.coresControl = new CoresController();
    this.tamanhoControl = new TamanhoController();
    this.precoControl = new PrecoController();

    this.conteudo = document.getElementById("sidebar");

    this.exibirSidebar();
  }

  exibirSidebar() {
    let sidebar = `
        <div><h1>Blusas</h1></div>
    `;

    let cores = this.coresControl.exibirCores();
    sidebar += cores;

    sidebar += this.tamanhoControl.exibirTamanhos();

    sidebar += this.precoControl.exibirFaixaPreco();

    this.conteudo.innerHTML = sidebar;
  }
}
