const mobileMenuOpen = document.querySelector(".ham-burger-icon");
const mobileMenuClose = document.querySelector(".close-icon");
const mobileLinks = document.querySelector(".mobile-nav");

// Get all buttons with class="btn" inside the container
const navMenu = document.querySelector(".nav-menu");
const links = navMenu.querySelectorAll(".nav-link");

// Loop through the buttons and add the active class to the current/clicked button
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the "active" class from all links
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    mobileLinks.classList.add("hidden");
    mobileMenuClose.classList.add("hidden");
    console.log('?')
  });
});

// Get all buttons with class="btn" inside the container
const mlinks = mobileLinks.querySelectorAll(".nav-link");

// Loop through the buttons and add the active class to the current/clicked button
mlinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the "active" class from all links
    mlinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    closeMobileMenu()
  });
});

// Function for opening mobile menu
const showMobileMenu = () => {
  mobileLinks.classList.remove("hidden");
  mobileMenuClose.classList.remove("hidden");
  mobileMenuOpen.classList.add("hidden");
};

// Function for closing mobile menu
const closeMobileMenu = () => {
  mobileLinks.classList.add("hidden");
  mobileMenuClose.classList.add("hidden");
  mobileMenuOpen.classList.remove("hidden");
};

// Card navigation
const firstCard = document.getElementById('card-one');
const secondCard = document.getElementById('card-two');
const thirdCard = document.getElementById('card-three');

firstCard.addEventListener('click', () => {
  window.location.href = "http://www.w3schools.com";
})

secondCard.addEventListener('click', () => {
  window.location.href = "http://www.w3schools.com";
})

thirdCard.addEventListener('click', () => {
  window.location.href = "http://www.w3schools.com";
})

mobileMenuOpen.addEventListener("click", showMobileMenu);
mobileMenuClose.addEventListener("click", closeMobileMenu);
