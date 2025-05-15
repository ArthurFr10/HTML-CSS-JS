//DOM
const inpdistancia = document.querySelector('#distancia')
const inpconsumo = document.querySelector('#consumo')
const inppreco = document.querySelector('#preco')
const bt = document.querySelector('#botao')
const resultados = document.querySelector('#resultado')

//Eventos
bt.addEventListener('click', viagem)


//Funções

function viagem(){

    d = Number(inpdistancia.value)
    c = Number(inpconsumo.value)
    p = Number(inppreco.value)

    calculo = (d/c)*p
    resultados.textContent = `O valor gasto para essa viagem é de: R$${calculo.toFixed(2)}`
}