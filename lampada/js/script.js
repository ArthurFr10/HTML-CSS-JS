//dom
const lampada = document.querySelector('#lampada')
const ligar = document.querySelector('#ligar')
const desligar = document.querySelector('#desligar')

//eventos
ligar.addEventListener('click', ligarr)
desligar.addEventListener('click', desligarr)

//funções
function ligarr(){
    lampada.src = 'image/lampada-acesa.png'
    }

function desligarr(){
    lampada.src = 'image/lampada-apagada.png'
}

