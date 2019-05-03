'use strict';

(function () {

    var btnAjuda = document.querySelector('#btnAjuda');
    btnAjuda.addEventListener('click', function () {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
        ajax.responseType = 'json';
        ajax.send();
        ajax.addEventListener('load', function () {
            var ajudas = ajax.response.instrucoes; //array de objetos
            ajudas.forEach(function (ajuda) {
                moduloMural.adicionarCartao(ajuda);
            });
        });
        ajax.addEventListener('error', function () {
            alert('Erro ao buscar as informações. Por tente novamente mais tarde');
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