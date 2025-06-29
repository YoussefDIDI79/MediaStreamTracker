// Global Variables
let currentTestimonial = 0;
let currentTheme = 'light';
let activeFilter = 'all';

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const themeToggle = document.getElementById('theme-toggle');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // Initialize components
    initializeNavigation();
    initializeTheme();
    initializeScrollEffects();
    initializeTypewriter();
    initializeParticles();
    initializePortfolio();
    initializeServices();
    initializeSkills();
    initializeTeam();
    initializeTestimonials();
    initializeContact();
    initializeIntersectionObserver();
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNavigation);
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavigation() {
    const scrolled = window.scrollY > 100;
    
    // Update navbar background
    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active section
    const sections = ['hero', 'portfolio', 'services', 'skills', 'team', 'testimonials', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop - 200;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                current = sectionId;
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Show/hide back to top button
    if (scrolled) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// Theme
function initializeTheme() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Theme toggle event
    themeToggle.addEventListener('click', toggleTheme);

    // Back to top button
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle icon
    const themeIcon = themeToggle.querySelector('.theme-icon');
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-moon theme-icon';
    } else {
        themeIcon.className = 'fas fa-sun theme-icon';
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Scroll Effects
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        updateActiveNavigation();
        animateOnScroll();
    });
}

function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Typewriter Effect
function initializeTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    const text = 'Digital Experiences';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            typewriterElement.innerHTML = text.slice(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Particles
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 2 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    container.appendChild(particle);
    
    // Add floating animation
    animateParticle(particle);
}

function animateParticle(particle) {
    let posY = parseFloat(particle.style.top);
    let direction = Math.random() > 0.5 ? 1 : -1;
    
    function animate() {
        posY += direction * 0.1;
        
        if (posY > 100 || posY < 0) {
            direction *= -1;
        }
        
        particle.style.top = posY + '%';
        particle.style.opacity = Math.sin(Date.now() * 0.001) * 0.5 + 0.5;
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Portfolio
function initializePortfolio() {
    renderPortfolio();
    initializePortfolioFilters();
}

function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filteredItems = activeFilter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeFilter);
    
    portfolioGrid.innerHTML = filteredItems.map(item => `
        <div class="portfolio-item" data-animate>
            <img src="${item.image}" alt="${item.title}" class="portfolio-image">
            <div class="portfolio-overlay">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
                <div class="portfolio-buttons">
                    <button class="portfolio-btn primary">Live Demo</button>
                    <button class="portfolio-btn secondary">Learn More</button>
                </div>
            </div>
        </div>
    `).join('');
}

function initializePortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update filter and re-render
            activeFilter = btn.dataset.filter;
            renderPortfolio();
        });
    });
}

// Services
function initializeServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card" data-animate>
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Skills
function initializeSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-item" data-animate>
            <div class="skill-circle">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#00DDEB;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <circle class="skill-circle-bg" cx="50" cy="50" r="40"></circle>
                    <circle class="skill-circle-progress" cx="50" cy="50" r="40" 
                            data-percentage="${skill.percentage}"></circle>
                </svg>
                <div class="skill-percentage gradient-text">${skill.percentage}%</div>
            </div>
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-description">${skill.description}</p>
        </div>
    `).join('');
    
    // Animate skill circles when in view
    observeSkillsAnimation();
}

function observeSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressCircle = entry.target.querySelector('.skill-circle-progress');
                const percentage = progressCircle.dataset.percentage;
                const circumference = 2 * Math.PI * 40;
                const offset = circumference - (percentage / 100) * circumference;
                
                setTimeout(() => {
                    progressCircle.style.strokeDashoffset = offset;
                }, 500);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => observer.observe(item));
}

// Team
function initializeTeam() {
    const teamGrid = document.getElementById('team-grid');
    
    teamGrid.innerHTML = teamMembers.map(member => `
        <div class="team-member" data-animate onclick="openTeamModal('${member.id}')">
            <div class="team-image-container">
                <img src="${member.image}" alt="${member.name}" class="team-image">
                <div class="team-overlay">
                    <p class="team-bio">${member.bio}</p>
                </div>
            </div>
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
            <div class="team-social">
                ${Object.entries(member.socialLinks).map(([platform, url]) => 
                    `<a href="${url}" class="team-social-link" onclick="event.stopPropagation()">
                        <i class="${getSocialIcon(platform)}"></i>
                    </a>`
                ).join('')}
            </div>
        </div>
    `).join('');
}

function getSocialIcon(platform) {
    const icons = {
        linkedin: 'fab fa-linkedin-in',
        twitter: 'fab fa-twitter',
        dribbble: 'fab fa-dribbble',
        github: 'fab fa-github',
        behance: 'fab fa-behance',
        instagram: 'fab fa-instagram'
    };
    return icons[platform] || 'fas fa-link';
}

function openTeamModal(memberId) {
    const member = teamMembers.find(m => m.id === memberId);
    const modal = document.getElementById('team-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <img src="${member.image}" alt="${member.name}" 
                 style="width: 6rem; height: 6rem; border-radius: 50%; object-fit: cover; margin-bottom: 1rem;">
            <h3 style="margin-bottom: 0.5rem;">${member.name}</h3>
            <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 1rem;">${member.role}</p>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${member.bio}</p>
            <div style="display: flex; justify-content: center; gap: 0.75rem;">
                ${Object.entries(member.socialLinks).map(([platform, url]) => 
                    `<a href="${url}" target="_blank" rel="noopener noreferrer" 
                        style="width: 2.5rem; height: 2.5rem; border: 1px solid var(--border-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: var(--text-primary); transition: var(--transition);">
                        <i class="${getSocialIcon(platform)}"></i>
                    </a>`
                ).join('')}
            </div>
        </div>
    `;
    
    modal.classList.add('open');
    
    // Close modal events
    document.getElementById('modal-close').addEventListener('click', closeTeamModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeTeamModal();
    });
}

function closeTeamModal() {
    document.getElementById('team-modal').classList.remove('open');
}

// Testimonials
function initializeTestimonials() {
    renderTestimonial();
    setupTestimonialNavigation();
    startTestimonialAutoplay();
}

function renderTestimonial() {
    const testimonialSlide = document.getElementById('testimonial-slide');
    const testimonial = testimonials[currentTestimonial];
    
    testimonialSlide.innerHTML = `
        <div class="testimonial-quote">
            <i class="fas fa-quote-left"></i>
        </div>
        <p class="testimonial-content">${testimonial.content}</p>
        <div class="testimonial-author">
            <div class="testimonial-avatar">${testimonial.avatar}</div>
            <div class="testimonial-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.company}</p>
            </div>
        </div>
    `;
    
    // Update dots
    const dotsContainer = document.getElementById('testimonial-dots');
    dotsContainer.innerHTML = testimonials.map((_, index) => 
        `<button class="testimonial-dot ${index === currentTestimonial ? 'active' : ''}" 
                onclick="goToTestimonial(${index})"></button>`
    ).join('');
}

function setupTestimonialNavigation() {
    document.getElementById('testimonial-prev').addEventListener('click', previousTestimonial);
    document.getElementById('testimonial-next').addEventListener('click', nextTestimonial);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial();
}

function previousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    renderTestimonial();
}

function startTestimonialAutoplay() {
    setInterval(nextTestimonial, 5000);
}

// Contact
function initializeContact() {
    contactForm.addEventListener('submit', handleContactForm);
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
        showToast('Validation Error', 'Please fill in all fields.', 'error');
        return;
    }
    
    // Simulate form submission
    showToast('Message Sent!', 'Thank you for your message. We\'ll get back to you soon.', 'success');
    contactForm.reset();
}

// Toast Notifications
function showToast(title, description, type = 'success') {
    const toastTitle = toast.querySelector('.toast-title');
    const toastDescription = toast.querySelector('.toast-description');
    
    toastTitle.textContent = title;
    toastDescription.textContent = description;
    
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
    
    // Close button
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.classList.remove('show');
    });
}

// Intersection Observer for animations
function initializeIntersectionObserver() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}