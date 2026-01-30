const itensMenuHome = [
    ...document.querySelectorAll(".nav-item-mobile[data-target]")
];

const sectionsParaMenu = [
    ...document.querySelectorAll("section[id]")
];

function modificadorMenu(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        const itemAtivo = itensMenuHome.find(
            (item) => item.dataset.target === id
        );

        if (!itemAtivo) return;

        itensMenuHome.forEach((item) =>
            item.classList.toggle("active", item === itemAtivo)
        );
    });
}

const observerMenu = new IntersectionObserver(modificadorMenu, {
    root: null,
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0,
});

sectionsParaMenu.forEach((section) =>
    observerMenu.observe(section)
);
