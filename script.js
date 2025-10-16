// Dark / Light Toggle
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    toggleBtn.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
