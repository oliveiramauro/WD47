'use strict';

var moduloSync = function () {
    var btnSync = document.querySelector('#btnSync');
    btnSync.addEventListener('click', function () {
        btnSync.classList.add('botaoSync--esperando');
        btnSync.classList.remove('botaoSync--sincronizado');

        var ajax = new XMLHttpRequest();
        ajax.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');
        ajax.setRequestHeader('Content-Type', 'application/json');

        var cartoes = document.querySelectorAll('.cartao');
        var listaDeCartoes = Array.from(cartoes).map(function (cartao) {
            return {
                conteudo: cartao.querySelector('.cartao-conteudo').textContent,
                cor: getComputedStyle(cartao).getPropertyValue('background-color')
            };
        }); //transforma a NodeList em um Array

        var infoUsuario = {
            usuario: "oliveiramauro@live.com",
            cartoes: listaDeCartoes //Array de objetos
        };

        ajax.send(JSON.stringify(infoUsuario));
        //(JSON.stringify) transforma o objeto em uma string JSON e envia para o servidor (ajax.send)

        ajax.addEventListener('load', function () {
            var resposta = JSON.parse(ajax.response);
            alert(resposta.quantidade + ' cart\xF5es foram salvos para o usu\xE1rio ' + resposta.usuario);
            btnSync.classList.add('botaoSync--sincronizado');
            btnSync.classList.remove('botaoSync--esperando');
        });
    });
    btnSync.classList.remove('no-js');

    return {
        sincronizar: function sincronizar() {
            btnSync.click();
        }
    };
}();