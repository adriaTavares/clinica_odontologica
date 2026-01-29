const track = document.querySelector(".track");
const slides = document.querySelectorAll(".slide");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-previous");
let movimentarSlide = true;
let index = 1;
let slideWidth = slides[0].offsetWidth + 16; // gap incluso

// CLONAR
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

// posição inicial
track.style.transform = `translateX(${-slideWidth * index}px)`;

// BOTÕES
btnNext.addEventListener("click", () => {
	if (!movimentarSlide) return;
	bloquearToque();
	index++;
	move();
});

btnPrev.addEventListener("click", () => {
	if (!movimentarSlide) return;
	bloquearToque();
	index--;
	move();
});

function bloquearToque(tempo = 1) {
	movimentarSlide = false;
	setTimeout(() => {
		movimentarSlide = true;
	}, tempo * 1000);
}
function move() {
	track.style.transition = "transform 0.5s ease";
	track.style.transform = `translateX(${-slideWidth * index}px)`;
}

// LOOP
track.addEventListener("transitionend", () => {
	let slidesTotal = track.children.length;
	if (index >= slidesTotal - 1) {
		track.style.transition = "none";
		index = 1;
		track.style.transform = `translateX(${-slideWidth * index}px)`;
	}

	if (index <= 0) {
		track.style.transition = "none";
		index = slidesTotal - 2;
		track.style.transform = `translateX(${-slideWidth * index}px)`;
	}
});

// ATUALIZA AO REDIMENSIONAR
window.addEventListener("resize", () => {
	slideWidth = slides[0].offsetWidth + 16;
	track.style.transition = "none";
	track.style.transform = `translateX(${-slideWidth * index}px)`;
});
