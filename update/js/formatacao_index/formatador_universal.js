const itensMenuHome = [
    ...document.querySelectorAll(".nav-item-mobile[data-target]"),
];
const sectionsParaMenu = [...document.querySelectorAll("section[id]")];

function modificadorMenu(entries) {
    const visiveis = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    console.log(visiveis);
    if (!visiveis.length) return;

    const idAtivo = visiveis[0].target.id;

    itensMenuHome.forEach((item) => {
        item.classList.toggle("active", item.dataset.target === idAtivo);
    });
}

const observerMenu = new IntersectionObserver(modificadorMenu, {
    root: null,
    threshold: 1,
    rootMargin: "0px",
});

sectionsParaMenu.forEach((section) => observerMenu.observe(section));
