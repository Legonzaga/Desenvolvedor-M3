export default class Produto {
  _id;
  nome;
  preco;
  cor;
  tamanho;
  urlImagem;
  numeroParcelas;

  constructor() {
    this._id = 0;
    this.cor = "";
    this.nome = "";
    this.numeroParcelas = 0;
    this.preco = 0;
    this.tamanho = "";
    this.urlImagem = "";
  }

  listaProdutos = [
    {
      id: 0,
      descricao: "Camisa mescla",
      preco: 28.0,
      cor: "Cinza",
      tamanho: "P",
      numeroParcelas: 3,
      urlImagem: "src/assets/img_2.png",
    },
    {
      id: 1,
      descricao: "Saia em Couro",
      preco: 398.0,
      cor: "Vermelho",
      tamanho: "M",
      numeroParcelas: 5,
      urlImagem: "src/assets/img_3.png",
    },
    {
      id: 2,
      descricao: "Cardigan tigre",
      preco: 398.0,
      cor: "Laranja",
      tamanho: "G",
      numeroParcelas: 5,
      urlImagem: "src/assets/img_4.png",
    },
    {
      id: 3,
      descricao: "Cardigan Off white",
      preco: 99.0,
      cor: "Branco",
      tamanho: "GG",
      numeroParcelas: 3,
      urlImagem: "src/assets/img_5.png",
    },
    {
      id: 4,
      descricao: "Body Leopardo",
      preco: 129.90,
      cor: "Laranja",
      tamanho: "U",
      numeroParcelas: 3,
      urlImagem: "src/assets/img_6.png",
    },
    {
      id: 5,
      descricao: "Casaco Pelos",
      preco: 398.0,
      cor: "Rosa",
      tamanho: "42",
      numeroParcelas: 5,
      urlImagem: "src/assets/img_7.png",
    },
    {
      id: 6,
      descricao: "Cropped Stripes",
      preco: 120.0,
      cor: "Amarelo",
      tamanho: "G",
      numeroParcelas: 3,
      urlImagem: "src/assets/img_8.png",
    },
    {
      id: 7,
      descricao: "Camisa transparente",
      preco: 398.0,
      cor: "Preto",
      tamanho: "M",
      numeroParcelas: 5,
      urlImagem: "src/assets/img_9.png",
    },
    {
      id: 8,
      descricao: "Pochete Cluch",
      preco: 99.0,
      cor: "Branco",
      tamanho: "46",
      numeroParcelas: 3,
      urlImagem: "src/assets/img_10.png",
    },
  ];

}
