//DOM
const imagem = document.querySelector('#silhueta')
const btraiva = document.querySelector('#raiva')
const btalegria = document.querySelector('#alegria')
const bttristeza = document.querySelector('#tristeza')
const btnojinho = document.querySelector('#nojinho')


//Eventos
btalegria.addEventListener('click', alegria)
btnojinho.addEventListener('click', nojinho)
btraiva.addEventListener('click', raiva)
bttristeza.addEventListener('click', tristeza)

//Funções
function tristeza(){
    imagem.src = 'image/04.png'

}

function nojinho(){
    imagem.src = 'image/03.png'
}

function raiva(){
    imagem.src = 'image/01.png'
}

function alegria(){
    imagem.src = 'image/02.png'
}
