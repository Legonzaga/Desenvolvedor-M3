import CoresController from "../atributosComponent/cores.js";
import TamanhoController from "../atributosComponent/tamanho.js";
import PrecoController, { precoCtrl } from "../atributosComponent/precos.js";
import { coresCtrl } from "../atributosComponent/cores.js";
import { tamanhoCtrl } from "../atributosComponent/tamanho.js";
import { produtoCtrl } from "../produtoComponent/produto.js";
import VitrineController, {
  carregarVitrine,
  vitrineCtrl,
} from "../vitrineComponent/vitrine.js";

// Tornando o acesso universal
window.exibirFiltrarMobile = exibirFiltrarMobile;
window.fecharFiltroMobile = fecharFiltroMobile;
window.exibirOrdenarMobile = exibirOrdenarMobile;

window.limparFiltros = limparFiltros;

/**
 * Componente responsavel pelo comportamento da Sidebar
 */
export default class SidebarController {
  coresControl;
  tamanhoControl;
  precoControl;

  constructor() {
    this.coresControl = new CoresController();
    this.tamanhoControl = new TamanhoController();
    this.precoControl = new PrecoController();

    this.conteudo = document.getElementById("sidebar");

    this.exibirSidebar();
  }

  // Função que exibe os filtros Cor, tamanho e preço na dimensão desktop
  exibirSidebar() {
    let sidebar = `
        <div class="flex-1 center"><h1>Blusas</h1></div>
        <div id="filtroMobile" class="flex flex-1">
          <div style="flex:0.3;"></div>
          <div id="linkFitroMobile" class="flex-1" onclick="exibirFiltrarMobile();">Filtrar</div>
          <div id="linkOrdenarMobile" class="flex-1" onclick="exibirOrdenarMobile()">Ordenar</div>
          <div style="flex:0.3;"></div>
        </div>
    `;

    sidebar += this.coresControl.exibirCores();

    sidebar += this.tamanhoControl.exibirTamanhos();

    sidebar += this.precoControl.exibirFaixaPreco();

    this.conteudo.innerHTML = sidebar;
  }

  /**
   * Função que exibe os filtros Cor, tamanho e preço na dimensão Mobile
   */
  exibirFiltrarMobile() {
    let menuFiltroMobile = `
    <div id="menuFiltroMobile">  
      <div class='flex space-between' style="border-bottom:solid 1px #666666;">    
        <div style="padding-left:30px; text-align:left; color:#666666;/"><h3>FILTRAR</h3></div>
        <div style="padding-right:30px;" onclick="fecharFiltroMobile()"><h3>&#x2716;</h3></div>        
      </div>
    </div>`;

    document.getElementById("sidebar").innerHTML = menuFiltroMobile;

    // Adicionando Filtro de Cores
    coresCtrl.qtdCoresExibir = coresCtrl.cores.listaCores.length;
    let cores = coresCtrl.exibirCores();

    document
      .getElementById("menuFiltroMobile")
      .insertAdjacentHTML("beforeend", cores);

    document.getElementById("listaCores").style.display = "flex";

    // Adicioanr Filtro de Tamanho
    let tamanhos = tamanhoCtrl.exibirTamanhos();

    document
      .getElementById("listaCores")
      .insertAdjacentHTML("afterend", tamanhos);

    document.getElementById("cabecalhoFiltroTamanho").style.display = "flex";

    // Adicionando Filtro preços
    let preco = this.precoControl.exibirFaixaPreco();
    document
      .getElementById("cabecalhoFiltroTamanho")
      .insertAdjacentHTML("afterend", preco);
    document.getElementById("conteudoFaixaDePreco").style.display = "block";

    document.getElementById("vitrine").style.visibility = "hidden";
  }

  /**
   * Função que exibe as opções de ordenação dimensão mobile
   */
  exibirOrdenarMobile() {
    let menuFiltroMobile = `
    <div id="menuFiltroMobile">  
      <div class='flex space-between' style="border-bottom:solid 1px #666666;">    
        <div style="padding-left:30px; text-align:left; letter-spacing:2px; color:#666666;/"><h3>ORDENAR</h3></div>
        <div style="padding-right:30px;" onclick="fecharFiltroMobile()"><h3>&#x2716;</h3></div>        
      </div>
    </div>`;

    document.getElementById("sidebar").innerHTML = menuFiltroMobile;

    let opcoes = `
      <div id="opcoesOrdenar" class="flex column">
        <div id="ordemMaisRecentesMob">Mais recentes</div>
        <div id="ordemMenorPrecoMob">Menor preço</div>
        <div id="ordemMaiorPrecoMob">Maior preço</div>                  
      </div>
    `;

    document
      .getElementById("menuFiltroMobile")
      .insertAdjacentHTML("beforeend", opcoes);

    document
      .getElementById("ordemMaisRecentesMob")
      .addEventListener("click", function () {
        ordenarPorDataMob(); //Função de acesso universal definida em ordenacao.js
        fecharFiltroMobile();
      });

    document
      .getElementById("ordemMenorPrecoMob")
      .addEventListener("click", function () {
        ordenarPorMenoPrecoMob(); //Função de acesso universal definida em ordenacao.js
        fecharFiltroMobile();
      });

    document
      .getElementById("ordemMaiorPrecoMob")
      .addEventListener("click", function () {
        ordenarPorMaiorPrecoMob(); //Função de acesso universal definida em ordenacao.js
        fecharFiltroMobile();
      });
  }

  /**
   * Exibe os botões para execução do filtro no Mobile
   */
  exibirBtnFiltro() {
    let botoes = ``;

    if (
      coresCtrl.menuAbertoMobile === true ||
      tamanhoCtrl.menuAbertoMobile === true ||
      precoCtrl.menuAbertoMobile === true
    ) {
      botoes = document.getElementById("btnFitroRodape");

      try {
        botoes.remove(botoes);
      } catch (ex) {
        console.log(ex.message);
      }

      botoes = `
              <div id="btnFitroRodape">      
                <div id="btnAplicarFiltro" onclick="fecharFiltroMobile();">APLICAR</div>
                <div id="btnLimparFiltro" onclick="limparFiltros();">LIMPAR</div>
              </div>
              `;
      document.getElementById("conteudoFaixaDePreco").innerHTML += botoes;
    } else {
      let btn = document.getElementById("btnFitroRodape");
      try {
        btn.remove(btn);
      } catch (ex) {
        console.log(ex.message);
      }
    }
  }
} //EOC

//Inicializando a View do SideBar
export const sidebarCtrl = new SidebarController();

export function exibirFiltrarMobile() {
  sidebarCtrl.exibirFiltrarMobile();
  window.location = "#menuFiltroMobile";
}

export function fecharFiltroMobile() {
  document.getElementById("menuFiltroMobile").style.display = "none";
  sidebarCtrl.exibirSidebar();
  document.getElementById("vitrine").style.visibility = "visible";
}

// Reseta os filtros selecionados e exibi todos os produtos cadastrados
export function limparFiltros() {
  produtoCtrl.contador = 3;
  produtoCtrl.exibindoNaVitrine = produtoCtrl.listaDeProdutos;
  produtoCtrl.novaListaProdutos = produtoCtrl.exibindoNaVitrine;
  vitrineCtrl.exibirProdutos(produtoCtrl.novaListaProdutos);

  fecharFiltroMobile();
}

/**
 * Função que permite a chamada pelo evento onclick
 */
export function exibirOrdenarMobile() {
  sidebarCtrl.exibirOrdenarMobile();
  window.location = "#menuFiltroMobile";
}
