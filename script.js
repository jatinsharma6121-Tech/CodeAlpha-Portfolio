const text = [
    "Frontend Developer",
    "BCA Student",
    "Web Designer"
];

let index = 0;
let char = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    let current = text[index];

    if (!isDeleting) {
        typing.textContent = current.substring(0, char++);
    } else {
        typing.textContent = current.substring(0, char--);
    }

    if (!isDeleting && char === current.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && char === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();



const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML =
        '<i class="fas fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
        '<i class="fas fa-moon"></i>';

    }

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});



document.querySelector("form").addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    this.reset();

});

const typingText = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "Web Designer",
    "BCA Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();



const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});



const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});




const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .education-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.6s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();




const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow =
            "0 5px 15px rgba(0,0,0,0.08)";

    }

});