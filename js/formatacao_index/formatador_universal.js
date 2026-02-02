const sectionsParaMenu = [
    ...document.querySelectorAll("section[id]")
];

const menuMobile = () =>
    [...document.querySelectorAll('.nav-item-mobile[data-target]')];

const menuDesktop = () =>
    [...document.querySelectorAll('.nav-item[data-target]')];

function getMenuAtivo() {
    return window.matchMedia("(min-width: 1000px)").matches
        ? menuDesktop()
        : menuMobile();
}

function modificadorMenu(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;
        const itensMenu = getMenuAtivo();

        const itemAtivo = itensMenu.find(
            (item) => item.dataset.target === id
        );

        if (!itemAtivo) return;

        itensMenu.forEach((item) =>
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
