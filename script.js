document.addEventListener('DOMContentLoaded', function() {
    // Show/hide sections when clicking their links
    const contactLink = document.querySelector('a[href="#contact"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const contactSection = document.getElementById('contact');
    const aboutSection = document.getElementById('about');

    function toggleSection(section, otherSection) {
        return function(e) {
            e.preventDefault();
            // Hide the other section
            otherSection.style.display = 'none';
            // Toggle current section
            section.style.display = section.style.display === 'none' ? 'grid' : 'none';
            section.scrollIntoView({ behavior: 'smooth' });
        };
    }

    contactLink.addEventListener('click', toggleSection(contactSection, aboutSection));
    aboutLink.addEventListener('click', toggleSection(aboutSection, contactSection));

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');

            // Reset the form
            contactForm.reset();

            // Hide the contact section after submission
            contactSection.style.display = 'none';
        });
    }
});