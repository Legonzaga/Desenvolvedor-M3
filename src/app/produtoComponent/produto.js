import Produto from "../models/produto.js";
import { mensagemCtrl } from "../mensagemComponent/mensagem.js";

// Tornando o acesso universal
window.filtrarProdutos = filtrarProdutos;

export default class ProdutoController {
  listaDeProdutos = []; // Recebe os produtos cadastrados em Models/Produto.js
  novaListaProdutos = []; // Usado para realizar os para o filtro de produtos.
  exibindoNaVitrine = [];
  produtos;
  coresSelecionadas;
  tamanhoSelecionado;

  constructor() {
    this.produtos = new Produto();

    this.listaDeProdutos = this.produtos.listaProdutos;
    this.exibindoNaVitrine = this.listaDeProdutos;   
    
    
  }

  /**
   * Realiza o filtro de produtos por Cor, tamanho ou Faixa de preço
   * @param {*} arrayCores
   * @param {*} tamanhoSelecionado
   * @param {*} faixaDePreco
   * @returns
   */
  filtrarProdutos(arrayCores, tamanhoSelecionado, faixaDePreco) {
    this.novaListaProdutos = [];

    // Filtro por Cores
    this.novaListaProdutos = this.filtrarCores(
      arrayCores,
      this.novaListaProdutos
    );
    console.log(this.novaListaProdutos);

    // Filtro por Tamanho
    this.novaListaProdutos = this.filtroTamanho(
      tamanhoSelecionado,
      this.novaListaProdutos
    );
    console.log(this.novaListaProdutos);

    //Filtro por Faixa de Preço
    this.novaListaProdutos = this.filtroPreco(
      faixaDePreco,
      this.novaListaProdutos
    );
    console.log(this.novaListaProdutos);

    // NOT FOUND - Caso não encontra produtos com o filtro selecionado
    if (this.novaListaProdutos.length === 0) {
      //this.novaListaProdutos = this.listaDeProdutos;           
      
      
      setTimeout(() => {
        mensagemCtrl.exibirMensagemProdutoAusente("Não foi possível encontrar um item com o filtro de produtos definido." +
        " Por favor, selecione uma outra, cor, tamanho ou faixa de preço.")
      }, 500);     

    }

    this.exibindoNaVitrine = this.novaListaProdutos;   

    carregarVitrine(this.exibindoNaVitrine); // Definida em VitrineController. Método universal.

    return this.novaListaProdutos;
  }

  /**
   * Recebe um array de cores para o filtro
   * @param {*} arrayCores
   * @returns
   */
  filtrarCores(arrayCores, novaListaProdutos) {
    if (arrayCores.length != 0) {
      for (const cor of arrayCores) {
        let p = this.listaDeProdutos.filter((x) => x.cor == cor);

        if (p.length > 1) {
          for (const prod of p) {
            novaListaProdutos.push(prod);
          }
        } else if (p.length === 1) {
          novaListaProdutos.push(p[0]);
        }
      }
    } else {
      novaListaProdutos = this.listaDeProdutos;
    }
    return novaListaProdutos;
  }

  filtroTamanho(tamanhoSelecionado, novaListaProdutos) {
    if (tamanhoSelecionado != null && novaListaProdutos.length >= 1) {
      this.novaListaProdutos = novaListaProdutos.filter(
        (x) => x.tamanho === tamanhoSelecionado
      );
      console.log(novaListaProdutos);
    } else {
      novaListaProdutos = this.listaDeProdutos;
    }
    return this.novaListaProdutos;
  }

  filtroPreco(faixaDePreco, novaListaProdutos) {
    switch (faixaDePreco) {
      case "1":
        novaListaProdutos = novaListaProdutos.filter(
          (x) => x.preco >= 0 && x.preco <= 50
        );
        break;

      case "2":
        novaListaProdutos = novaListaProdutos.filter(
          (x) => x.preco >= 51 && x.preco <= 150
        );
        break;

      case "3":
        novaListaProdutos = novaListaProdutos.filter(
          (x) => x.preco >= 151 && x.preco <= 300
        );
        break;

      case "4":
        novaListaProdutos = novaListaProdutos.filter(
          (x) => x.preco >= 301 && x.preco <= 500
        );
        break;

      case "5":
        novaListaProdutos = novaListaProdutos.filter((x) => x.preco >= 1);
        break;
    }

    return novaListaProdutos;
  }
} // EOC

/** ########################################################################## */



export const produtoCtrl = new ProdutoController();
/**
 * Funcão universal. Recebe um evento do DOM para filtrar os produtos.
 * @param {*} arrayCores
 * @param {*} arrayTamanhos
 * @param {*} arrayPrecos
 */
export function filtrarProdutos(arrayCores, tamanhoSelecionado, faixaDePreco) {  
  produtoCtrl.filtrarProdutos(arrayCores, tamanhoSelecionado, faixaDePreco);
}

