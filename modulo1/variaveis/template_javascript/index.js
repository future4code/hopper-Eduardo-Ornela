//Questão 1
// 10
// 10 5
//Questão 2
//let a = 10
//let b = 20
//c = a 10
//b = c 10
//a = b 20
//console.log(a=20, b=10, c=10)
//Questão 3
//let cargaHoraria = prompt("Quantas horas você trabalha por dia?")
//let honorario = prompt("Quanto você recebe por dia?")
//alert(Voce recebe ${honorario/cargaHoraria} por hora)
//EXERCICIO DE ESCRITA DE CÓDIGO
//1 
let nome;
let idade;
console.log (typeof nome)
console.log (typeof idade)
// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código. 
//Foi impresso undefined pois não existe valores para as variavies
nome = prompt("Qual o seu nome?");
idade = prompt("Qual sua idade?");
console.log(typeof nome)
console.log(typeof idade)
// Foi impresso string e string por que o prompt retorna um texto
console.log(`Olá ${nome}, você tem ${idade} anos`);
//2
let corUsuario = prompt("Sua roupa preta?")
let comidaUsuario = prompt("Já comeu churrasco?")
let musicaUsuario = prompt("Gosta de Trio parada dura?")
console.log("Sua roupa é azul? - ", corUsuario)
console.log("Já comeu churrasco? - ", comidaUsuario)
console.log("Gosta de trio parada dura? - ", musicaUsuario)
//3 
let a = 10;
let b = 25;
a = 25
b = 10
console.log ("O novo valor de a é", a); 
console.log ("O novo valor de b é", b);
//Desafio
let a1 = prompt("Primeiro numero: ");
let b1 = prompt("Segundo numero");
let x = a1 + b1;
let y = a1 * b1;
console.log(`O primeiro número somado ao segundo número resulta em: ${x}.`);
console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${y}.`);
// A soma do primeiro está errada porque os valores foram contatenados
