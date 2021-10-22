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

    /** Mensagem exibinda dentro da div "VITRINE"  */
    exibirMensagemProdutoAusente(msg) {
        console.log(msg);

        //<div id="msgTop" style="position:fixed; float:left; top:0px; left:0px; width:100%; background-color:black; height:100%; z-index:10; border-radius: 0px 0px 25px 25px;">   

        let mensagem = `
      
        <div id="msgTop" class="flex flex-center" style="justify-content:center; border-radius:48px; padding:25px;">
          <div class="flex flex-end" style="background:#00c0ee; justify-content: center; width:250px; height:auto; padding:30px; border-radius:48px;">
            <p style="color:#ffffff; ">${msg}</p>
          </div>
        </div>
      `;


        setTimeout(() => {
            document.getElementById("vitrine").insertAdjacentHTML('beforeend', mensagem);
        }, 0);

        document.getElementById('conteudo').addEventListener('click', function() {
            console.log('Click');
            fecharMensagemTop();
        });

        setTimeout(() => {
            let msgTop = document.getElementById('msgTop');
            if (msgTop) {
                fecharMensagemTop();
            }
        }, 10000);

        window.location = "#conteudo";

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
    try {
        node.remove(node);
    } catch (e) {
        console.log(e.message);
    }
}