import { mensagemCtrl } from "../mensagemComponent/mensagem.js";
import { produtoCtrl } from "../produtoComponent/produto.js";


window.fecharSacola = fecharSacola;
window.retirarSacola = retirarSacola;
export default class SacolaController {
    itensNaSacola = [];

    constructor() {}

    adicionarNaSacola(idProduto) {
        let indice = produtoCtrl.listaDeProdutos.findIndex(
            (x) => x.id === idProduto
        );

        if (produtoCtrl.listaDeProdutos[indice].quantidade >= 1) {
            produtoCtrl.listaDeProdutos[indice].quantidade =
                produtoCtrl.listaDeProdutos[indice].quantidade - 1;

            this.itensNaSacola.push(produtoCtrl.listaDeProdutos[indice]);

            //let conteudo = document.getElementByTagName("conteudo");
        } else {

            let msg = '<h1>Ops!</h1>Quantidade limite selecionada do item <b>' + produtoCtrl.listaDeProdutos[indice].descricao + '</b> .';

            mensagemCtrl.exibirMensagem(msg);

        }
    }

    exibirItensNaSacola() {
        console.log(sacolaCtrl.itensNaSacola);

        let total = 0;

        let sacola = `
      <div id="itensNaSacola" style="z-index:99; background:#fff; min-width:30vw; max-width:100vw;  min-height:250px;">
      <h3>Itens na Sacola</h3>

      <div class="linhaItemSacola flex space-between">
      <div class="flex">Descrição</div>
      <div class="flex">QTD</div>
      <div class="flex">Preço</div>
      <div class="flex"></div>
     </div>      

    `;

        for (const i of sacolaCtrl.itensNaSacola) {

            sacola += `
     <div class="linhaItemSacola flex space-between">
      <div class="flex">${i.descricao.toUpperCase()}</div>
      <div class="flex">1X</div>
      <div class="flex">R$${i.preco.toFixed(2)}</div>
      <div class="flex btnClose" onclick="retirarSacola(${i.id});">&#x2716;</div>        
     </div>
     `;

            total += i.preco;

        }

        sacola += `
      <div class="linhaItemSacola flex space-between">
        <div class="flex"></div>
        <div class="flex"><b>TOTAL</b></div>
        <div class="flex"><b>R$ ${total.toFixed(2)}</b></div>
      </div>
      <div class="linhaItemSacola flex space-between">
        <div class="flex"></div>
        <div class="btnSuccess">FINALIZAR COMPRA</div>
        <div class="btnPrimary" onclick="fecharSacola()"><p>Fechar</p></div>
      </div>          
    </div>`;

        let bolsa = document.getElementById('itensNaBolsa');

        bolsa.insertAdjacentHTML('beforebegin', sacola);

        document.getElementById('selectOrdenacao').style.visibility = 'hidden';

    }




} // EOC


export const sacolaCtrl = new SacolaController();

export function fecharSacola() {
    let bag = document.getElementById('itensNaSacola');
    document.getElementById('selectOrdenacao').style.visibility = 'visible';
    bag.remove(bag);
}

export function retirarSacola(idProduto) {
    console.log(idProduto);

    let p = sacolaCtrl.itensNaSacola.findIndex(x => x.id === idProduto);


    let indiceProdutoEstoque = produtoCtrl.listaDeProdutos.findIndex(x => x.id === idProduto);

    console.log(indiceProdutoEstoque);

    produtoCtrl.listaDeProdutos[indiceProdutoEstoque].quantidade += 1;

    sacolaCtrl.itensNaSacola.splice(p, 1);
    fecharSacola();
    sacolaCtrl.exibirItensNaSacola();

    let bag = document.getElementById("itensNaBolsa");
    bag.innerHTML = sacolaCtrl.itensNaSacola.length;

    console.log(produtoCtrl.listaDeProdutos);

}