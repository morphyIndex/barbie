const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerLine1 = document.querySelector(".line1");
const hamburgerLine2 = document.querySelector(".line2");
const mobileHamburger = document.querySelector(".mobile-menu")

hamburgerMenu.addEventListener("click", () => {
    hamburgerLine2.classList.toggle("minus-rotate45deg");
    hamburgerLine1.classList.toggle("rotate45deg");
    mobileHamburger.classList.toggle("active");
})

// Sticky effect

const hText = document.querySelectorAll(".second-page-header");
const para = document.querySelectorAll("p");

window.addEventListener("scroll", () => {
    const width = window.innerWidth;
    let textPosition = 0;
    if (width <= 480) {
        textPosition = window.scrollY / 10;
    } else if (width <= 1024) {
        textPosition = window.scrollY / 8;
    } else {
        textPosition = window.scrollY / 8;
    }

    hText.forEach(heading => {
        heading.style.transform = `translateY(${textPosition}px)`;
    })

});


// Mouse Effect

const mouse = document.querySelector(".circle");
document.addEventListener("mousemove", (e) => {
    mouse.style.left = `${e.clientX}px`;
    mouse.style.top = `${e.clientY}px`;
});
console.log(mouse);

const heroText = document.querySelector(".hero-text");
const mouseText = document.querySelector(".circle-text");

document.querySelectorAll("a, button, h1, p, .second-page-img").forEach(element => {
    element.addEventListener("mouseenter", () => {
        mouse.classList.add("active");
        mouseText.style.opacity = "0";
    });

    element.addEventListener("mouseleave", () => {
        mouse.classList.remove("active");
        mouseText.style.opacity = "1";
    });
})

