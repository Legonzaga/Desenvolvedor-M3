window.exibirFiltrarMobile = exibirFiltrarMobile;
window.fecharFiltroMobile = fecharFiltroMobile;

import CoresController from "../atributosComponent/cores.js";
import TamanhoController from "../atributosComponent/tamanho.js";
import PrecoController from "../atributosComponent/precos.js";
import { coresCtrl } from "../atributosComponent/cores.js";
import { tamanhoCtrl } from "../atributosComponent/tamanho.js";

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

  // Exibe sidebar desktop
  exibirSidebar() {
    let sidebar = `
        <div class="flex-1 center"><h1>Blusas</h1></div>
        <div id="filtroMobile" class="flex flex-1">
          <div style="flex:0.3;"></div>
          <div id="linkFitroMobile" class="flex-1" onclick="exibirFiltrarMobile();">Filtrar</div>
          <div id="linkOrdenarMobile" class="flex-1">Ordenar</div>
          <div style="flex:0.3;"></div>
        </div>
    `;

    sidebar += this.coresControl.exibirCores();

    sidebar += this.tamanhoControl.exibirTamanhos();

    sidebar += this.precoControl.exibirFaixaPreco();

    this.conteudo.innerHTML = sidebar;
  }

  /**
   *
   */
  exibirFiltrarMobile() {
    let menuFiltroMobile = `
    <div id='menuFiltroMobile' class="">  
      <div class='flex space-between'>    
        <div class="" style="padding-left:30px;text-align:left;"><h3>FILTRAR</h3></div>
        <div class="" style="padding-right:30px;" onclick="fecharFiltroMobile()"><h3>&#x2716;</h3></div>        
      </div>
    </div>`;

    document.getElementById("sidebar").innerHTML = menuFiltroMobile;

    coresCtrl.qtdCoresExibir = coresCtrl.cores.listaCores.length;
    let cores = coresCtrl.exibirCores();
    
    document
      .getElementById("menuFiltroMobile")
      .insertAdjacentHTML("beforeend", cores);

    document.getElementById("listaCores").style.display = "flex";


    let tamanhos = tamanhoCtrl.exibirTamanhos();
        
    document.getElementById("listaCores").insertAdjacentHTML("afterend", tamanhos);
    document.getElementById("cabecalhoFiltroTamanho").style.display = "flex";

    let preco = this.precoControl.exibirFaixaPreco();
    document.getElementById("cabecalhoFiltroTamanho").insertAdjacentHTML("afterend", preco);;

    //document.getElementById("listaTamanho").style.display = "flex";
    //document.getElementById("faixaDePreco").style.display = "flex";
    //document.getElementById("idSelectOrdenacao").style.display = "flex";
  }
}

export const sidebarCtrl = new SidebarController();

export function exibirFiltrarMobile() {
  sidebarCtrl.exibirFiltrarMobile();
}

export function fecharFiltroMobile() {
  document.getElementById("menuFiltroMobile").style.display = "none";
  sidebarCtrl.exibirSidebar();
}
