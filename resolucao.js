//Desafio da Rocky
//Autor:Gustavo Dourado Santos

//Criamos um require para acessar o JSON.
let data = require('./broken-database.json');


//Iteração pelo arquivo JSON como um array e aplicando as funções de correção 
for (let i = 0; i < data.length; i++) {
  data[i] = corrigirNome(data[i]);
  data[i] = corrigirPreco(data[i]);
  data[i] = corrigirQuantidade(data[i])
}

//Fazendo a Leitura do Arquivo JSON
//Analisar uma seqüência como JSON, opcionalmente transformar o valor produzido e suas propriedades, e retornar o valor.
//Correção dos Caracteres
function corrigirNome(produto) {
  let nomeCorrigido = ''
  for (let i = 0; i < produto.name.length; i++) {
    if (produto.name[i] == 'æ') {
      nomeCorrigido += 'a'
    }
    else if (produto.name[i] == '¢') {
      nomeCorrigido += 'c'
    }
    else if (produto.name[i] == 'ø') {
      nomeCorrigido += 'o'
    }
    else if (produto.name[i] == 'ß') {
      nomeCorrigido += 'b'
    }
    else {
      nomeCorrigido += produto.name[i]
    }
  }
  produto.name = nomeCorrigido
  return produto
}

//Correção de Produtos
//estamos convertendo todos os valores, que são string para ponto flutuante
function corrigirPreco(produto) {
  produto.price = parseFloat(produto.price);
  return produto
}

//Correção para a quantidade
//Dentro da função fizemos um if com o operador not erificando a quantidade, caso não possua valor, o número 0 será atribuido.
function corrigirQuantidade(produto) {
  if (!("quantity" in produto)) {  
    produto.quantity = 0;
  }
  return produto

}
data.sort(function (produto1, produto2) {

  if (produto1.category == produto2.category) {
    if (produto1.id < produto2.id) {
      return -1;
    }
    else {
      return 1;
    }
  }

  else {
    if (produto1.category < produto2.category) {
      return -1;
    }
    else {
      return 1;
    }
  }
})
//Soma Por Categoria
function somasCategoria(data) {
  let somasPorCategoria = {}
  data.forEach(produto => {
    if (somasPorCategoria[produto.category] == undefined) {
      somasPorCategoria[produto.category] = produto.price
    } else {
      somasPorCategoria[produto.category] = somasPorCategoria[produto.category] + produto.price
    }
  })
  console.log(somasPorCategoria)
}
somasCategoria(data)
console.log(data)