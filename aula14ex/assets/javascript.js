function contar(){
    let inc = document.getElementById("txtInc")
    let fim = document.getElementById("txtFim")
    let passo = document.getElementById("txtPasso")

    if(inc.value.length  == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro] Faltam dados.')
    }else{
        window.alert('Tudo ok!')
    }
}