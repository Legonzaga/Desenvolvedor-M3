export default class MenuController {    

    
    constructor(){
        
        this.menu = document.getElementById("menu");

        console.log('Menu');

        this.menu.innerHTML = `            
            <div id="logo"></div>
            <div id="bagIcon">
                <div id="itensNaBolsa">0</div>
            </div>
        `;
    }
    
    listar(){
        console.log('Menu funcionando.');
        document.getElementById('conteudo').innerHTML = 'Lean';
    }


}