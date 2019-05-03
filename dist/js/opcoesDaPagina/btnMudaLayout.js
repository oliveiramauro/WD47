'use strict';

(function () {
    var btn = document.querySelector('#btnMudaLayout');
    var mural = document.querySelector('.mural');
    btn.addEventListener('click', function () {
        mural.classList.toggle('mural--linha');
        if (btn.textContent.trim() == 'Linhas') {
            btn.textContent = 'Blocos';
        } else {
            btn.textContent = 'Linhas';
        }
    });

    btn.classList.remove('no-js');
})();