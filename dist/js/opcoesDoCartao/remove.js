'use strict';

(function () {
    var btns = document.querySelectorAll('.opcoesDoCartao-remove');
    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var cartao = this.parentElement.parentElement;
            cartao.classList.add('cartao--some');
            cartao.addEventListener('transitionend', function () {
                return cartao.remove();
            });
        });
    });
})();

//modularização - IIFE(Immediately Invoked Function Expression)
//Toda vez que criar um arquivo JS coloque o código dentro de uma IIFE