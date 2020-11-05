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
}
// Evento do Download
document.getElementById("download_pdf").addEventListener("click", download_pdf);

function download_pdf() {
}

// Evento das imagens

document.getElementById("Lorem").addEventListener("click", ver_mais);
document.getElementById("Ipsum").addEventListener("click", ver_mais);
document.getElementById("Dolor").addEventListener("click", ver_mais);

function ver_mais() {
}