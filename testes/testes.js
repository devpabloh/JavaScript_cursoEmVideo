

function contar(){
    
    let img = document.getElementsByClassName('img');

    let srcAtual = img.getAttribute('src');

    if(srcAtual === "imagens/Black Minimal Motivation Quote LinkedIn Banner.png"){
        img.setAttribute('src', '/testes/imagens/icons8-react-native-500.png')

    }else{
        img.setAttribute('src', '')
    }


}