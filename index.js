const mobileMenuOpen = document.querySelector('.ham-burger-icon');
const mobileMenuClose = document.querySelector('.close-icon')
const mobileLinks = document.querySelector('.mobile-nav');


const showMobileMenu = () => {
    mobileLinks.classList.remove('hidden');
    mobileMenuClose.classList.remove('hidden');
    mobileMenuOpen.classList.add('hidden');
}

const closeMobileMenu = () => {
    mobileLinks.classList.add('hidden');
    mobileMenuClose.classList.add('hidden');
    mobileMenuOpen.classList.remove('hidden');
}

mobileMenuOpen.addEventListener('click',showMobileMenu);
mobileMenuClose.addEventListener('click',closeMobileMenu);