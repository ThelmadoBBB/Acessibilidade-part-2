document.addEventListener('DOMContentLoaded', function () {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
    const body = document.body;

    // Abrir/fechar menu de acessibilidade
    botaoAcessibilidade.addEventListener('click', function () {
        opcoesAcessibilidade.classList.toggle('apresenta-lista');
        const expanded = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoAcessibilidade.setAttribute('aria-expanded', !expanded);
    });

    // Aumentar fonte
    aumentarFonte.addEventListener('click', function () {
        let tamanhoAtual = parseFloat(window.getComputedStyle(body).fontSize);
        body.style.fontSize = (tamanhoAtual + 2) + 'px';
    });

    // Diminuir fonte
    diminuirFonte.addEventListener('click', function () {
        let tamanhoAtual = parseFloat(window.getComputedStyle(body).fontSize);
        if (tamanhoAtual > 10) { // tamanho mínimo
            body.style.fontSize = (tamanhoAtual - 2) + 'px';
        }
    });

    // Alternar contraste
    if (alternaContraste) {
        alternaContraste.addEventListener('click', function () {
            body.classList.toggle('contraste-alto');
        });
    }
});
