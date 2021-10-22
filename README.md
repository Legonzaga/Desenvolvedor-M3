# Sobre o projeto
Este projeto é uma etapa do pocesso seletivo para Desenvolvedor na M3Commerce.
Consiste em desenvolver um layout de uma loja virtual que seja responsivo, utilizando HTML5, CSS3 e Javascript. 
O layout está de acordo com os arquivos fonecidos dentro do diretório Desenvolvedor-M3/Layout.

# Tecnologias
    - HTML5
    - CSS3
    - Javascript



# Executando o projeto

-- Instalação - Executando o servidor para evitar o Cors.

Abra o terminal. (No Windows: cmd.exe.)
Digite npm e tecle Enter para verificar se o Node.js está instalado.
Se o comando retornar um not found, faça o download aqui https://nodejs.org/en/download/ e instale. 

(No Ubuntu, você pode digitar sudo apt install -y nodejs.)
Instale o live-server com: 

```
npm install live-server -g
```

Acesse o diretório Desenvolvedor-M3.

Inicie o servidor com o comando:
```
live-server
```
(Normalmente será iniciado em localhost:8080 no seu navegador padrão.)

# Observações

    - Cada produto foi cadastrado com 3 unidades no estoque.

    - A vitrine iniciará exibindo 3 produtos como padrão. Ao clicar em Carregar Mais
    os outros itens serão exibidos.

    - Quando selecionamos todas as quantidades disponível no JSON de produtos ("estoque"),
    o botão comprar fica escondido e da lugar a uma mensagem de ESGOTADO!

    - Quando clicar na sacolinha é possível olhar os produtos que foram adicionados.
    Quando excluídos da sacola, os produtos voltam para o estoque.

    - O botão carregar mais, trabalha de acordo com o filtro selecionado na Sidebar.




