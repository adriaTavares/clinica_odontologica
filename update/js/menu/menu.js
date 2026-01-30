const iconMenuMobile = document.querySelector(".menu-mobile");
const navMobile = document.querySelector(".nav-mobile");
const linhasMenuMobile = document.querySelector(".menu-mobile-linha");
const camadaBloqueadora = document.querySelector(".camadaBloqueadora");
const body = document.body;
iconMenuMobile.addEventListener("click", ativarMenuMobile);

function ativarMenuMobile() {
    camadaBloqueadora.classList.toggle("active");
    linhasMenuMobile.classList.toggle("active");
    navMobile.classList.toggle("active");
    body.classList.toggle("menu-aberto");
}

