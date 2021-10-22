import Produto from "../models/produto.js";
import SacolaController, { sacolaCtrl } from "../sacolaComponent/sacola.js";
import ProdutoController from "../produtoComponent/produto.js";
import CoresController from "../atributosComponent/cores.js";
import { ordenacaoCtrl } from "../atributosComponent/ordenacao.js";
import { produtoCtrl } from "../produtoComponent/produto.js";
import { mensagemCtrl } from "../mensagemComponent/mensagem.js";
export default class VitrineController {
  listaProdutos = [];
  produto;
  sacola;
  qtdProdutosTotal;
  qtdProdutosExibindo;
  vitrine;

  constructor() {

    this.vitrine = document.getElementById("vitrine");

    this.sacola = new SacolaController(); // Instanciando o controlador da sacola
    this.produto = new Produto(); // instanciando o controlador de produtos
    this.qtdProdutosTotal = this.produto.listaProdutos;
    this.listaProdutos = this.produto.listaProdutos;

    produtoCtrl.exibindoNaVitrine = this.listaProdutos;
    produtoCtrl.contador = produtoCtrl.exibindoNaVitrine.length;

    produtoCtrl.novaListaProdutos = produtoCtrl.exibindoNaVitrine;
    produtoCtrl.contador = 3; // Iniciando a vitrine exibindo 3 produtos
  } // Fim do consttrutor


  /**
   * Cria a View da Vitrine para exibir os produtos
   * @param {*} listaProdutos
   */
  exibirProdutos(listaProdutos) {
    //Se o somatório do contador de Produtos na Vitrine for maior que o
    //array de produtos na memoris
    if (produtoCtrl.contador > listaProdutos.length) {
      produtoCtrl.contador = listaProdutos.length;
    }

    this.vitrine.innerHTML = ordenacaoCtrl.exibirSelectOrdenacao();

    let lista = ``;

    //
    for (var i = 0; i < produtoCtrl.contador; i++) {
      lista += `<div class="produto">
                <div class="foto grow"><img src=" ${
                  listaProdutos[i].urlImagem
                }"></div>
                <div class="nomeProduto"> ${listaProdutos[i].descricao}</div>
                <div class="preco">R$ ${listaProdutos[i].preco
                  .toFixed(2)
                  .replace(".", ",")}</div>
                <div class="parcelamento">até ${
                  listaProdutos[i].numeroParcelas
                }x sem juros</div>`;

      // Escondendo o botão de compra caso o item não tenha mais estoque
      if (listaProdutos[i].quantidade !== 0) {
        lista += `<div class="btnComprar swing" onclick="adicionarProdutoCarrinho(${listaProdutos[i].id})" id="${listaProdutos[i].id}"><p>Comprar</p></div>
            </div>`;
      } else {
        lista += `<div style="text-align:center;" onclick="" id="${listaProdutos[i].id}"><p>ESGOTADO</p></div>
            </div>`;
      }

    }

    this.vitrine.innerHTML += lista;

    let btnCarregarMais = ``;

    if (listaProdutos.length <= produtoCtrl.contador) {
      btnCarregarMais = `
      <div id="divBtnCarregarMais" onclick="carregarMaisProdutos()">
        <div style="color:#000; font-weight:600;"><code>Listagem completa. Exibindo ${produtoCtrl.contador} produto(s).</h3></code>
      </div>`;
    } else {
      if (listaProdutos.length != 0) {
        btnCarregarMais = `<div id="divBtnCarregarMais" onclick="carregarMaisProdutos()"><div id="btnCarregarMais">Carregar Mais</div></div>`;
      }
    }
    
    this.vitrine.innerHTML += btnCarregarMais;
  }

} //EOC

/** ########################################################################### */

/**
 * Instancia a Vitrine 
 * Carrega a View da vitrine recebendo como parâmetro
 *  um array de produtos
 */
export const vitrineCtrl = new VitrineController();

vitrineCtrl.exibirProdutos(produtoCtrl.exibindoNaVitrine);

/**
 * Método de acesso universal para carregar a vitrine 
 * @param {*} produtos 
 */
export function carregarVitrine(produtos) {
  console.log(produtos);
  vitrineCtrl.exibirProdutos(produtos);
}

export function exibirFiltroProdutos() {
  vitrineCtrl.exibirFiltroProdutos();
}

/**
 * Adiciona mais 3 produtos na vitrine
 * @param {*} listaProdutos
 */
export function carregarMaisProdutos() {
  produtoCtrl.contador += 3; // Adicionando mais 3 produtos a vitrine

  document.getElementById("divBtnCarregarMais");

  vitrineCtrl.exibirProdutos(produtoCtrl.novaListaProdutos);
}

/** Adiciona um produto à sacola e atualiza na view*/
export function adicionarProdutoCarrinho(produto) {
  sacolaCtrl.adicionarNaSacola(produto);
  let bag = document.getElementById("itensNaBolsa");
  bag.innerHTML = sacolaCtrl.itensNaSacola.length;
  document.getElementById("itensNaBolsa").style.animation = "grow";
  document.getElementById("itensNaBolsa").style.animationDuration = "2s";
  document.getElementById("bagIcon").style.animation = "grow";
  document.getElementById("bagIcon").style.animationDuration = "2s";
}

// Tornando o acesso niversal
window.carregarVitrine = carregarVitrine;
window.exibirFiltroProdutos = exibirFiltroProdutos;
window.adicionarProdutoCarrinho = adicionarProdutoCarrinho;

window.carregarMaisProdutos = carregarMaisProdutos;
