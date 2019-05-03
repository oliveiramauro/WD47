'use strict';

var moduloMural = function () {
  var numeroDoCartao = 0;
  function adicionaCartaoNoMural(cartaoObj) {
    numeroDoCartao++;
    var conteudo = cartaoObj.conteudo;
    var cartao = $('\n                <article id="cartao_' + numeroDoCartao + '" tabindex="0" class="cartao" style="background-color:' + cartaoObj.cor + '">\n            <div class="opcoesDoCartao">\n              <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">\n                <svg><use xlink:href="#iconeRemover"></use></svg>\n              </button>\n    \n              <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#EBEF40" id="corPadr\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo" checked>\n              <label for="corPadr\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">\n                Padr\xE3o\n              </label>\n    \n              <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#F05450" id="corImportante-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n              <label for="corImportante-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">\n                Importante\n              </label>\n    \n              <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#92C4EC" id="corTarefa-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n              <label for="corTarefa-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">\n                Tarefa\n              </label>\n    \n              <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#76EF40" id="corInspira\xE7\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n              <label for="corInspira\xE7\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">\n                Inspira\xE7\xE3o\n              </label>\n            </div>\n            <p class="cartao-conteudo" contenteditable tabindex="0">' + conteudo + '</p>\n          </article>\n                ');
    $(cartao).appendTo('.mural');

    cartao.on('focusin', function () {
      cartao.addClass('cartao--focado');
    });
    cartao.on('focusout', function () {
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
        cartao.on('transitionend', function () {
          return cartao.remove();
        });
      }
    });
  }
  //retorna um objeto que vai representar o módulo
  return {
    /******************
     * esse objeto terá apenas 1 método público(adicionaCartao)
     * que quando chamado vai executar a função adicionaCartaoNoMural 
     * que existe só dentro do módulo 
     */
    adicionarCartao: adicionaCartaoNoMural

  };
}();