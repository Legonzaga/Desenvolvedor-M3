window.fecharMensagem = fecharMensagem;
window.fecharMensagemTop = fecharMensagemTop;

export default class MensagemController {
  constructor() {}

  // Exibe uma mensagem de tela completa
  exibirMensagem(msg) {
    let mensagem = `
        <div id="idMensagem">

          <div id="formaMensagem">

            <div id="idMensagemConteudo" style="">
              <p>${msg}</p>

              <div id="btnFecharMensagem" onclick="fecharMensagem()">
                <span>Fechar</span>
              </div>              

            </div>

          </div>

        </div>
      `;

    document.getElementById("vitrine").innerHTML += mensagem;

    window.location = "#idMensagem";
  }


  // Mensagem exibinda dentro da div "VITRINE" 
  exibirMensagemProdutoAusente(msg) {   

    console.log(msg);

    let mensagem = `
      <div id="msgTop" style="position:relative; float:left; top:0px; left:0px; width:100%; background-color:black; height:100%; z-index:10; border-radius: 0px 0px 25px 25px;">   
        <div style="color:#fff; padding:25px;">
          </h1>${msg}</h1>
        </div>
      </div>`
    ;      
    document.getElementById('vitrine').innerHTML = mensagem;    

    window.location = "#msgTop";

    //setTimeout(fecharMensagemTop, 2000);

  }


}

export const mensagemCtrl = new MensagemController();

export function fecharMensagem() {
  let node = document.getElementById("idMensagem");
  node.remove(node);
}

export function fecharMensagemTop() {
  let node = document.getElementById("msgTop");
  node.remove(node);
}