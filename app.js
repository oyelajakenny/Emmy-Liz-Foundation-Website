document.addEventListener("DOMContentLoaded", () => {
  // Hide the preloader after a timeout (e.g., 2 seconds)
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.style.opacity = "0"; // Fade out
    setTimeout(() => {
      preloader.style.display = "none"; // Hide completely
    }, 500); // Wait for the transition to complete (adjust timing as needed)
  }, 2000); // Adjust the timeout duration (in milliseconds) as desired
});

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

// Modals

// Get the modals
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");

// Get the buttons that open the modals
const openModal1 = document.getElementById("openModal1");
const openModal2 = document.getElementById("openModal2");
const openModal3 = document.getElementById("openModal3");
const openModal4 = document.getElementById("openModal4");

// Get the <span> elements that close the modals
const closeModal1 = document.getElementById("closeModal1");
const closeModal2 = document.getElementById("closeModal2");
const closeModal3 = document.getElementById("closeModal3");
const closeModal4 = document.getElementById("closeModal4");

function closeModal() {
  modal1.style.display = "none";
}

// When the user clicks the button, open the modal
openModal1.onclick = function () {
  modal1.style.display = "block";
  setTimeout(closeModal, 5000);
};

openModal2.onclick = function () {
  modal2.style.display = "block";
};

openModal3.onclick = function () {
  modal3.style.display = "block";
};

openModal4.onclick = function () {
  modal4.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal1.onclick = function () {
  modal1.style.display = "none";
};

closeModal2.onclick = function () {
  modal2.style.display = "none";
};

closeModal3.onclick = function () {
  modal3.style.display = "none";
};

closeModal4.onclick = function () {
  modal4.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal4) {
    modal4.style.display = "none";
  }
};

const hero = document.getElementById("header");

// Array of background images
const images = [
  "url(images/hero.png)",
  "url(images/3.jpg)",
  "url(images/1.png)",
  "url(images/5.jpg)",
];

let newIndex = 0;

// Function to change the background image
function changeBackground() {
  hero.style.backgroundImage = images[newIndex];
  newIndex = (newIndex + 1) % images.length;
}

// Change background image every 10 seconds
setInterval(changeBackground, 10000);

// Initial call to set the first image
changeBackground();
