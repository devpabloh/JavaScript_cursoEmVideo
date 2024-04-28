/* Condição multipla, nele a gente não usa dentro dos parenteses uma condição, como vimos no if e else, mas sim usamos uma empressão, o switch é usado quando estamos lidando com valores exatos, e usamos case para cada valor que queremos que quando seja ele execute alguma coisa. O que temos que lembrar é que após cada expressão do case devemos colocar o Break, porque se a gente não colocar mesmo que a expressão que colocamos com aquele valor seja verdadeira, ele vai continuar percorrendo até achar um break */
let agora = new Date()
let diaSemana = agora.getDay()

switch(diaSemana){
    case 0: 
        console.log('Domingo!')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2: 
        console.log('Terça-feira!')
        break
    case 3: 
        console.log('Quarta-feira!')
        break
    case 4: 
        console.log('Quinta-feira!')
        break
    case 5: 
        console.log('Sexta-feira!')
        break
    case 6:
        console.log('Sabádo!')
        break
}