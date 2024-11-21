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
    closeMobileMenu();
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

// Add event listeners for opening the mobile menu
mobileMenuOpen.addEventListener("click", showMobileMenu);

// Add event listeners for closing the mobile menu
mobileMenuClose.addEventListener("click", closeMobileMenu);

// Selecting card elements for navigation
const firstCard = document.getElementById("card-one");
const secondCard = document.getElementById("card-two");
const thirdCard = document.getElementById("card-three");
const forthCard = document.getElementById("card-four");

// Redirect to a URL when clicking on the first card
firstCard.addEventListener("click", () => {
  window.location.href = "https://fabulous-kangaroo-951360.netlify.app";
});

// Redirect to a URL when clicking on the second card
secondCard.addEventListener("click", () => {
  window.location.href = "https://fantastic-cranachan-03ec39.netlify.app";
});

// Redirect to a URL when clicking on the third card
thirdCard.addEventListener("click", () => {
  window.location.href = "https://starlit-horse-2a9c98.netlify.app";
});

// Redirect to a URL when clicking on the first card
forthCard.addEventListener("click", () => {
  window.location.href = "https://imaginative-donut-911ecd.netlify.app";
});

// Scroll animation effect: select all elements with the class "animation"
const the_animation = document.querySelectorAll(".animation");

// Create an IntersectionObserver to add/remove animation classes based on visibility
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the "scroll-animation" class when the element is visible
        entry.target.classList.add("scroll-animation");
      } else {
        // Remove the "scroll-animation" class when the element is not visible
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  { threshold: 0.4 }
); // Trigger when 50% of the element is visible

// Observe each element with the animation class
for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

// Function for sending email using email js'
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "UIEFYxSUvqD6lSTPa",
  });
})();

const notification = document.querySelector(".notification");
const notificationBtn = document.querySelector("#notificationBtn");

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_j4v7fi5", "template_hc9fmar", this).then(
        () => {
          console.log("SUCCESS!");
          notification.classList.remove("hidden");
          document.getElementById('user_name').value = '';
          document.getElementById('user_email').value = '';
          document.getElementById('message').value = '';
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};

// Variables for the projects section DOM elements
const cardContainer = document.querySelector(".projects-group");
const cards = document.querySelectorAll(".card");
const showMoreButton = document.querySelector(".showMoreBtn");
const showLessButton = document.querySelector(".showLessBtn");

cardContainer.innerHTML = "";

[0, 1, 2].forEach((index) => {
  if (cards[index]) {
    cardContainer.appendChild(cards[index]).cloneNode(true);
  }
});

// Function to show more cards
const showMoreCards = () => {
  console.log("Show more button clicked.");

  [0, 1, 2, 3].forEach((index) => {
    if (cards[index]) {
      cardContainer.appendChild(cards[index]).cloneNode(true);
    }
  });

  showMoreButton.classList.add("hidden");
  // showLessButton.classList.remove("hidden");
};

//Function to show less cards
const showLessCards = () => {
  cardContainer.innerHTML = ""; // clear the card container

  [0, 1, 2].forEach((index) => {
    if (cards[index]) {
      cardContainer.appendChild(cards[index]).cloneNode(true);
    }
  });

  // Show the show more button
  showMoreButton.classList.remove("hidden");

  // Hide the show less button
  showLessButton.classList.add("hidden");
};

// Add event listener to "Show more" button
showMoreButton.addEventListener("click", showMoreCards);

// Add event listener to "Show less" button
showLessButton.addEventListener("click", showLessCards);

// Button to close notification
notificationBtn.addEventListener("click", ()=>{
  notification.classList.add('hidden');
})
