const moduloSync = (function () {
    const btnSync = document.querySelector('#btnSync');
    btnSync.addEventListener('click', function () {
        btnSync.classList.add('botaoSync--esperando');
        btnSync.classList.remove('botaoSync--sincronizado');

        const ajax = new XMLHttpRequest();
        ajax.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');
        ajax.setRequestHeader('Content-Type', 'application/json');

        const cartoes = document.querySelectorAll('.cartao');
        const listaDeCartoes = Array.from(cartoes).map(cartao => {
            return {
                conteudo: cartao.querySelector('.cartao-conteudo').textContent,
                cor: getComputedStyle(cartao).getPropertyValue('background-color')
            };
        }); //transforma a NodeList em um Array

        const infoUsuario = {
            usuario: "oliveiramauro@live.com",
            cartoes: listaDeCartoes  //Array de objetos
        };

        ajax.send(JSON.stringify(infoUsuario));
        //(JSON.stringify) transforma o objeto em uma string JSON e envia para o servidor (ajax.send)

        ajax.addEventListener('load', function () {
            const resposta = JSON.parse(ajax.response);
            alert(`${resposta.quantidade} cartões foram salvos para o usuário ${resposta.usuario}`);
            btnSync.classList.add('botaoSync--sincronizado');
            btnSync.classList.remove('botaoSync--esperando');
        })
    });
    btnSync.classList.remove('no-js');

    return {
        sincronizar: function () {
            btnSync.click();
        }
    };
})();