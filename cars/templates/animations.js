document.addEventListener('DOMContentLoaded', function() {
    // Scroll Animation
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');

                // If this is the about section, start counter animation
                if (reveals[i].closest('#about')) {
                    startCounterAnimation();
                }

                // If this is the contact section, animate the contact content
                if (reveals[i].closest('#contact')) {
                    document.querySelector('.contact-content').classList.add('animate');
                    document.querySelector('.contact-form').classList.add('animate');
                    document.querySelector('.contact-info').classList.add('animate');
                }

                // If this is the about section, animate the about content
                if (reveals[i].closest('#about')) {
                    document.querySelector('.about-text').classList.add('animate');
                    document.querySelector('.about-image').classList.add('animate');
                }
            }
        }
    }

    // Counter Animation
    function startCounterAnimation() {
        const counters = document.querySelectorAll('.counter-animation');

        counters.forEach(counter => {
            if (counter.classList.contains('counted')) return;

            counter.classList.add('counted');
            const target = parseInt(counter.getAttribute('data-count'));
            let count = 0;
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 30); // Update every 30ms

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.floor(count);
                    setTimeout(updateCount, 30);
                } else {
                    counter.textContent = target;
                }
            };

            updateCount();
        });
    }

    // Sticky Header Effect
    function stickyHeader() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            header.style.background = 'white';
            header.style.backdropFilter = 'none';
        }
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const menu = document.querySelector('.menu');
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            }
        });
    });

    // Floating Action Button Click
    const floatingBtn = document.querySelector('.floating-action-btn');
    floatingBtn.addEventListener('click', function() {
        // Scroll to contact section
        const contactSection = document.querySelector('#contact');
        window.scrollTo({
            top: contactSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });

    // Add active class to current navigation item
    function setActiveNavItem() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Parallax Effect for Hero Section
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.scrollY;

        if (scrollPosition < hero.clientHeight) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    }

    // Initialize animations
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('scroll', stickyHeader);
    window.addEventListener('scroll', setActiveNavItem);
    window.addEventListener('scroll', parallaxEffect);

    // Run once on page load
    revealOnScroll();
    stickyHeader();
    setActiveNavItem();

    // Add active class to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add hover effect to car cards
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });

        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });

    // Add typing animation to hero title
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.classList.add('typing');

    // Add pulse animation to hero button
    const heroButton = document.querySelector('.hero .btn');
    heroButton.classList.add('pulse');

    // Add bounce animation to floating action button
    floatingBtn.classList.add('bounce');
});