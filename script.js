const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));

/*============= Expand Panels script =============*/

const panels = document.querySelectorAll ('.expand-panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    } )
}

/* ==================== Carousel ================== */



// window.onload = function() {
//     let slides = document.getElementsByClassName('carousel-item'),
//         addActive = function(slide) {slide.classList.add('active')},
//         removeActive = function(slide) {slide.classList.remove('active')};
//         addActive(slide[0]); 


// setInterval(function () {
//     for (let i = 0; i < slides.length; i++) {
//         if (i + 1 === slides.length) {
//             addActive(slides[0]);
//             slides[0].style.zIndex = 100;
//             setTimeout(removeActive, 350, slides[i]);
//         }
//         if (slides[i].classList.contains('active')) {
//             slides[i].removeAttribute('style');
//             setTimeout(removeActive, 350, slides[i]);
//             addActive(slides[i + 1]);
//             break;
//         }
//     }
// }, 4000);
// }