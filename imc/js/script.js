//DOM
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const btcalculo = document.querySelector('#btcalculo')
const resultado = document.querySelector('#resultado')

//Eventos
btcalculo.addEventListener('click', calculo)

//Funções

function calculo(){
    inputpeso = Number(peso.value)
    inputaltura = Number(altura.value)

    imc = inputpeso/(inputaltura*inputaltura)

    if (imc < 18.5){
        condicao = 'Você está magro'
    }
    
    else if (imc >= 18.5 && imc < 25){
        condicao = 'Você está no peso ideal'
    }
    
    else if (imc >= 25 && imc <= 30){
        condicao = 'Você está acima do peso'

    }
    
    else{
        condicao = 'Você está Obeso'

    }

resultado.innerHTML = `Seu IMC é de ${imc.toFixed(1)}, <br> ${condicao}`;
}