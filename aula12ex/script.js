function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let horarioAtual = data.getHours()

    msg.innerHTML = `Agora são ${horarioAtual} horas.`

    if(horarioAtual >= 0 && horarioAtual < 12){
        img.src = '../aula12ex/imagens/manhã.png'
        document.body.style.background = '#FFFF00'
    }else if(horarioAtual >= 12 && horarioAtual < 18){
        img.src = '../aula12ex/imagens/tarde.png'
        document.body.style.background = '#B8860B'
    }else{
        img.src = '../aula12ex/imagens/pexels-rbrigant44-771883.png'
        document.body.style.background = '#4F4F4F'
    }
}


