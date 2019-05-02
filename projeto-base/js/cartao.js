(function () {
    const cartoes = document.querySelectorAll('.cartao');
    cartoes.forEach(cartao => {
        cartao.addEventListener('focusin', () => {
            cartao.classList.add('cartao--focado');
        });
        cartao.addEventListener('focusout', () => {
            cartao.classList.remove('cartao--focado');
        });
        cartao.addEventListener('change', (event) => {
            let isBotaoCor = event.target.classList.contains('opcoesDoCartao-radioTipo');
            if (isBotaoCor == true) {
                cartao.style.backgroundColor = event.target.value;
            }
        });
        cartao.addEventListener('keyup', () => {
            console.log(event.target);
            let isBotaoCor = event.target.classList.contains('opcoesDoCartao-tipo');
            if (isBotaoCor == true && (event.key === ' ' || event.key === 'Enter')) {
                event.target.click();
            }
        });
        cartao.addEventListener('click', () => {
            let isBotaoRemover = event.target.classList.contains('opcoesDoCartao-remove');
            if (isBotaoRemover == true) {
                if (confirm('Tem certeza que deseja excluir este cartão?') == true) {
                    cartao.classList.add('cartao--some');
                    cartao.addEventListener('transitionend', () => cartao.remove());
                }
            }
        });
    })
})();