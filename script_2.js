if ("scrollRestoration" in history) {
    history.scrollRestoration = "auto";
}

const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})

/* carrusel*/
const carrusel = document.querySelector(".carrusel-container");
const carruselCards = document.querySelectorAll(".carrusel-tarjeta");

if ("scrollRestoration" in history) {
    history.scrollRestoration = "auto";
}

const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})

/* carrusel*/
const carrusel = document.querySelector(".carrusel-container");
const carruselCards = document.querySelectorAll(".carrusel-tarjeta");

if (carrusel && carruselCards.length > 0) {
    const totalCards = carruselCards.length;
const angleStep = 360 / totalCards;

let radius = getCarruselRadius();

function getCarruselRadius() {
    if (window.innerWidth <= 768) {
        return 350;
    }

    if (window.innerWidth <= 1024) {
        return 380;
    }

    return Math.min(Math.max(window.innerWidth * 0.25, 430), 560);
}
    let rotation = 0;
    let autoSpeed = -0.18;

    let isDragging = false;
    let lastMouseX = 0;

    function updateCarrusel() {
        carruselCards.forEach((card, index) => {
            const angle = rotation + index * angleStep;

            card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        });
    }

    window.addEventListener("resize", () => {
    radius = getCarruselRadius();
    updateCarrusel();
});

    function animateCarrusel() {
        if (!isDragging) {
            rotation += autoSpeed;
            updateCarrusel();
        }

        requestAnimationFrame(animateCarrusel);
    }

    /* MOUSE - PC */
    carrusel.addEventListener("mousedown", (event) => {
        event.preventDefault();

        isDragging = true;
        lastMouseX = event.clientX;
        carrusel.classList.add("dragging");
    });

    document.addEventListener("mousemove", (event) => {
        if (!isDragging) return;

        const movement = event.clientX - lastMouseX;

        rotation += movement * 0.35;

        lastMouseX = event.clientX;

        updateCarrusel();
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        carrusel.classList.remove("dragging");
    });

    /* TOUCH - CELULAR / TABLET */
    carrusel.addEventListener("touchstart", (event) => {
        isDragging = true;
        lastMouseX = event.touches[0].clientX;
        carrusel.classList.add("dragging");
    }, { passive: true });

    document.addEventListener("touchmove", (event) => {
        if (!isDragging) return;

        const movement = event.touches[0].clientX - lastMouseX;

        rotation += movement * 0.28;

        lastMouseX = event.touches[0].clientX;

        updateCarrusel();
    }, { passive: true });

    document.addEventListener("touchend", () => {
        isDragging = false;
        carrusel.classList.remove("dragging");
    });

    document.addEventListener("touchcancel", () => {
        isDragging = false;
        carrusel.classList.remove("dragging");
    });

    updateCarrusel();
    animateCarrusel();
}

/* BUTTON */
const logoButton = document.querySelector(".logo-button");

if (logoButton) {
    logoButton.addEventListener("click", () => {
        createBurgerRain();
    });
}

function createBurgerRain() {
    const burgerAmount = 40;

    for (let i = 0; i < burgerAmount; i++) {
        const burger = document.createElement("img");

        burger.classList.add("burger-drop");
        burger.src = "img/burger.png";
        burger.alt = "Hamburguesa";

        burger.style.left = Math.random() * 100 + "vw";
        burger.style.width = 45 + Math.random() * 50 + "px";
        burger.style.animationDuration = 2.2 + Math.random() * 4 + "s";
        burger.style.animationDelay = Math.random() * 1.2 + "s";

        document.body.appendChild(burger);

        setTimeout(() => {
            burger.remove();
        }, 9500);
    }
}

/* Mejoras menú */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

const observerOptions = {
    root: null,
    threshold: 0.55
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");

            navLinks.forEach((link) => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}, observerOptions);

sections.forEach((section) => {
    sectionObserver.observe(section);
});

/* Arreglitos */
const revealElements = document.querySelectorAll(`
    .para-cat,
    .blob-message,
    .decor-estrella,
    .decor-exclamacion,
    .decor-corazones,
    .contenedor,
    .decor-carta,
    .naobyte-footer
`);

revealElements.forEach((element) => {
    element.classList.add("scroll-reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        }
    });
}, {
    threshold: 0.25
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

/* Arreglos scroll */
const pageSections = Array.from(document.querySelectorAll(
    "#inicio, #para-ti, #carta, #carrusel"
));

let currentSectionIndex = 0;
let isSectionScrolling = false;

function getCurrentSectionIndex() {
    let closestIndex = 0;
    let smallestDistance = Infinity;

    pageSections.forEach((section, index) => {
        const distance = Math.abs(window.scrollY - section.offsetTop);

        if (distance < smallestDistance) {
            smallestDistance = distance;
            closestIndex = index;
        }
    });

    return closestIndex;
}

function goToSection(index) {
    if (index < 0 || index >= pageSections.length) return;

    isSectionScrolling = true;
    currentSectionIndex = index;

    window.scrollTo({
        top: pageSections[index].offsetTop,
        behavior: "smooth"
    });

    setTimeout(() => {
        isSectionScrolling = false;
    }, 450);
}

window.addEventListener("wheel", (event) => {
    if (event.target.closest(".contenido")) return;

    event.preventDefault();

    if (isSectionScrolling) return;

    if (Math.abs(event.deltaY) < 20) return;

    currentSectionIndex = getCurrentSectionIndex();

    if (event.deltaY > 0) {
        goToSection(currentSectionIndex + 1);
    } else {
        goToSection(currentSectionIndex - 1);
    }
}, { passive: false });