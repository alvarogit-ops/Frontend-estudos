var resultado = document.getElementById('resultado')


function insert(valor){    
    resultado.value += valor
}

function calc(){
    resultado.value = eval(resultado.value)
}

function backspace(){
    resultado.value = resultado.value.substring(0, resultado.value.length - 1)
}

function clean(){
    resultado.value = ''
}

if (Number.isFinite(Infinity)){
    resultado.value = 'Erro'
}
