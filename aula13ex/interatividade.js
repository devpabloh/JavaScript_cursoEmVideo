

function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.querySelector('div#res')

    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente.')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', '/aula13ex/imagens/homem/menino.jpg')

            }else if(idade >= 12 && idade < 18){
                img.setAttribute('src', '/aula13ex/imagens/homem/adolescente.jpg') 
            }else if(idade >= 18 && idade < 60){
                img.setAttribute('src', '/aula13ex/imagens/homem/homem adulto.jpg') 
            }else{
                img.setAttribute('src', '/aula13ex/imagens/homem/homem idoso.jpg') 
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', '/aula13ex/imagens/mulher/menina até 12 anos.jpg') 
            }else if(idade >= 12 && idade < 18){
                img.setAttribute('src', '/aula13ex/imagens/mulher/menina até 12 anos.jpg') 
            }else if(idade >= 18 && idade < 60){
                img.setAttribute('src', '/aula13ex/imagens/mulher/mulher adulta.jpg') 
            }else{
                img.setAttribute('src', '/aula13ex/imagens/mulher/mulher idosa.jpg') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}