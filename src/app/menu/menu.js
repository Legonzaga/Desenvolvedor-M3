/**
 * Classe responsável pela criação do menu
 */
export default class MenuController {    

    
    constructor(){
        
        this.menu = document.getElementById("menu");

        this.menu.innerHTML = `            
            <div id="logo"></div>
            <div id="bagIcon">
                <div id="itensNaBolsa">0</div>
            </div>
        `;
    }
    
}