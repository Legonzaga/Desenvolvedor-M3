export default class SacolaController {
  itensNaSacola = [];

  constructor() {}

  adicionarNaSacola(produto) {
    this.itensNaSacola.push(produto);

    console.log(this.itensNaSacola);
  }
}
