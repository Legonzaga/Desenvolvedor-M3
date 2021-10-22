import { sacolaCtrl } from "../sacolaComponent/sacola.js";

window.exibirItensNaSacola = exibirItensNaSacola;

/**
 * Classe responsável pela criação do menu
 */
export default class MenuController {
  constructor() {
    this.menu = document.getElementById("menu");

    this.menu.innerHTML = `
        <div id="menuContent" class="flex space-between">            
            <div id="logo"></div>
            <div>
                <div id="itensNaBolsa" onclick="exibirItensNaSacola();">0</div>
                <div id="bagIcon" onclick="exibirItensNaSacola();"></div>                
            <div>
        </div>
        `;
  }




} // EOC



export function exibirItensNaSacola(){
    sacolaCtrl.exibirItensNaSacola();
}