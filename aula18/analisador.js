let num = document.getElementById('txtn') //recebe o número digitado de 1 a 100
let lista = document.getElementById('flista') // lista de números para selecionar
let res = document.getElementById('res') // resultado
let vetores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        window.alert('tudo ok')
    } else{
        window.alert(`Valor invalido ou já foi encontrado na lista.`)
    }
}