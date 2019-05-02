(function () {
    const btns = document.querySelectorAll('.opcoesDoCartao-remove');
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const cartao = this.parentElement.parentElement;
            cartao.classList.add('cartao--some');
            cartao.addEventListener('transitionend', () => cartao.remove());
        });
    });
})();


//modularização - IIFE(Immediately Invoked Function Expression)
//Toda vez que criar um arquivo JS coloque o código dentro de uma IIFE