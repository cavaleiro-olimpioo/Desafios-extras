var sm = ''
var sp = ''
var res = document.querySelector('p#resul')
var smlh = sm.length
var tstsoma = false


function um(){
    sm += '1'
    res.innerHTML += sm[sm.length-1]
}
function dois(){
    sm += '2'
    res.innerHTML += sm[sm.length-1]
}
function tres(){
    sm += '3'
    res.innerHTML += sm[sm.length-1]
}
function quatro(){
    sm += '4'
    res.innerHTML += sm[sm.length-1]
}
function cinco(){
    sm += '5'
    res.innerHTML += sm[sm.length-1]
}
function seis(){
    sm += '6'
    res.innerHTML += sm[sm.length-1]
}
function sete(){
    sm += '7'
    res.innerHTML += sm[sm.length-1]
}
function oito(){
    sm += '8'
    res.innerHTML += sm[sm.length-1]
}
function nove(){
    sm += '9'
    res.innerHTML += sm[sm.length-1]
}
function zero(){
    sm += '0'
    res.innerHTML += sm[sm.length-1]
}
function mais(){
    res.innerHTML += '+'
    sp = Number(sm.value)
    sm = ''
    tstsoma = true
}
function resFinal(){
    window.alert(Number(sp.value))
}
function reset(){
    res.innerHTML = ''
    sm = '[]'
}


