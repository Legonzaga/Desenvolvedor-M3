/**
 * Classe responsável pela criação do menu
 */
export default class MenuController {    

    
    constructor(){
        
        this.menu = document.getElementById("menu");

        this.menu.innerHTML = `
        <div id="menuContent" class="flex space-between">            
            <div id="logo"></div>
            <div>
                <div id="itensNaBolsa">0</div>
                <div id="bagIcon"></div>                
            <div>
        </div>
        `;
    }
    
}