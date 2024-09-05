function carregar() {
    var mensagem = window.document.getElementById('msg');
    var photo = window.document.getElementById('fotinha');
    var data = new Date();
    var hora = data.getHours();
    mensagem.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        photo.src = 'imagens/manhã.jpg';
        document.body.style.background = 'rgb(46, 130, 240)';
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        photo.src = 'imagens/tarde.jpg';
        document.body.style.background = 'orange';
    } else {
        //BOA NOITE
        photo.src = 'imagens/noite.jpg';
        document.body.style.background = '#751fff';
    }
}