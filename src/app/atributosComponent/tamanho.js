import { coresCtrl } from "./cores.js";
import { filtrarProdutos } from "../produtoComponent/produto.js";
import { precoCtrl } from "./precos.js";

window.selecionarTamanho = selecionarTamanho;

//Métodos universais Mobile
window.exibirListaTamanhoMobile = exibirListaTamanhoMobile;
window.esconderListaTamanhoMobile = esconderListaTamanhoMobile;
export default class TamanhoController {
  tamanhoSelecionado = null;

  constructor() {}

  exibirTamanhos() {
    let listaTamanhos = `                       
        <div id="cabecalhoFiltroTamanho" class="flex column">

            <div class="flex space-between flex-center">
                <h3>TAMANHOS</h3>
                <div id="btnMobExibirTamanho" onclick="exibirListaTamanhoMobile()"><h3 class="btnAdd">&#x2b;</h3></div>
                <div id="btnMobEsconderTamanho" onclick="esconderListaTamanhoMobile()"><h3 class="btnAdd">&#9866;</h3></div>
            </div>
        
        
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

        </div>
    `;

    return listaTamanhos;
  }

  selecionarTamanho(obj, tamanho) {
    console.log(obj);
    console.log(tamanho);

    obj = document.getElementById(obj);

    if (obj.className === "itemTamanhoSelecionado") {
      console.log("Mesma classe");
      obj.className = "itemTamanho";

      this.tamanhoSelecionado = null;
    } else {
      let classes = document.getElementsByClassName("itemTamanhoSelecionado");
      for (var i = 0; i < classes.length; i++) {
        classes[i].className = "itemTamanho";
      }
      //classes.className = 'itemTamanho';

      obj.className = "itemTamanhoSelecionado";

      this.tamanhoSelecionado = tamanho;
    }

    let produtos = filtrarProdutos(
      coresCtrl.coresSelecionadas,
      this.tamanhoSelecionado,
      precoCtrl.faixaPrecoSelecionada
    ); //Função definida em ProdutosController.js
  }
} // EOC

export const tamanhoCtrl = new TamanhoController();

export function selecionarTamanho(obj, tamanho) {
  tamanhoCtrl.selecionarTamanho(obj, tamanho);
}

export function exibirListaTamanhoMobile() {
  let btnMobExibirTamanho = document.getElementById("btnMobExibirTamanho");
  document.getElementById("listaTamanho").style.display = "block";

  btnMobExibirTamanho.style.display = "none";

  let btnMobEsconderTamanho = document.getElementById("btnMobEsconderTamanho");
  btnMobEsconderTamanho.style.display = "block";
  btnMobEsconderTamanho.style.visibility = "visible";
}

export function esconderListaTamanhoMobile() {
  let btnMobExibirTamanho = document.getElementById("btnMobExibirTamanho");
  let btnMobEsconderTamanho = document.getElementById("btnMobEsconderTamanho");
  let listaTamanho = document.getElementById("listaTamanho");

  btnMobEsconderTamanho.style.display = "none";
  listaTamanho.style.display = "none";

  btnMobExibirTamanho.style.display = "block";
}
