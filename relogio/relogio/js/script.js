const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')


setInterval(relogio, 1000)

function relogio(){
    agora = new Date()
    hora = agora.getHours()
    minuto = agora.getMinutes()
    segundo = agora.getSeconds()

    horas.textContent = hora
    minutos.textContent = minuto
    segundos.textContent = segundo

    if(hora<10){
        hora = "0"+ hora
    }
    
    if(minuto<10){
        minuto = "0" + minuto
    }
    
    if(segundo<10){
        segundo = "0" + segundo
    }
}

