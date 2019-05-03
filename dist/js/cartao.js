'use strict';

(function () {
    var cartoes = document.querySelectorAll('.cartao');
    cartoes.forEach(function (cartao) {
        cartao.addEventListener('focusin', function () {
            cartao.classList.add('cartao--focado');
        });
        cartao.addEventListener('focusout', function () {
            cartao.classList.remove('cartao--focado');
        });
        cartao.addEventListener('change', function (event) {
            var isBotaoCor = event.target.classList.contains('opcoesDoCartao-radioTipo');
            if (isBotaoCor == true) {
                cartao.style.backgroundColor = event.target.value;
            }
        });
        cartao.addEventListener('keyup', function () {
            console.log(event.target);
            var isBotaoCor = event.target.classList.contains('opcoesDoCartao-tipo');
            if (isBotaoCor == true && (event.key === ' ' || event.key === 'Enter')) {
                event.target.click();
            }
        });
        cartao.addEventListener('click', function () {
            var isBotaoRemover = event.target.classList.contains('opcoesDoCartao-remove');
            if (isBotaoRemover == true) {
                if (confirm('Tem certeza que deseja excluir este cartão?') == true) {
                    cartao.classList.add('cartao--some');
                    cartao.addEventListener('transitionend', function () {
                        return cartao.remove();
                    });
                }
            }
        });
    });
})();