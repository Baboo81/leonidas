"use strict";

//Nav animation:
document.addEventListener('scroll', () => {
    const navBar = document.querySelector('nav');
    const scaleLogo = document.querySelector('.logo');

    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
        scaleLogo.classList.add('scrolledScale');
    } else {
        navBar.classList.remove('scrolled');
        scaleLogo.classList.remove('scrolledScale');
    }
})

//Animation txt:
//Création d'un objet qui regroupe l'ensemble des options:
const ratio = .2;
const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio,//Détermine la partie visible à laquelle l'animation se déclenche
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})



//Slider:
const items = document.querySelectorAll('img');
const nbSlide = items.length;
const next = document.querySelector('.right');
const prev = document.querySelector('.left');

let count = 0;

function nextArrow () {
    items[count].classList.remove('active');

    if(count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')

}
next.addEventListener('click', nextArrow)

function prevArrow () {
    items[count].classList.remove('active');

    if(count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')

}
prev.addEventListener('click', prevArrow)

//Gestion des slides par les touches flechées:
function keyPress(e) {
    if(e.keyCode === 37) {
        prevArrow();
    } else if (e.keyCode === 39) {
        nextArrow();
    }
}
document.addEventListener('keydown', keyPress);

//EventsContent:

const img1 = document.getElementById('img1');

img1.addEventListener("mouseover", (e) => {
    return src = "../img/events/cadeauRomantique.jpg";
});