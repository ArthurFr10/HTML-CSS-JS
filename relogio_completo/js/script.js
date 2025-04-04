//DOM
const hora = document.querySelector('#horas')
const minuto = document.querySelector('#minutos')
const segundo = document.querySelector('#segundos')
const mensagem = document.querySelector('#mensagem')
const dia1 = document.querySelector('#dia')
const mes1 = document.querySelector('#mes')
const ano1 = document.querySelector('#ano')
const corpo = document.querySelector('body')

//EVENTOS
setInterval(relogio, 1000)

//FUNÇÕES
function relogio(){
    bahia = new Date()
    horas = bahia.getHours()
    minutos = bahia.getMinutes()
    segundos = bahia.getSeconds()
    dias = bahia.getDate()
    meses = bahia.getMonth() +1
    anos = bahia.getFullYear()

    if(horas < 10){
        horas = "0" + horas
    }

    if(minutos < 10){
        minutos = "0" + minutos
    }

    if(segundos < 10){
        segundos = "0" + segundos
    }
    
    if(dias < 10){
        dias = "0" + dias
    }
    if(meses<10){
        meses = "0" + meses
    }

    if (horas >= 5 && horas < 12){
        mensagem.textContent = 'Bom dia'
        corpo.className = 'dia'
    }else if(horas >= 12 && horas <18){
        mensagem.textContent = 'Boa tarde'
        corpo.className = 'dia'
    }else{
        mensagem.textContent = 'Boa Noite'
        corpo.className = 'noite'
    }

    hora.textContent = horas
    minuto.textContent = minutos
    segundo.textContent = segundos
    dia1.textContent = dias
    mes1.textContent = meses
    ano1.textContent = anos
}


