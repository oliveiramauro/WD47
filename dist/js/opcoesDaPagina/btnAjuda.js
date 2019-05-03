'use strict';

(function () {

    var btnAjuda = document.querySelector('#btnAjuda');
    btnAjuda.addEventListener('click', function () {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes/');
        ajax.responseType = 'json';
        ajax.send();
        ajudas.forEach(function (ajuda) {
            moduloMural.adicionarCartao(ajuda);
        });
        /*const ajudas = [
            {conteudo: 'Bem-vindo ao CEEP!', cor: '#f054540'},
            {conteudo: 'Clique no botão "Linhas" para mudar o layout!', cor: '#92c4ec'}
        ];
        ajudas.forEach( ajuda => {
            moduloMural.adicionarCartao(ajuda);
        });*/
    });

    btnAjuda.classList.remove('no-js');
})();