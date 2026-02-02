const linksMenuMobile = [...document.querySelectorAll(".nav-item-mobile")];

function fecharMenuMobile() {
    document.querySelector(".camadaBloqueadora").classList.remove("active");
    document.querySelector(".nav-mobile").classList.remove("active");
    document.querySelector(".menu-mobile-linha").classList.remove("active");
    document.body.classList.remove("menu-aberto");
}

linksMenuMobile.forEach((link) =>
    link.addEventListener("click", fecharMenuMobile),
);
