
import MenuController from '../app/menu/menu.js';
import SidebarController from '../app/sidebar/sidebar.js';
import VitrineController from '../app/vitrine/vitrine.js';
import RodapeController from '../app/rodape/rodape.js';

import {adicionarProduto} from '../app/vitrine/vitrine.js';
import {verTodasCores, esconderTodasCores} from '../app/atributos/cores.js';

let menu = new MenuController();
let sidebar = new SidebarController();
let vitrine = new VitrineController();
let rodape= new RodapeController();


window.adicionarProduto = adicionarProduto;
window.verTodasCores = verTodasCores;
window.esconderTodasCores = esconderTodasCores;


export default class Main{

    constructor( ){      
        
    }

}