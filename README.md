# Processo-Seletivo-Rocky
<br>
Teste da primeira fase do processo seletivo da Rocky para estágio.
<h2>Problema</h2>
<p>Você é responsável por um software de gestão de estoque de produtos. Ao fazer uma alteração no sistema, uma rotina que não foi devidamente testada acabou quebrando todo o banco de dados. Por sorte, não houve perda completa dos dados, mas eles não estão mais no formato esperado pelo sistema. Sua missão nesse projeto é recuperar os dados e deixá-los no formato adequado novamente. Além disso, você precisará criar também alguns métodos para validação das correções.</p>
<h2>1 - Nomes</h2>
<p>Todos os nomes de produto tiveram alguns caracteres modificados, houve substituição de todos os "a" por "æ", "c" por "¢", "o" por "ø", "b" por "ß". É preciso reverter essas substituições para recuperar os nomes originais.
 <br>
  <br>
  <b>Original: </b>
  "name": "iPhone XS Max Prata, com Tela de 6,5, 4G, 64 GB e Câmera de 12 MP"
  <br>
  <hr>
  <b>Corrompido: </b>
"name": "iPhøne XS Mæx Prætæ, cøm Telæ de 6,5, 4G, 64 GB e Câmeræ de 12 MP" </p>
<h2>2 - Preços</h2>
<p>Os preços dos produtos devem ser sempre do tipo number, mas alguns deles estão no tipo string. É necessário transformar as strings novamente em number.
  <br>
  <br>
  <b>Original:</b>
"price": 1250.00  
  <hr>
  <b>Corrompido:</b> 
"price": "1250.00"</p>
<h2>3 - Quantidades</h2>
 <p>Nos produtos onde a quantidade em estoque era zero, o atributo "quantity" sumiu. Ele precisa existir em todos os produtos, mesmo naqueles em que o estoque é 0.
 <br>
 <br>
<b>Original:<b> 
"name": "Conjunto de Panelas Antiaderentes com 05 Peças Paris", 
"quantity": 0, 
"price": 192.84 
<hr>
<b>Corrompido:<b>
"name": "Conjunto de Panelas Antiaderentes com 05 Peças Paris", 
"price": 192.84 </p>
  <h2>Questões</h2>
<p>Para esse projeto, você utilizará o arquivo broken-database.json e irá fazer uma série de transformações até que ele volte ao formato original. Para isso será necessário desenvolver algumas funções e depois verificar se realmente foi recuperado.Você deverá utilizar JavaScript para resolver esse problema, caso não conheça nenhuma dessas linguagens, é uma ótima oportunidade para aprender! :)</p>
 <h2><b>Recuperação dos dados originais do banco de dados</b></h2>
 <p>Você deverá criar uma função para ler o arquivo broken-database.json e criar três funções para percorrer o banco de dados corrompido e corrigir os três erros descritos anteriormente, além de uma função para exportar um arquivo .json com a saída.</p>
  <p>Portanto serão 5 funções: </p>
  <ul>
1.Ler o arquivo Json;
    <br>
2.Corrigir nomes; 
    <br>
3.Corrigir preços;
    <br>
4.Corrigir quantidades; 
    <br>
5.Exportar um arquivo JSON com o banco corrigido;
  </ul>
   <h2><b>Validação do banco de dados corrigido</b></h2>
  <p>Você deverá implementar funções para validar a sua recuperação do banco de dados. Todas essas funções deverão ter como input o seu banco de dados corrigido na questão 1. As funções de validação são:
 1 - Uma função que imprime a lista com todos os nomes dos produtos, ordenados primeiro por categoria em ordem alfabética e ordenados por id em ordem crescente. Obs: é apenas uma saída, ordenada pelos dois fatores citados acima.
    <hr>
2 - Uma função que calcula qual é o valor total do estoque por categoria, ou seja, a soma do valor de todos os produtos em estoque de cada categoria, considerando a quantidade de cada produto. 
  </p>
  <h2><i>Resolução</i></h2>
 <p>Para efetuar a leitura do arquivo JSON e acessar os dados, usei o require.
  <br>
  OBS:O require serve para importa o que foi exportado dos outros arquivos do seu projeto.</p>
 <b>let data = require('./broken-database.json');</b>
 
 <h2>1.Correção dos Nome</h2>
 <p>Para essa correção, começaremos com um loop for passando em todo JSON para averiguar onde há caracteres diferente, e caso enontrantrasse, efuatiria a troca necessária</p>
 <hr>
 <h2>2.Correção do Preço</h2>
 <p>Com a função parsefloat, estamos convertendo todos os valores, que são string para ponto flutuante.</p>
<hr>
 <h2>Correção do Quantidade</h2>
 <p>Dentro da função fizemos um if com o operador not erificando a quantidade, caso não possua valor, o número 0 será atribuido.</p>
 <hr>
 
 
  
 

  

    
 
  


