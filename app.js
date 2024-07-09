// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/* script.js */
const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const totalSlides = document.querySelectorAll(".slide").length;
let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 10}%)`; // Adjusted to 10% per slide
}

rightArrow.addEventListener("click", () => {
  if (currentIndex < totalSlides - 5) {
    // Adjust this value based on the number of visible slides
    currentIndex++;
    updateSlider();
  }
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Modals

// Get the modals
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');

// Get the buttons that open the modals
const openModal1 = document.getElementById('openModal1');
const openModal2 = document.getElementById('openModal2');
const openModal3 = document.getElementById('openModal3');
const openModal4 = document.getElementById('openModal4');

// Get the <span> elements that close the modals
const closeModal1 = document.getElementById('closeModal1');
const closeModal2 = document.getElementById('closeModal2');
const closeModal3 = document.getElementById('closeModal3');
const closeModal4 = document.getElementById('closeModal4');

function closeModal() {
  modal1.style.display = "none";
}

// When the user clicks the button, open the modal
openModal1.onclick = function() {
    modal1.style.display = 'block';
    setTimeout(closeModal, 5000);
}

openModal2.onclick = function() {
    modal2.style.display = 'block';
}

openModal3.onclick = function() {
    modal3.style.display = 'block';
}

openModal4.onclick = function() {
    modal4.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeModal1.onclick = function() {
    modal1.style.display = 'none';
}

closeModal2.onclick = function() {
    modal2.style.display = 'none';
}

closeModal3.onclick = function() {
    modal3.style.display = 'none';
}

closeModal4.onclick = function() {
    modal4.style.display = 'none';
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = 'none';
    } else if (event.target == modal2) {
        modal2.style.display = 'none';
    } else if (event.target == modal3) {
        modal3.style.display = 'none';
    } else if (event.target == modal4) {
        modal4.style.display = 'none';
    }
}


const hero = document.getElementById('header');

// Array of background images
const images = ["url(images/3.jpg)", "url(images/1.png)", "url(images/5.jpg)"];

let newIndex = 0;

// Function to change the background image
function changeBackground() {
    hero.style.backgroundImage = images[newIndex];
    newIndex = (newIndex + 1) % images.length;
}

// Change background image every 5 seconds
setInterval(changeBackground, 10000);

// Initial call to set the first image
changeBackground();
