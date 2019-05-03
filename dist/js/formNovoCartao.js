'use strict';

(function () {
    /* essa parte foi transferida para mural.js
    let numeroDoCartao = 0;*/
    var form = document.querySelector('.formNovoCartao');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var caixaTexto = form.querySelector('.formNovoCartao-conteudo');
        if (caixaTexto.value.trim().length === 0) {
            var msg = document.createElement('div');
            msg.classList.add('formNovoCartao-msg');
            msg.textContent = 'Por favor preencha o campo com alguma coisa';
            msg.addEventListener('animationend', function () {
                return msg.remove();
            });
            form.append(msg);
        } else {
            /* essa parte foi transferida para mural.js
            numeroDoCartao++; */
            moduloMural.adicionarCartao({ conteudo: caixaTexto.value });
            caixaTexto.value = ""; //limpa a caixa de texto
            /* essa parte foi transferida para mural.js
            
            const cartao = $(`
            <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao">
            <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
            </label>
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
            </label>
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
            </label>
            <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
            </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
            </article>
            `);
            $(cartao).appendTo('.mural');
             cartao.on('focusin', () => {
                cartao.addClass('cartao--focado');
            });
            cartao.on('focusout', () => {
                cartao.removeClass('cartao--focado');
            });
            cartao.on('change', '.opcoesDoCartao-radioTipo', function (event) {
                //target retorna valor html, por isso o val não é usado aqui, teria que transformar em jQuery para depois usar o val
                //exemplo: $(event.target).val() 
                cartao.css('background-color', event.target.value);
            });
            cartao.on('keyup', '.opcoesDoCartao-tipo', function (event) {
                //console.log(event.target);
                //let isBotaoCor = event.target.classList.contains('opcoesDoCartao-tipo');
                if (event.key === ' ' || event.key === 'Enter') {
                    event.target.click();
                }
            });
            cartao.on('click', '.opcoesDoCartao-remove', function (event) {
                if (confirm('Tem certeza que deseja excluir este cartão?') == true) {
                    cartao.addClass('cartao--some');
                    cartao.on('transitionend', () => cartao.remove());
                }
             });*/
        }
    });

    form.classList.remove('no-js');
})();