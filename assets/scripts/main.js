"use strict";

//Nav:
const ratio = .1;
const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio,
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            console.log('visible')
        } else {
            console.log('invisible')
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('nav'))


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