const paginaInicial =  localStorage.getItem('paginaInicial') || prompt('Escolha uma página inicial: ')

if(paginaInicial) {
    if(paginaInicial.match(/^(http[s]{0,1}):\/\//)) {
        janelaPrincipal.src = paginaInicial
    } else {
        janelaPrincipal.src = 'http://' + paginaInicial
    }

    inputEndereco.value = janelaPrincipal.src
    localStorage.setItem('paginaInicial', janelaPrincipal.src)
}