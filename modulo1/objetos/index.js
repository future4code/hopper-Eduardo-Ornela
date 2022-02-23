//1. Leia o código abaixo
    
    
    //const filme = {
    	//nome: "Auto da Compadecida", 
    	//ano: 2000, 
    	//elenco: [
    		//"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		//"Virginia Cavendish"
    		//], 
    	//transmissoesHoje: [
    		//{canal: "Telecine", horario: "21h"}, 
    		//{canal: "Canal Brasil", horario: "19h"}, 
    		//{canal: "Globo", horario: "14h"}
    		//]
       // }
   // console.log(filme.elenco[0])
    //console.log(filme.elenco[filme.elenco.length - 1])
    //console.log(filme.transmissoesHoje[2])
        
    
  // a) O que vai ser impresso no console? Matheus Nachtergaele, 
                                          //Virginia Cavendish
                                          //{canal: 'globo', horario: '14'}
    
// 2. Leia o código abaixo
        
    //const cachorro = {
   	//nome: "Juca", 
   	//idade: 3, 
   	//raca: "SRD"
    //}
    
    //const gato = {...cachorro, nome: "Juba"}
    
   // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    //console.log(cachorro)
    //console.log(gato)
    //console.log(tartaruga)
    
    
 // a) O que vai ser impresso no console? nome: 'Juca', idade: 3, raça: 'SRD'
                                        //nome:'Juba', idade: 3, raça: 'SRD'
                                        //nome:'Jubo', idade: 3, raça: 'SRD'

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//A sintaxe e um  operador Spread é um recurso que permite acessar o conteúdo de um objeto iterável. 
//Objeto iterável é um objeto, ou estrutura de dados, que permite acessar seu conteúdo com for … of loop. 
//O exemplo mais popular de um iterável é um array. Outro exemplo de iterável pode ser objetos literais ou strings .
    

 //3. Leia o código abaixo
    
    
    //function minhaFuncao(objeto, propriedade) {
    	//return objeto[propriedade]
   // }
    
    //const pessoa = {
    //nome: "Caio", 
    //idade: 23, 
    // backender: false
   // }
    
   // console.log(minhaFuncao(pessoa, "backender"))
    //console.log(minhaFuncao(pessoa, "altura"))
    
    
 // a) O que vai ser impresso no console? false 
                                     // undefined
                                            
 // b) Explique o valor impresso no console. Você sabe por que isso aconteceu? Deu false porque o primeiro log contém o objeto backender, e o segundo não foi renomeado.


 // Exercícios de escrita de código
 //1. Resolva os passos a seguir:

 //a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
 //Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

 
 const pessoa = {
 nome: "Amanda", 
 apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }

 const objeto = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} e ${pessoa.apelidos[2]}`

 console.log(objeto)

 // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
 //Depois, chame a função feita no item anterior passando como argumento o novo objeto