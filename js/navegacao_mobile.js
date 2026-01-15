const botaoMenu = document.querySelector(".menu-mobile");
const navList = document.querySelector(".nav-list");
const incapacitor = document.querySelector(".incapacitor-de-tela");

function fecharMenu() {
	navList.classList.remove("nav-active");
	botaoMenu.classList.remove("menu-active");
	incapacitor.classList.remove("incapacitor-ativo");
	document.removeEventListener("pointerdown", cliqueFora);
}

function abrirMenu() {
	navList.classList.add("nav-active");
	botaoMenu.classList.add("menu-active");
	incapacitor.classList.add("incapacitor-ativo");
	document.addEventListener("pointerdown", cliqueFora);
}

function cliqueFora(e) {
	if (!e.target.closest(".nav-list") && !e.target.closest(".menu-mobile")) {
		fecharMenu();
	}
}

botaoMenu.addEventListener("pointerdown", (e) => {
	e.stopPropagation();
	if (navList.classList.contains("nav-active")) {
		fecharMenu();
	} else {
		abrirMenu();
	}
});
