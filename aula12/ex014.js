let agora = new Date() // Usado para pegar a hora
let hora = agora.getHours() //getHours() puxa a hora que está no seu computador

if(hora < 12){
    console.log('Bom dia! Good Morning!')
}else if(hora <= 18){
    console.log('Boa tarde! Good Afternoon!')
}else{
    console.log('Boa noite! Good night!')
}