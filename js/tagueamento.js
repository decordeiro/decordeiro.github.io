// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.



// Código de escuta Analytics

window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-UA-12345-6', 'auto');
ga('send', 'pageview');



// Evento do Contato
document.getElementById("link_externo").addEventListener("click", entre_em_contato);

function entre_em_contato() {
    ga('send', 'event', {
        eventCategory: 'menu”',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
      });
}
// Evento do Download
document.getElementById("download_pdf").addEventListener("click", download_pdf);

function download_pdf() {
    ga('send', 'event', {
        eventCategory: 'menu”',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
      });
}

// Evento das imagens

document.getElementById("Lorem").addEventListener("click", lorem);
function lorem() {
    ga('send', 'event', {
        eventCategory: 'analise”',
        eventAction: 'ver_mais',
        eventLabel: 'Lorem'
      });
}

document.getElementById("Ipsum").addEventListener("click", Ipsum);
function Ipsum() {
    ga('send', 'event', {
        eventCategory: 'analise”',
        eventAction: 'ver_mais',
        eventLabel: 'Ipsum'
      });
}


document.getElementById("Dolor").addEventListener("click", Dolor);
function Dolor() {
    ga('send', 'event', {
        eventCategory: 'analise”',
        eventAction: 'ver_mais',
        eventLabel: 'Dolor'
      });
}


// Eventos do form


document.getElementById("Nome").addEventListener("change", Nome);
function Nome() {
    ga('send', 'event', {
        eventCategory: 'contato”',
        eventAction: 'Nome',
        eventLabel: 'preencheu'
      });
}

document.getElementById("email").addEventListener("change", email);
function Nome() {
    ga('send', 'event', {
        eventCategory: 'contato”',
        eventAction: 'email',
        eventLabel: 'preencheu'
      });
}

document.getElementById("Nome").addEventListener("change", telefone);
function telefone() {
    ga('send', 'event', {
        eventCategory: 'contato”',
        eventAction: 'telefone',
        eventLabel: 'preencheu'
      });
}


// Achei um pouco de overkill colocar o change para a checkbox, porém melhor pecar pelo zelo

document.getElementById("aceito").addEventListener("change", aceito);
function aceito() {
    ga('send', 'event', {
        eventCategory: 'contato”',
        eventAction: 'aceito',
        eventLabel: 'preencheu'
      });
}

document.getElementById("contato_form").addEventListener("submit", contato_form);

function contato_form() {
    ga('send', 'event', {
        eventCategory: 'contato”',
        eventAction: 'enviado”',
        eventLabel: 'enviado”'
      });
}