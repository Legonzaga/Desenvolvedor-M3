import { mensagemCtrl } from "../mensagemComponent/mensagem.js";
import { produtoCtrl } from "../produtoComponent/produto.js";

export default class SacolaController {
  itensNaSacola = [];

  constructor() {}

  adicionarNaSacola(idProduto) {
    let indice = produtoCtrl.listaDeProdutos.findIndex(
      (x) => x.id === idProduto
    );

    console.log(indice);

    console.log(produtoCtrl.listaDeProdutos[indice].quantidade);

    console.log(produtoCtrl.listaDeProdutos[indice]);

    if (produtoCtrl.listaDeProdutos[indice].quantidade >= 1) {
      produtoCtrl.listaDeProdutos[indice].quantidade =
        produtoCtrl.listaDeProdutos[indice].quantidade - 1;

      console.log(produtoCtrl.listaDeProdutos);
      this.itensNaSacola.push(produtoCtrl.listaDeProdutos[indice]);

      //let conteudo = document.getElementByTagName("conteudo");
    } else {

      let msg = '<h1>Ops!</h1>quantidade limite selecionada do item <b>'+produtoCtrl.listaDeProdutos[indice].descricao + '</b> .';

      mensagemCtrl.exibirMensagem(msg);

    }
  }
}
