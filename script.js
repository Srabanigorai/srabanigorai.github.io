// script.js

// Smooth Scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle 
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Blog Filtering 
const filterButtons = document.querySelectorAll('.filter-button');
const blogPosts = document.querySelectorAll('.blog-post');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        blogPosts.forEach(post => {
            if (post.classList.contains(filterValue) || filterValue === 'all') {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

// Scroll Animations 
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});