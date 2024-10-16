var atual = new Date()
var hora = atual.getHours()
var horario = document.getElementById('horario')
var imagem = document.getElementById('img')
var fundo = document.getElementById('fundo')
horario.innerText = `Agora são ${hora} horas.`
if (hora >= 0 && hora <= 5) {
    fundo.style.backgroundColor = '#432c69'
    horario.innerText += ' Boa Madrugada!'
    imagem.src = 'noite2.jpg'
} else if(hora <= 12) {
    horario.innerText += ' Bom dia!'
    imagem.src = 'amanhecer2.jpg'
} else if(hora <= 18) {
    fundo.style.backgroundColor = '#eab300'
    horario.innerText += ' Boa tarde!'
    imagem.src = 'tarde2.jpg'
} else {
    fundo.style.backgroundColor = '#1c1030'
    horario.innerText += ' Boa noite!'
    imagem.src = 'noite2.jpg'
}