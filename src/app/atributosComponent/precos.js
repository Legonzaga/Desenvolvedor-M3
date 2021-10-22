import { coresCtrl } from "./cores.js";
import { tamanhoCtrl } from "./tamanho.js";
import { filtrarProdutos } from "../produtoComponent/produto.js";
import { sidebarCtrl } from "../sidebarComponent/sidebar.js";


/** Tornando o acesso universal para que possa receber eventos do DOM */
window.selecionarFaixaPreco = selecionarFaixaPreco;

/** Mobile -Tornando o acesso universal para que possa receber eventos do DOM */
window.exibirFiltroPrecoMob = exibirFiltroPrecoMob;
window.esconderFiltroPrecoMob = esconderFiltroPrecoMob;

export default class PrecoController {
  faixaPrecoSelecionada = 0; // De 1 -5 para checkbox da Faixa de preço

  menuAbertoMobile = false; // Verifica se o menu Faixa de Preços está aberto no mobile

  constructor() {}

  /**
   *
   * @returns Cria a VIEW da Faixa de preços
   */
  exibirFaixaPreco() {

    let listaPrecos = `<div id="conteudoFaixaDePreco" class="flex column">`;

    listaPrecos += `
        <div class="flex space-between flex-center">
          <h3>FAIXA DE PREÇO</h3>
          <div id="btnMobExibirPrecoMob" onclick="exibirFiltroPrecoMob();"><h3 style="font-size:2em; font-weight:900;">&#x2b;</h3></div>
          <div id="btnMobEsconderPrecoMob" onclick="esconderFiltroPrecoMob()"><h3>&#9866;</h3></div>          
        </div>
        <div id="faixaDePreco" class="column">            
                <label class="container">de R$0 até R$50
                <input type="checkbox" name="faixaDePreco" value="1" onclick="selecionarFaixaPreco(this)">
                <span class="checkmark"></span>
                </label>

                <label class="container">de R$51 até R$150
                <input type="checkbox" name="faixaDePreco" value="2" onclick="selecionarFaixaPreco(this)">
                <span class="checkmark"></span>
                </label>

                <label class="container">de R$151 até R$300
                <input type="checkbox" name="faixaDePreco" value="3" onclick="selecionarFaixaPreco(this)">
                <span class="checkmark"></span>
                </label>            

                <label class="container">de R$301 até R$500
                <input type="checkbox" name="faixaDePreco" value="4" onclick="selecionarFaixaPreco(this)">
                <span class="checkmark"></span>
                </label>            

                <label class="container">a partir de R$1
                <input type="checkbox" name="faixaDePreco" value="5" onclick="selecionarFaixaPreco(this)">
                <span class="checkmark"></span>
                </label>                        
        </div>    
        `;

      listaPrecos += `<div>`;

    return listaPrecos;
  }

  selecionarFaixaPreco(selecao) {    

    if(selecao.checked === false){
      this.faixaPrecoSelecionada = 0;
    } else {

      let faixaDePreco = document.getElementsByName("faixaDePreco");

      //Resetando os checkboxes
      for (const p of faixaDePreco) {
        if (p.checked) {
          p.checked = false;          
        }
      }
  
      selecao.checked = true;
  
      this.faixaPrecoSelecionada = selecao.value;
  
    }

    filtrarProdutos(
      coresCtrl.coresSelecionadas,
      tamanhoCtrl.tamanhoSelecionado,
      this.faixaPrecoSelecionada
    );
  }
} //EOC

export const precoCtrl = new PrecoController();

export function selecionarFaixaPreco(selecao) {
  precoCtrl.selecionarFaixaPreco(selecao);
}

export function exibirFiltroPrecoMob(){

  precoCtrl.menuAbertoMobile = true;
  sidebarCtrl.exibirBtnFiltro();

  let btnMobExibirPrecoMob = document.getElementById('btnMobExibirPrecoMob');
  let btnMobEsconderPrecoMob = document.getElementById('btnMobEsconderPrecoMob');

  let faixaDePreco = document.getElementById('faixaDePreco');
  faixaDePreco.style.display = 'block';

  btnMobExibirPrecoMob.style.display = 'none';
  btnMobEsconderPrecoMob.style.display = 'block';

}


export function esconderFiltroPrecoMob(){

  precoCtrl.menuAbertoMobile = false;
  
  sidebarCtrl.exibirBtnFiltro();

  let btnMobExibirPrecoMob = document.getElementById('btnMobExibirPrecoMob');
  let btnMobEsconderPrecoMob = document.getElementById('btnMobEsconderPrecoMob');

  let faixaDePreco = document.getElementById('faixaDePreco');
  faixaDePreco.style.display = 'none';

  btnMobExibirPrecoMob.style.display = 'block';
  btnMobEsconderPrecoMob.style.display = 'none';

}