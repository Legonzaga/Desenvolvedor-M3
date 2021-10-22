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
          <div class="menu-bar">
            <ul>
              <li>
                <div id="opcaoOrdenacao1">
                <a href="#" id="op1">Ordenar por</a>
                </div>
                <ul>
                  <li onclick="ordenarPorMaiorPreco('1');">
                    <a href="#" >Mais recentes</a>
                  </li>
                  <li onclick="ordenarPorMaiorPreco('2');">
                    <a href="#">Meno preço</a>
                  </li>
                  <li onclick="ordenarPorMaiorPreco('3');">
                    <a href="#">Maior preco</a>
                  </li>                            
                </ul>
              </li>
            </ul>
          </div>
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

export function ordenarPorMaiorPreco(opcao) {
    let select = document.getElementById("idSelectOrdenacao");

    //var ordenacaoSelecionada = select.options[select.selectedIndex].value;
    var ordenacaoSelecionada = opcao;
    switch (ordenacaoSelecionada) {
        case "1":
            ordenacaoCtrl.ordenarPorData();
            document.getElementById('opcaoOrdenacao1').innerHTML += ' <small>Mais recentes</small>';
            break;

        case "2":
            ordenacaoCtrl.ordenarPorMenoPreco();
            document.getElementById('opcaoOrdenacao1').innerHTML += ' <small>Menor preço</small>';
            break;

        case "3":
            ordenacaoCtrl.ordenarPorMaiorPreco();
            document.getElementById('opcaoOrdenacao1').innerHTML += ' <small>Maior preço</small>';
            break;
    }
}


export function ordenarPorDataMob() {
    ordenacaoCtrl.ordenarPorData();
}

export function ordenarPorMenoPrecoMob() {
    ordenacaoCtrl.ordenarPorMenoPreco();
}

export function ordenarPorMaiorPrecoMob() {
    ordenacaoCtrl.ordenarPorMaiorPreco();
}