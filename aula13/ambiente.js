let c = 1

while( c <= 6){
    console.log(`Passo ${c}`)
    c++
}

// no whille (enquanto) primeiro é realizado o teste de condição e depois é executado o bloco (chamada de estrutura de repetição com teste lógico no inicio)
// na do(fazer) while (enquanto) é realizado primeiro a execução do bloco e depois é feito o teste de condição (chamada de estrutura de repetição com teste lógico no final)
d = 0
do{
    console.log(`Passo do while ${d}`)
    d++
}while(d <= 2)