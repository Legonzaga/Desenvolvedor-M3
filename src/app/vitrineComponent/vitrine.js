import Produto from "../models/produto.js";
import SacolaController from "../sacolaComponent/sacola.js";
import ProdutoController from "../produtoComponent/produto.js";
import CoresController from "../atributosComponent/cores.js";
import { ordenacaoCtrl } from "../atributosComponent/ordenacao.js";
import produtoCtrl from "../produtoComponent/produto.js";

// Tornando o acesso niversal
window.carregarVitrine = carregarVitrine;
window.exibirFiltroProdutos = exibirFiltroProdutos;
window.adicionarProdutoCarrinho = adicionarProdutoCarrinho;


export default class VitrineController {
  listaProdutos = [];
  produto;
  sacola;
  constructor() {

    this.vitrine = document.getElementById("vitrine");

    this.produto = new Produto();
    this.listaProdutos = this.produto.listaProdutos;
    this.sacola = new SacolaController();
   
    produtoCtrl.exibindoNaVitrine = this.listaProdutos;

    this.exibirProdutos(produtoCtrl.exibindoNaVitrine);
    

  }

  // Carrega a lista de produtos
  exibirProdutos(listaProdutos) {      

    let lista = ``;

    lista += ordenacaoCtrl.exibirSelectOrdenacao();

    for (var i = 0; i < listaProdutos.length; i++) {
      lista += `<div class="produto">
                <div class="foto"><img src=" ${
                  listaProdutos[i].urlImagem
                }"></div>
                <div class="nomeProduto"> ${listaProdutos[i].descricao}</div>
                <div class="preco">R$ ${listaProdutos[i].preco
                  .toFixed(2)
                  .replace(".", ",")}</div>
                <div class="parcelamento">até ${
                  listaProdutos[i].numeroParcelas
                }x sem juros</div>
                <div class="btnComprar" onclick="adicionarProdutoCarrinho(${ listaProdutos[i].id })" id="${listaProdutos[i].id}"><p>Comprar</p></div>
            </div>`;
    }    

    this.vitrine.innerHTML = lista;

    this.vitrine.innerHTML += `
        <div id="divBtnCarregarMais"><div id="btnCarregarMais">Carregar Mais</div></div>
    `;

  }
  
  /**
   * 
   */
  exibirFiltroProdutos(){

    let coresCtrl = new CoresController();
    let produtoCtrl = new ProdutoController();

    let produtos = produtoCtrl.filtrarProdutos(coresCtrl.coresSelecionadas, [], []);

    this.exibirProdutos(produtos);

  }


  // Retorna uma lista de tamanhos UNICOS dinamicamente presente no array
  filtroPorTamanho(listaProdutos) {
    let lista = listaProdutos;

    let arrayTamanho = [];

    for (const i of lista) {
      arrayTamanho.push(i.tamanho);
    }

    let retorno = [...new Set(arrayTamanho)];
    console.log(retorno);
  }
} //EOC

/** ########################################################################### */



const sacola = new SacolaController();

/// Adiciona um produto à sacola
export function adicionarProdutoCarrinho(produto) {

  console.log("Clicked " + produto);  

  sacola.adicionarNaSacola(produto);

  var bag = document.getElementById('itensNaBolsa').innerHTML = sacola.itensNaSacola.length;
}



/** Carrega a vitrine recebendo como parâmetro
 *  um array de produtos 
 */
 const vitrineCtrl = new VitrineController();

export function carregarVitrine(produtos) {

  vitrineCtrl.exibirProdutos(produtos);

}

export function exibirFiltroProdutos(){
  vitrineCtrl.exibirFiltroProdutos();
}

