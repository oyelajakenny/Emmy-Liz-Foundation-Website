// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 


/* script.js */
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 10}%)`; // Adjusted to 10% per slide
}

rightArrow.addEventListener('click', () => {
    if (currentIndex < totalSlides - 5) { // Adjust this value based on the number of visible slides
        currentIndex++;
        updateSlider();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

