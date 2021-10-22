
/**
 * Componente responsavel pelo comportamento do Rodapé
 */
export default class RodapeController {
  constructor() {
    this.conteudo = document.getElementById("rodape");

    this.conteudo.innerHTML = `               
            <p style="position:relative; top:0.5em;">Agência M3 - Agência de Performance Digital</p>
        `;
  }
}

new RodapeController();
