function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if(minutos<10){
        minutos = "0" + minutos;
    }
    msg.innerHTML = `Agora são ${hora}:${minutos}.`
    if (hora>=0 && hora<12) {
        //bom dia
        img.src = 'bomdia.png'
        document.body.style.background = '#d4a888'
    }else if (hora>=12 && hora<=18) {
        //boa tarde
        img.src = 'boatarde.png'
        document.body.style.background = '#d59c44'
    }else{
        // boa noite
        img.src = 'boanoite.png'
        document.body.style.background = '#0e1618'
    }
}