var nasc = document.getElementById('nasc')
var ano = Number(nasc.value)
var res = document.getElementById('result')
var hj = new Date()
var atual = hj.getFullYear()
var idd = atual - ano
function clickv() {
    var ano = Number(nasc.value)
    var idd = atual - ano
    if (ano < 1900 || ano > atual) {
        window.alert('Digite seu ano de nascimento corretamente!!')
        
    } else {
        var sex = document.getElementsByName('sex')
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        var foto = document.getElementById('foto')
        var genero = ''
        if (sex[0].checked) {
            var genero = 'Homem'
            if (idd >=0 && idd <=10) {
                img.setAttribute('src', 'bb-boy2.jpg')
            } else if (idd >=11 && idd <= 21) {
                img.setAttribute('src', 'jovem-homem2.jpg')
            } else if (idd >= 22 && idd <=59) {
                img.setAttribute('src', 'homem-adulto2.jpg')
            } else {
                img.setAttribute('src', 'véi2.jpg')
            }

        } else if (sex[1].checked) {
            var genero = 'Mulher'
            if (idd >= 0 && idd <= 10) {
                img.setAttribute('src', 'bb-menina2.jpg')
            } else if (idd <= 21) {
                img.setAttribute('src', 'jovem-mulher2.jpg')
            } else if (idd <= 59) {
                img.setAttribute('src', 'mulher-adulta2.jpg')
            } else {
                img.setAttribute('src', 'vea2.jpg')
            }
        } 
        res.innerText = `Detectamos ${genero} e você tem ${idd} anos.`
        img.style.height += '200px'
        img.style.width += '200px'
        img.style.display += 'block'
        img.style.margin += 'auto'
        img.style.borderRadius += '50%'
        res.appendChild(img)
        var main = document.getElementById('main')
        main.style.height = '370px'
    }
}
