import { gsap } from 'gsap';

gsap.from("#Teams", {duration: 1.5, rotation: -10,opacity: 0, x:20, onComplete:addTransition});
gsap.from("#Organisation", {duration: 1.5, rotation: -12,opacity: 0, y:50, onComplete:addTransition});
gsap.from("#Individuum", {duration: 2, rotation: 16,opacity: 0, x:-50, onComplete:addTransition});
gsap.from("#Rand", {duration: 3, opacity: 0,scale: 0.95, x:5});

function addTransition(){
    this.targets()[0].classList.add("anim-completed");
}