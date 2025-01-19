var ball01 = document.querySelector('div.ball0')
var ball02 = document.querySelector('div.ball1')
var ball03 = document.querySelector('div.ball2')
var fund = document.querySelector('div.fund')
var bd = document.querySelector('body')

function normal(){
    ball01.style.backgroundColor = 'hsl(6, 63%, 50%)'
    ball02.style.backgroundColor = 'hsl(224, 36%, 15%)'
    ball03.style.backgroundColor = 'hsl(224, 36%, 15%)'

    ball01.style.color = 'hsl(6, 63%, 50%)'
    ball02.style.color = 'hsl(224, 36%, 15%)'
    ball03.style.color = 'hsl(224, 36%, 15%)'

    fund.style.backgroundColor = 'hsl(224, 36%, 15%)'
    bd.setAttribute('class', '')
}
function light(){
    ball01.style.backgroundColor = 'hsl(0, 5%, 81%)'
    ball02.style.backgroundColor = 'hsl(25, 98%, 40%)'
    ball03.style.backgroundColor = 'hsl(0, 5%, 81%)'

    ball01.style.color = 'hsl(0, 5%, 81%)'
    ball02.style.color = 'hsl(25, 98%, 40%)'
    ball03.style.color = 'hsl(0, 5%, 81%)'

    fund.style.backgroundColor = 'hsl(0, 5%, 81%)'
    bd.setAttribute('class', 'whitebd')
}
function dark(){
    ball01.style.backgroundColor = 'hsl(268, 71%, 12%)'
    ball02.style.backgroundColor = 'hsl(268, 71%, 12%)'
    ball03.style.backgroundColor = 'hsl(177, 92%, 70%)'

    ball01.style.color = 'hsl(268, 71%, 12%)'
    ball02.style.color = 'hsl(268, 71%, 12%)'
    ball03.style.color = 'hsl(177, 92%, 70%)'

    fund.style.backgroundColor = 'hsl(268, 71%, 12%)'
    bd.setAttribute('class', 'darkbd')
}

