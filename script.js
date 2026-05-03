// script.js

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Scroll-triggered Animations
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// 3D Card Mouse Tracking
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const x = (e.clientX - card.offsetLeft) / width;
        const y = (e.clientY - card.offsetTop) / height;
        const xRotate = 15 * (y - 0.5);
        const yRotate = -15 * (x - 0.5);

        card.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});

// Animated Counters
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;
        if (c < target) {
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// Parallax Effects
window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax').forEach(el => {
        const speed = el.getAttribute('data-speed');
        const yPos = -(window.scrollY / speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
});

// Form Handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g. AJAX)
    alert('Form submitted!');
});

// Interactive Features
// You can add interactive features here based on user requirements.
