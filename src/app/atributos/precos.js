export default class PrecoController{

    constructor(){}

    exibirFaixaPreco(){

        let listaPrecos = `

        <div><h3>FAIXA DE PREÇO</h3></div>
        <div id="faixaDePreco">
            <label class="container">de R$0 até R$50
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
            </label>

            <label class="container">de R$51 até R$150
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
            </label>

            <label class="container">de R$151 até R$300
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
            </label>            

            <label class="container">de R$301 até R$500
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
            </label>            

            <label class="container">a partir de R$1
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
            </label>            

        </div>
    
        `;

        return listaPrecos;

    }
    
}