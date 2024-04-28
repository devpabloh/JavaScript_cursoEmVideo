function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let horarioAtual = data.getHours()
    msg.innerHTML = `Agora são ${horarioAtual} horas.`

    if(horarioAtual > 0 && horarioAtual < 12){
        img.src = '../aula12ex/imagens/manhã.png'
    }else if(horarioAtual < 12 && horarioAtual < 18){
        img.src = '../aula12ex/imagens/tarde.png'
    }else{
        img.src = '../aula12ex/imagens/pexels-rbrigant44-771883.png'
    }
}

