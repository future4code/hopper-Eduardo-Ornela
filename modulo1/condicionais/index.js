//  Exercícios de interpretação de código

// Tente responder os exercícios dessa seção sem executar o código. 
// Se ficar muito difícil, pode rodar no seu computador **para analisar 
// e pensar sobre o resultado.

// 1- Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
// console.log("Passou no teste.")
// } 
//else {
// console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// O código verifica se o número digitado e par, se for imprime "passou no teste", se não for imprime "não passou no teste".

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Para números par.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para números ímpar.

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //  case "Laranja":
    // preco = 3.5
    // break;
    // case "Maçã":
    // preco = 2.25
    // break;
    // case "Uva":
    // preco = 0.30
    // break;
    // case "Pêra":
    // preco = 5.5
    // break;
    // default:
    // preco = 5
    // break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
   //  a) Para que serve o código acima?
   // O usuário digita o nome da fruta contida no código, essa fruta e impressa no console com o seu preço.
    
   // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
  // O preço da fruta maçã é de 2.25.
    
  // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default`
  // (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? O preço da fruta maçã é de 5.

// 3- Leia o código abaixo:
// const numero = Number(prompt("Digite o primeiro número."))
// if(numero > 0) {
// console.log("Esse número passou no teste")
// let mensagem = "Essa mensagem é secreta!!!"
// }
// console.log(mensagem)


// a) O que a primeira linha está fazendo? 
// Esta declarando uma constante, e abrindo uma janela para o usuário digitar um número.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Para o número 10 a mensagem seria "Esse número passou no teste".
// Para o número -10 a mensagem seria "Live reload enabled."

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim. O segundo console.log esta fora do bloco.

   // Exercícios de escrita de código

    // 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
        // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
        // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
        // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

   const idade = Number(prompt("Qual sua idade"))
   if(idade >= 18) {
   console.log("Você pode dirigir")
   } else {
   console.log("Você não pode dirigir")
   }
  
 // 2- Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
 // Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

   const estuda = prompt("digita o turno que você estuda M (matutino) ou V (Vespertino) ou N (Noturno)")
   if(estuda === "M") {
   console.log("Bom dia!")
   } else if (estuda === "V"){
   console.log("Boa Tarde!")
   } else {
   console.log("Boa Noite!")
   }

  // 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
                      
    let estuda = prompt("digita o turno que você estuda M (matutino) ou V (Vespertino) ou N (Noturno")
    switch (estuda) {
    case "M":
    console.log("Bom Dia!")
    break
    case "V":
    console.log("Boa Tarde!")
    break
    case "N":
    console.log("Boa Noite!")
    }

    // 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme
    // com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta
    // ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo 
    // ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima 
    // `"Escolha outro filme :("`  
    
    let genero = prompt("Qual o gênero de filme que vamos assistir")
    let ValorDoIngresso = prompt("Preço do ingresso")
    const assistirFilme = (filme, valor){
    if (filme === fantasia){
    if (valor < 15){
    console.log("Bom filme!")
    }
    else{
    console.log("escolha outro filme")
    }
}

    

