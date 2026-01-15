const botaoMenu = document.querySelector(".menu-mobile");
const navList = document.querySelector("nav .nav-list");
const incapacitorDeTela = document.querySelector(".incapacitor-de-tela");
let menuAtivo = false;
function toggleNav(event) {
	menuAtivo = !menuAtivo;
	navList.classList.toggle("nav-active", menuAtivo);
	botaoMenu.classList.toggle("menu-active", menuAtivo);
	incapacitorDeTela.classList.toggle("incapacitor-ativo");
	if (menuAtivo) {
		let body = document.querySelector("body *");
		body.addEventListener("pointerdown", (element) => {
			let elemento = element.target;
			let elementoEncontrado = elemento.closest(".nav-list");
			if (!elementoEncontrado) {
				toggleNav();
			} else {
				body.removeEventListener("pointerdown");
			}
		});
	}
}
botaoMenu.addEventListener("pointerdown", toggleNav);
