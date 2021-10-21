import { produtoCtrl } from "../produtoComponent/produto.js";
import { carregarVitrine } from "../vitrineComponent/vitrine.js";
// Tornando o universal
window.ordenarPorMaiorPreco = ordenarPorMaiorPreco;
window.ordenarPorDataMob = ordenarPorDataMob;
window.ordenarPorMenoPrecoMob = ordenarPorMenoPrecoMob;
window.ordenarPorMaiorPrecoMob = ordenarPorMaiorPrecoMob;

/**
 * Classe responsavel pela ordenação de produtos na vitrine
 */
export default class Ordenacao {
  constructor() {}
  
  /**
   * 
   * @returns Exibe o select ordenacao de ordenacao
   */
  exibirSelectOrdenacao() {
    let selectOrdenacao = `    
        <div id="selectOrdenacao" class="select">
            <select id="idSelectOrdenacao" onchange="ordenarPorMaiorPreco();">
                <option id="ordenacaoOp" value="0">Ordenar por:</option>
                <option class="selectOpt" value="1">Mais recentes</option>
                <option class="selectOpt" value="2">Menor preço</option>
                <option class="selectOpt" value="3" >Maior preço</option>
            </select>
        </div>
        <span id="ordem"></span>
        `;
    return selectOrdenacao;
  }

  ordenarPorData() {
    produtoCtrl.exibindoNaVitrine = produtoCtrl.exibindoNaVitrine.sort(function compare(a, b) {
      return b.dataCriacao - a.dataCriacao;
    });    

    carregarVitrine(produtoCtrl.exibindoNaVitrine);
  }

  ordenarPorMenoPreco() {    
    produtoCtrl.exibindoNaVitrine = produtoCtrl.exibindoNaVitrine.sort(
      function compare(a, b) {
        if (a.preco < b.preco) return -1;
        if (a.preco > b.preco) return 1;
        return 0;
      }
    );
    carregarVitrine(produtoCtrl.exibindoNaVitrine);
  }

  ordenarPorMaiorPreco() {
    produtoCtrl.exibindoNaVitrine = produtoCtrl.exibindoNaVitrine.sort(
      function compare(a, b) {
        if (a.preco > b.preco) return -1;
        if (a.preco < b.preco) return 1;
        return 0;
      }
    );
    carregarVitrine(produtoCtrl.exibindoNaVitrine);
  }
} //EOC


export const ordenacaoCtrl = new Ordenacao();

export function ordenarPorMaiorPreco() {
  let select = document.getElementById("idSelectOrdenacao");

  var ordenacaoSelecionada = select.options[select.selectedIndex].value;

  switch (ordenacaoSelecionada) {
    case "1":
      ordenacaoCtrl.ordenarPorData();
      break;

    case "2":
      ordenacaoCtrl.ordenarPorMenoPreco();
      break;

    case "3":
      ordenacaoCtrl.ordenarPorMaiorPreco();
      break;
  }
}


export function ordenarPorDataMob(){
  ordenacaoCtrl.ordenarPorData();
}

export function ordenarPorMenoPrecoMob(){
  ordenacaoCtrl.ordenarPorMenoPreco();
}

export function ordenarPorMaiorPrecoMob(){
  ordenacaoCtrl.ordenarPorMaiorPreco();
}