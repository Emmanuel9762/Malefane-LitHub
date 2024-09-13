// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger menu button and the navigation links container
    const menuButton = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.hidden.md\\:flex');

    // Toggle mobile menu
    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-20');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('right-0');
        navLinks.classList.toggle('bg-white');
        navLinks.classList.toggle('shadow-md');
        navLinks.classList.toggle('p-4');
    });

    // Close mobile menu when a link is clicked
    navLinks.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'right-0', 'bg-white', 'shadow-md', 'p-4');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current section in navigation
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-primary');
            }
        });
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Author Spotlight Carousel
    const authorSpotlight = document.querySelector('#author-spotlight .flex.overflow-hidden');
    const prevButton = document.querySelector('#author-spotlight button:first-of-type');
    const nextButton = document.querySelector('#author-spotlight button:last-of-type');
    let currentAuthor = 0;
    const totalAuthors = authorSpotlight.children.length;

    function updateAuthorSpotlight() {
        authorSpotlight.style.transform = `translateX(-${currentAuthor * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        currentAuthor = (currentAuthor - 1 + totalAuthors) % totalAuthors;
        updateAuthorSpotlight();
    });

    nextButton.addEventListener('click', function() {
        currentAuthor = (currentAuthor + 1) % totalAuthors;
        updateAuthorSpotlight();
    });

    // Popular Books - Add hover effect
    const bookItems = document.querySelectorAll('#popular-books .bg-white');
    bookItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
        });
        item.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});