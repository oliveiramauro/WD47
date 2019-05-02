(function(){

    const btnAjuda = document.querySelector('#btnAjuda');
    btnAjuda.addEventListener('click', function() {
        const ajudas = [
            {conteudo: 'Bem-vindo ao CEEP!', cor: '#f054540'},
            {conteudo: 'Clique no botão "Linhas" para mudar o layout!', cor: '#92c4ec'}
        ];
        ajudas.forEach( ajuda => {
            adicionaCartaoNoMural(ajuda)
        });
    });

    btnAjuda.classList.remove('no-js');

})();