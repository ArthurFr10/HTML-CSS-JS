//DOM
const imagem = document.querySelector('#imagem')
const paragrafo = document.querySelector('#paragrafo')
const spider = document.querySelector('#spider')
const avengers = document.querySelector('#avengers')
const captain = document.querySelector('#captain')
const thunderbolts = document.querySelector('#thunderbolts')

//eventos

spider.addEventListener('click', btspider)
avengers.addEventListener('click', btavengers)
captain.addEventListener('click', btcaptain)
thunderbolts.addEventListener('click', btthunderbolts)

//funções

function btspider(){
    imagem.src = 'image/spider man.png'
    paragrafo.textContent = '"Homem-Aranha: Sem Volta para Casa" segue Peter Parker após revelar sua identidade. Ele pede ajuda ao Doutor Estranho, mas uma falha no feitiço abre portas para múltiplos universos, trazendo vilões e versões alternativas do herói. Ação e emoção.'
}

function btavengers(){
    imagem.src = 'image/vingadores.jpg'
    paragrafo.textContent = '"Vingadores: Ultimato" mostra os heróis restantes tentando reverter os danos causados por Thanos, que dizimou metade da população. Juntos, eles realizam uma missão arriscada para coletar as Joias do Infinito no passado, culminando em uma batalha épica pela sobrevivência.'
}

function btcaptain(){
    imagem.src = 'image/Captain_America_The_Winter_Soldier.jpg'
    paragrafo.textContent = '"Capitão América: O Soldado Invernal" segue Steve Rogers enfrentando uma ameaça dentro da S.H.I.E.L.D., quando descobre que o misterioso Soldado Invernal é um antigo amigo, Bucky Barnes. O filme mistura ação, traição e questionamentos sobre liberdade e segurança.'
}

function btthunderbolts(){
    imagem.src = 'image/thunderbolts.jpg'
    paragrafo.textContent = 'Em "Thunderbolts*", um grupo de anti-heróis liderado por Yelena Belova e Guardião Vermelho é manipulado por Valentina Allegra de Fontaine para uma missão arriscada. Ao confrontarem seus passados sombrios, a equipe se une como os Novos Vingadores.'
}