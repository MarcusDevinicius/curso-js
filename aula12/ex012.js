var atual = new Date()
var hora = atual.getHours()
console.log(`São ${hora} horas.`)
if (hora >= 0 && hora <= 5) {
    console.log('Boa madrugada! 🥱')
} else if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

