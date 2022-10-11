const scrolltoTop = document.querySelector("#scrolltoTop");

scrolltoTop.addEventListener("click", function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },  
});



var r = document.querySelector(':root');

var red = document.getElementById('red');

red.addEventListener('click', () => {
  r.style.setProperty('--mainColor', '#D0312D')
});

var green = document.getElementById('green');

green.addEventListener('click', () =>{
  r.style.setProperty('--mainColor', "#2CB043")
})
function makeRed_set() {
  r.style.setProperty('--mainColor', '#D0312D');
}
function makeYellow_set() {
  r.style.setProperty('--mainColor', '#F9EO76');
}
function makeBlue_set() {
  r.style.setProperty('--mainColor', '#4261e9');
}
function makeGreen_set() {
  r.style.setProperty('--mainColor', 'green');
}

