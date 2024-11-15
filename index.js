// Select the mobile menu open (hamburger icon), close (X icon), and mobile links (navigation container)
const mobileMenuOpen = document.querySelector(".ham-burger-icon");
const mobileMenuClose = document.querySelector(".close-icon");
const mobileLinks = document.querySelector(".mobile-nav");

// Get the navigation menu and all the links within it
const navMenu = document.querySelector(".nav-menu");
const links = navMenu.querySelectorAll(".nav-link");

// Loop through each navigation link in  the desktop menu
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the "active" class from all links
    links.forEach((item) => item.classList.remove("active"));

    // Add the 'active class to the clicked link
    link.classList.add("active");

    //Hide the mobile navigation menu after clicking a link
    mobileLinks.classList.add("hidden");
    mobileMenuClose.classList.add("hidden");
  });
});

// Get all links inside the mobile navigation menu
const mlinks = mobileLinks.querySelectorAll(".nav-link");

// Loop through each navigation link in the mobile menu
mlinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the "active" class from all links
    mlinks.forEach((item) => item.classList.remove("active"));

    // Add the 'active' class to the clicked link
    link.classList.add("active");

    // Close the mobile menu after clicking a link
    closeMobileMenu()
  });
});

// Function to ahow the mobile menu
const showMobileMenu = () => {
  // Remove the 'hidden' class to display the mobile navigation menu
  mobileLinks.classList.remove("hidden");

  // Remove the 'hidden' class to display the close icon (X)
  mobileMenuClose.classList.remove("hidden");

  // Add the 'hidden' class to hide the hamburger icon
  mobileMenuOpen.classList.add("hidden");
};

// Function for closing mobile menu
const closeMobileMenu = () => {
  // Add the "hidden" class to hide the mobile navigation menu
  mobileLinks.classList.add("hidden");

  // Add the "hidden" class to hide the close icon (X)
  mobileMenuClose.classList.add("hidden");

  // Remove the "hidden" class to show the hamburger icon
  mobileMenuOpen.classList.remove("hidden");
};

// Selecting card elements for navigation
const firstCard = document.getElementById('card-one');
const secondCard = document.getElementById('card-two');
const thirdCard = document.getElementById('card-three');

// Redirect to a URL when clicking on the first card
firstCard.addEventListener('click', () => {
  window.location.href = "http://www.w3schools.com";
})

// Redirect to a URL when clicking on the second card
secondCard.addEventListener('click', () => {
  window.location.href = "http://www.w3schools.com";
})

// Redirect to a URL when clicking on the third card
thirdCard.addEventListener('click', () => {
  window.location.href = "http://www.w3schools.com";
})

// Scroll animation effect: select all elements with the class "animation"
const the_animation = document.querySelectorAll('.animation');

// Create an IntersectionObserver to add/remove animation classes based on visibility
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the "scroll-animation" class when the element is visible
      entry.target.classList.add('scroll-animation');
    }else{
      // Remove the "scroll-animation" class when the element is not visible
      entry.target.classList.remove('scroll-animation');
    }
  })
},{threshold: 0.5}); // Trigger when 50% of the element is visible

// Observe each element with the animation class
for (let i = 0; i < the_animation.length; i++){
  const elements = the_animation[i];

  observer.observe(elements);
}

// Add event listeners for opening and closing the mobile menu
mobileMenuOpen.addEventListener("click", showMobileMenu);
mobileMenuClose.addEventListener("click", closeMobileMenu);
