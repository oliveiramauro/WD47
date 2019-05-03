'use strict';

(function () {

    $('#busca').on('input', function () {
        var pesquisa = $(this).val().trim();
        if (pesquisa.length > 0) {
            $('.cartao').fadeOut('fast').filter(function () {
                return $(this).find('.cartao-conteudo').text().match(new RegExp(pesquisa, 'i'));
            }).fadeIn('fast');
            //efetua a busca nos cartões
            //RegExp ('i' - insensitive)
            //
        } else {
            $('.cartao').fadeIn();
        }
    });

    $('#busca').removeClass('no-js');
})();