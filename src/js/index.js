import bro from './bro';
import '../css/main.scss';
console.log(bro('hello bro'));
// if (module && module.hot) module.hot.accept()

/** ================ 
** - Tags Switch -
** ================ */
window.onload = function () {
    var tagSlides = document.querySelector('.tag-slides');
    var Btns = document.querySelectorAll('.tag-btns button');
    var nDiv = tagSlides.getElementsByTagName("div");
    for (var i = 0; i < Btns.length; i++) {
        Btns[i].index = i;
        Btns[i].onclick = function () {
            for (i = 0; i < Btns.length; i++) {
                nDiv[i].style.display = "none";
            }
            nDiv[this.index].style.display = "block";
        };
    }
};
/*End of Tag Switch */


/** ================ 
** - Menu Bar -
** ================ */

const menuSpan = document.querySelector('.nav-click span');
const centerBar = document.querySelector('.nav-click span i');
const dropdown = document.querySelector('.menu');

menuSpan.addEventListener('click', () => {
    menuSpan.classList.toggle("active");
    centerBar.classList.toggle("active");
    dropdown.classList.toggle('menu-active');
});
/*End of Bars clicked to turn into close icon */




/** ====================
** - Get Tooltip Position-
** ==================== */
document.addEventListener('mousemove', (e) => {
    let tooltips = document.querySelectorAll('.tooltip');
    let posX = e.clientX;
    let posY = e.clientY;
    tooltips.forEach(tooltip => {
        tooltip.style.left = posX;
        tooltip.style.top = posY;
    });

}
);
/*End of Bars clicked to turn into close icon */




/** ================
** - Slides Scroll -
** ================ */
function moveToSlide(track, targetSlide, currentSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let cardSlides = document.querySelectorAll('.card-slide');
let thumbnails = document.querySelector('.thumbnail-track');
let track = document.querySelector('.slides-track');
let currentSlide = 0;
let slideWidth = cardSlides[0].offsetWidth;
track.style.width = cardSlides.length * slideWidth;
cardSlides.forEach((slide, index) => slide.style.left = index * slideWidth + 'px');

thumbnails.addEventListener('click', (e) => {
    targetThumbnail = e.target;
    console.log(thumbnails.firstElementChild(targetThumbnail))
})


rightArrow.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, nextSlide, currentSlide);
}
);

leftArrow.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, prevSlide, currentSlide);
});

/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */
/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */
/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */
/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */
/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */
/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */
/*End of Bars clicked to turn into close icon */
