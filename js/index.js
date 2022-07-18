const hamburgerBtn = document.getElementById('hamburgerBtn');
const navbar = document.getElementById('navbar')
hamburgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('open');
})