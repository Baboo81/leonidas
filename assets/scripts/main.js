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

const bl1 = document.querySelector('.bloc1');
const bl2 = document.querySelector('.bloc2');
const bl3 = document.querySelector('.bloc3');
const bl4 = document.querySelector('.bloc4');


    bl1.addEventListener("mouseover", () => {
        let image1 = new Image();
        image1.src = "/assets/img/events/cadeauRomantique.jpg";
        document.querySelector('.eventsContent').appendChild(image1);
        
    });
    bl1.addEventListener("mouseout", () => {
        let image1 = new Image();
        image1.src = "/assets/img/events/cadeauRomantique.jpg";
        document.querySelector('.eventsContent').remove(image1);
        
    });

    bl2.addEventListener("mouseover", () => {
        let image2 = new Image();
        image2.src = "/assets/img/events/cadeauNaissance.jpg";
        document.querySelector('.eventsContent').appendChild(image2);
    });
    bl2.addEventListener("mouseout", () => {
        let image2 = new Image();
        image2.src = "/assets/img/events/cadeauNaissance.jpg";
        document.querySelector('.eventsContent').remove(image2);
    });

    bl3.addEventListener("mouseover", () => {
        let image3 = new Image();
        image3.src = "/assets/img/events/anniversaire.jpg";
        document.querySelector('.eventsContent').appendChild(image3);
    });
    bl3.addEventListener("mouseout", () => {
        let image3 = new Image();
        image3.src = "/assets/img/events/anniversaire.jpg";
        document.querySelector('.eventsContent').remove(image3);
    });

    bl4.addEventListener("mouseover", () => {
        let image4 = new Image();
        image4.src = "/assets/img/events/invitation.jpg";
        document.querySelector('eventsContent').appendChild(image4);
    });
    bl4.addEventListener("mouseout", () => {
        let image4 = new Image();
        image4.src = "/assets/img/events/invitation.jpg";
        document.querySelector('eventsContent').remove(image4);
    })

   
    
    
    


