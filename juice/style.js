// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get all nav links
    const navLinks = document.querySelectorAll('nav a');

    // Get all sections
    const sections = document.querySelectorAll('section');

    // Hide all sections initially
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show Home section by default
    document.querySelector('#home').style.display = 'block';

    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Get target section ID
            const targetId = this.getAttribute('href');

            // Show the clicked section
            document.querySelector(targetId).style.display = 'block';
        });
    });
});
