// In a separate script.js or within a <script> tag at the end of the body
const menuOpen = document.querySelector('.menu-open');
const navUl = document.querySelector('nav ul');

menuOpen.addEventListener('click', () => {
    navUl.classList.toggle('active');
});