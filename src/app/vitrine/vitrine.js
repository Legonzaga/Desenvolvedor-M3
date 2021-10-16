import Produto from "../models/produto.js";
import SacolaController from "../sacola/sacola.js";

export default class VitrineController {
  listaProdutos = [];
  produto;
  sacola;
  constructor() {
    this.vitrine = document.getElementById("vitrine");

    this.produto = new Produto();
    this.listaProdutos = this.produto.listaProdutos;
    this.sacola = new SacolaController();

    this.exibirProdutos(this.listaProdutos);
    //this.filtroPorTamanho(this.listaProdutos);
    this.vitrine.innerHTML += `
        <div id="divBtnCarregarMais"><div id="btnCarregarMais">Carregar Mais</div></div>
    `;
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

  // Carrega a lista de produtos
  exibirProdutos(listaProdutos) {
    console.log(listaProdutos);

    let lista = `    
        <div id="selectOrdenacao" class="select">
          <select >
            <option value="Option 1">Ordenar por:</option>
            <option class="selectOpt" value="2">Mais recentes</option>
            <option class="selectOpt" value="3">Menor preço</option>
            <option class="selectOpt" value="4">Maior preço</option>
          </select>
        </div>
        `;

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
                <div class="btnComprar" onclick="adicionarProduto(${ listaProdutos[i].id })" id="${listaProdutos[i].id}"><p>Comprar</p></div>
            </div>`;
    }

    const item = lista;

    this.vitrine.innerHTML = item;
  }
} //EOC


const sacola = new SacolaController();

/// Adiciona um produto à sacola
export function adicionarProduto(produto) {

  console.log("Clicked " + produto);  

  sacola.adicionarNaSacola(produto);

  var bag = document.getElementById('itensNaBolsa').innerHTML = sacola.itensNaSacola.length;
}
