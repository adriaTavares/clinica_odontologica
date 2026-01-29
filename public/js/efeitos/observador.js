const sections = document.querySelectorAll(".animadoReveal");

function scrollReveal(entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;

		if (entry.target.classList.contains("scrollReveal")) return;

		entry.target.classList.add("scrollReveal");

		console.log(entry.target);
		console.log(entry.target.classList);
		// se for só uma vez
		observer.unobserve(entry.target);
	});
}

const observer = new IntersectionObserver(scrollReveal, {
	root: null,
	rootMargin: "100px",
	threshold: 0.01,
});

[...sections].forEach((section) => {
	observer.observe(section);
});
