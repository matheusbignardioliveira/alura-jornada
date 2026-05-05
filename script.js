const botoesProximo = document.querySelectorAll('.btn-proximo');

botoesProximo.forEach(botao => {
    botao.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPassoId).classList.add('ativo');
    });
});
