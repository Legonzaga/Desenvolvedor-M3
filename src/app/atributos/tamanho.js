import { coresCtrl } from "./cores.js";
import { filtrarProdutos } from "../produto/produto.js";
import { precoCtrl } from "./precos.js";

export default class TamanhoController {
  tamanhoSelecionado = null;

  constructor() {}

  exibirTamanhos() {
    let listaTamanhos = `            
            
        <div><h3>TAMANHOS</h3></div>

        <div id="listaTamanho">
            <div class="itemTamanho" id="tamP" onclick="selecionarTamanho(this.id, 'P');">
                <div>P</div>
            </div>
            <div class="itemTamanho" id="tamM" onclick="selecionarTamanho(this.id, 'M');">
                <div>M</div>
            </div>
            <div class="itemTamanho" id="tamG" onclick="selecionarTamanho(this.id, 'G');">
                <div>G</div>
            </div>
            <div class="itemTamanho" id="tamGG" onclick="selecionarTamanho(this.id, 'GG');">
                <div>GG</div>
            </div>

            <div class="itemTamanho" id="tamU" onclick="selecionarTamanho(this.id, 'U');">
                <div>U</div>
            </div>

            <div class="itemTamanho" id="tam36" onclick="selecionarTamanho(this.id, '36');">
                <div>36</div>
            </div>

            <div class="itemTamanho" id="tam38" onclick="selecionarTamanho(this.id, '38');">
                <div>38</div>
            </div>

            <div class="itemTamanho" id="tam40" onclick="selecionarTamanho(this.id, '40');">
                <div>40</div>
            </div>

            <div class="itemTamanho" id="tam42" onclick="selecionarTamanho(this.id, '42');">
                <div>42</div>
            </div>

            <div class="itemTamanho" id="tam44" onclick="selecionarTamanho(this.id, '44');">
                <div>44</div>
            </div>

            <div class="itemTamanho" id="tam46" onclick="selecionarTamanho(this.id, '46');">
                <div>46</div>
            </div>

        </div>
    `;

    return listaTamanhos;
  }

  selecionarTamanho(obj, tamanho) {

    console.log(obj);
    console.log(tamanho);

    var obj = document.getElementById(obj);

    let classes = document.getElementsByClassName("itemTamanhoSelecionado");

    for (var i = 0; i < classes.length; i++) {
      classes[i].className = 'itemTamanho';
    }
    //classes.className = 'itemTamanho';

    obj.className = "itemTamanhoSelecionado";

    this.tamanhoSelecionado = tamanho;    

    let produtos = filtrarProdutos(coresCtrl.coresSelecionadas, this.tamanhoSelecionado, precoCtrl.faixaPrecoSelecionada); //Função definida em ProdutosController.js
  }
} // EOC

export const tamanhoCtrl = new TamanhoController();

export function selecionarTamanho(obj, tamanho) {
  tamanhoCtrl.selecionarTamanho(obj, tamanho);
}

window.selecionarTamanho = selecionarTamanho;
