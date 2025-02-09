// Scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formResponse = document.getElementById('formResponse');
    formResponse.textContent = 'Thank you for your message! A nerd will get back to you shortly.';
    formResponse.style.color = '#007BFF'; // Blue

    // Reset the form
    this.reset();
});
