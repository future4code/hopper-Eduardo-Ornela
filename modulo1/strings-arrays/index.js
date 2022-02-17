// Exercícios de interpretação de código
// Exercício 1
let array
console.log('a. ', array)
// resposta: a. undefined
array = null
console.log('b. ', array)
// resposta: b. null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// resposta c. 11
let i = 0
console.log('d. ', array[i])
// resposta d. 3
array[i+1] = 19
console.log('e. ', array)
// e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const valor = array[i+6]
console.log('f. ', valor)
// f. 9
// Exercício 2
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercícios de escrita de código
// Exercício 1
var nome= prompt("Digite seu nome:")
var email= prompt("Digite seu email:")
console.log("O e-mail" + email + "foi cadastrado com sucesso. Seja bem-vindo" + nome)

// Exercício 2
// Letra A
console.log("Essas são minhas comidas  preferidas:")
// Letra B
const comidasPreferidas  = ["pão", "pizza", "feijoada", "batata frita", "anburgue"]
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
// Letra C
const preferida = prompt("comida preferida")
comidasPreferidas[1] = preferida
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

// Exercício 3
const listaDeTarefas = []
listaDeTarefas.push ("tarefas 1")
listaDeTarefas.push ("tarefas 2")
listaDeTarefas.push ("terefas 3")
console.log(listaDeTarefas)
listaDeTarefas.splice((prompt("Qual tarefa já foi realizada?0,1 ou 2?")),1)
console.log(listaDeTarefas)

//Desafios

const frase = ("Estou amando o curso apesar de ser muito dificil")
frase.push[frase]