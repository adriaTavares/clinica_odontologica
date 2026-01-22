const IconeMenu = document.querySelector(".icon-menu-mobile");
const Corpo = document.querySelector("main,footer,aside");
const Menu = document.querySelector("nav");
const alterarIconMenu = document.querySelector('.icon-menu-linha')
function manipularMenu() {

	Menu.classList.toggle("active");
	Corpo.classList.toggle("Desativado");
   alterarIconMenu.classList.toggle('active')
}
IconeMenu.addEventListener("click", manipularMenu);
