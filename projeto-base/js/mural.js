const moduloMural = (function () {
  let numeroDoCartao = 0;
  function adicionaCartaoNoMural(cartaoObj) {
    numeroDoCartao++;
    let conteudo = cartaoObj.conteudo;
    const cartao = $(`
                <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao" style="background-color:${cartaoObj.cor}">
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
        cartao.on('transitionend', () => {
          cartao.remove();
          moduloSync.sincronizar();
        });
      }

    });
  }

  $.ajax({
    type: 'GET',
    url: 'https://ceep.herokuapp.com/cartoes/carregar',
    data: { usuario: 'oliveiramauro@live.com' },
    dataType: 'jsonp' //JSONP (JSON with padding) é um formato antigo de dados
  })
    .done(resposta => {
      console.log(resposta);
      const cartoes = resposta.cartoes;
      if (cartoes.length > 0) {
        cartoes.forEach(cartao => {
          adicionaCartaoNoMural(cartao);
        });
      }
      else {
        alert('Não há cartões salvos para serem exibidos!');
      }

    })
    .fail(erro => {
      alert('Não foi possível carregar seus cartões!');
    });

  //retorna um objeto que vai representar o módulo
  return {
    /******************
     * esse objeto terá apenas 1 método público(adicionaCartao)
     * que quando chamado vai executar a função adicionaCartaoNoMural 
     * que existe só dentro do módulo 
     */
    adicionarCartao: adicionaCartaoNoMural

  };



})();


