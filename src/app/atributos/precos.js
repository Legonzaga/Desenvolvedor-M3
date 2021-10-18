import { coresCtrl } from "./cores.js";
import { tamanhoCtrl } from "./tamanho.js";
import { filtrarProdutos } from "../produto/produto.js";
export default class PrecoController {
  faixaPrecoSelecionada = 0; // De 1 -5 para checkbox da Faixa de preço

  constructor() {}

  /**
   *
   * @returns Cria a VIEW da Faixa de preços
   */
  exibirFaixaPreco() {
    let listaPrecos = `

        <div><h3>FAIXA DE PREÇO</h3></div>
        <div id="faixaDePreco">
            <fieldset>
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
            <fieldset>
        </div>    
        `;
    return listaPrecos;
  }

  selecionarFaixaPreco(selecao) {
    let faixaDePreco = document.getElementsByName("faixaDePreco");

    //Resetando os checkboxes
    for (const p of faixaDePreco) {
      if (p.checked) {
        p.checked = false;
        console.log(p);
      }
    }

    selecao.checked = true;

    this.faixaPrecoSelecionada = selecao.value;

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

/** Tornando o acesso universal para que possa receber eventos do DOM */
window.selecionarFaixaPreco = selecionarFaixaPreco;
