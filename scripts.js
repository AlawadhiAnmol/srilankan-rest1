// Import configuration
import { restaurantConfig } from './config.js';

// DOM Elements
const header = document.querySelector('header');
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    setupMobileMenu();
    setupScrollEffects();
    renderMenu();
    renderOffers();
    renderAboutSection();
    renderContactInfo();
    setupFormValidation();
    setupSmoothScrolling();
    initializeAnimations();
    setupBookingButtons();
    
    // Initialize map when Google Maps API is loaded
    if (window.google && window.google.maps) {
        initMap();
    } else {
        window.initMap = initMap;
    }
}

// Mobile Menu Setup
function setupMobileMenu() {
    mobileMenuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn?.classList.remove('active');
        });
    });
}

// Scroll Effects
function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Header background change
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Dynamic Menu Rendering
function renderMenu() {
    const menuContainer = document.querySelector('.menu-container');
    if (!menuContainer) return;

    const categories = ['starters', 'mains', 'desserts', 'beverages'];
    
    categories.forEach((category, index) => {
        const items = restaurantConfig.menu[category];
        if (!items) return;
        
        const section = document.createElement('div');
        section.className = `menu-category ${index === 0 ? 'active' : ''}`;
        section.setAttribute('data-category', category);
        
        section.innerHTML = `
            <div class="menu-grid">
                ${items.map(item => `
                    <div class="menu-item" data-aos="fade-up">
                        <div class="menu-item-content">
                            <h4>${item.name}</h4>
                            <div class="description">${item.description}</div>
                        </div>
                        <div class="price">€${item.price}</div>
                    </div>
                `).join('')}
            </div>
        `;
        
        menuContainer.appendChild(section);
    });

    // Setup menu tabs
    const menuTabs = document.querySelectorAll('.menu-tab');
    menuTabs.forEach((tab) => {
        tab.innerHTML = `<span>${tab.textContent}</span>`;
        
        tab.addEventListener('click', () => {
            // Update active tab
            menuTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding category
            const category = tab.getAttribute('data-category');
            document.querySelectorAll('.menu-category').forEach(cat => {
                cat.classList.remove('active');
                if (cat.getAttribute('data-category') === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
}

// Render Offers Section
function renderOffers() {
    const offersContainer = document.querySelector('.offers-container');
    if (!offersContainer) return;

    restaurantConfig.offers.forEach((offer, index) => {
        const offerCard = document.createElement('div');
        offerCard.className = 'offer-card';
        offerCard.setAttribute('data-aos', 'fade-up');
        offerCard.setAttribute('data-aos-delay', index * 100);
        
        offerCard.innerHTML = `
            <i class="${offer.icon}"></i>
            <h3>${offer.title}</h3>
            <p>${offer.description}</p>
            <div class="highlight">${offer.details}</div>
            <p><small>${offer.validDays} • ${offer.time}</small></p>
        `;
        
        offersContainer.appendChild(offerCard);
    });
}

// Render About Section
function renderAboutSection() {
    const aboutText = document.querySelector('.about-text');
    if (!aboutText) return;

    aboutText.innerHTML = `
        <h2 data-aos="fade-right">${restaurantConfig.about.title}</h2>
        ${restaurantConfig.about.content.map((paragraph, index) => 
            `<p data-aos="fade-right" data-aos-delay="${index * 100}">${paragraph}</p>`
        ).join('')}
    `;
}

// Render Contact Information
function renderContactInfo() {
    const contactInfo = document.querySelector('.contact-info');
    if (!contactInfo) return;

    const { contact, openingHours } = restaurantConfig;
    
    contactInfo.innerHTML = `
        <div class="contact-item" data-aos="fade-left">
            <i class="fas fa-phone"></i>
            <div>
                <h4>Telefon</h4>
                <p><a href="tel:${contact.phone}">${contact.phone}</a></p>
            </div>
        </div>
        <div class="contact-item" data-aos="fade-left" data-aos-delay="100">
            <i class="fas fa-envelope"></i>
            <div>
                <h4>E-Mail</h4>
                <p><a href="mailto:${contact.email}">${contact.email}</a></p>
            </div>
        </div>
        <div class="contact-item" data-aos="fade-left" data-aos-delay="200">
            <i class="fas fa-map-marker-alt"></i>
            <div>
                <h4>Adresse</h4>
                <p>${contact.address.street}<br>${contact.address.postalCode} ${contact.address.city}</p>
            </div>
        </div>
        <div class="contact-item" data-aos="fade-left" data-aos-delay="300">
            <i class="fas fa-clock"></i>
            <div>
                <h4>Öffnungszeiten</h4>
                <div>
                    ${Object.entries(openingHours).map(([day, hours]) => 
                        `<p>${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}</p>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
}

// Form Validation
function setupFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validate form
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Reset previous errors
        contactForm.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        
        if (!name || name.length < 2) {
            contactForm.querySelector('input[name="name"]').classList.add('error');
            isValid = false;
        }
        
        if (!email || !emailRegex.test(email)) {
            contactForm.querySelector('input[name="email"]').classList.add('error');
            isValid = false;
        }
        
        if (!message || message.length < 10) {
            contactForm.querySelector('textarea[name="message"]').classList.add('error');
            isValid = false;
        }
        
        if (isValid) {
            // Create mailto link
            const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
            const mailtoLink = `mailto:${restaurantConfig.contact.email}?subject=${subject}&body=${body}`;
            
            window.location.href = mailtoLink;
            contactForm.reset();
        }
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Animations
function initializeAnimations() {
    // Initialize AOS (Animate on Scroll)
    if (window.AOS) {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
}

// Setup Booking Buttons
function setupBookingButtons() {
    // Table booking button
    const bookTableBtn = document.querySelector('.book-table');
    if (bookTableBtn) {
        bookTableBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = restaurantConfig.links.booking;
        });
    }
    
    // Delivery button
    const orderDeliveryBtn = document.querySelector('.order-delivery');
    if (orderDeliveryBtn) {
        orderDeliveryBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(restaurantConfig.links.lieferando, '_blank');
        });
    }
}

// Initialize Google Maps
function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    try {
        const { lat, lng, zoom } = restaurantConfig.map;
        
        const map = new google.maps.Map(mapContainer, {
            center: { lat, lng },
            zoom: zoom,
            styles: [
                {
                    featureType: "all",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#FFF8F0" }]
                }
            ]
        });
        
        // Custom marker
        const marker = new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: restaurantConfig.name
        });
        
        // Info window
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px;">
                    <h3>${restaurantConfig.name}</h3>
                    <p>${restaurantConfig.contact.address.street}</p>
                    <p>${restaurantConfig.contact.address.postalCode} ${restaurantConfig.contact.address.city}</p>
                    <p><a href="tel:${restaurantConfig.contact.phone}">${restaurantConfig.contact.phone}</a></p>
                </div>
            `
        });
        
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
        
    } catch (error) {
        console.error('Error initializing Google Maps:', error);
        mapContainer.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: var(--light);">
                <p>Karte konnte nicht geladen werden. <a href="${restaurantConfig.links.googleMaps}" target="_blank">In Google Maps öffnen</a></p>
            </div>
        `;
    }
}

// Export functions for global access
window.initMap = initMap; 