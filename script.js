// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }
    
    // Product Color Selection
    const colorSwatches = document.querySelectorAll('.color-swatches .color');
    if (colorSwatches.length > 0) {
        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', function() {
                colorSwatches.forEach(s => s.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Product Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                tabContents[index].classList.add('active');
            });
        });
    }
    
    // Image Gallery Thumbnail Click
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.querySelector('.main-image img');
    
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImage.src = this.src.replace('100x100', '600x600');
            });
        });
    }
    
    // Shopping Cart Functionality
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.querySelector('.fa-shopping-cart');
    let cartCount = 0;
    
    if (addToCartBtns.length > 0) {
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                cartCount++;
                updateCartCount();
                
                // Animation
                this.textContent = 'Added!';
                this.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    this.textContent = 'Add to Cart';
                    this.style.backgroundColor = '#e83e8c';
                }, 1500);
            });
        });
    }
    
    function updateCartCount() {
        if (cartIcon) {
            // Remove existing badge if any
            const existingBadge = cartIcon.parentElement.querySelector('.cart-badge');
            if (existingBadge) {
                existingBadge.remove();
            }
            
            if (cartCount > 0) {
                const badge = document.createElement('span');
                badge.className = 'cart-badge';
                badge.textContent = cartCount;
                cartIcon.parentElement.appendChild(badge);
            }
        }
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert('Thank you for subscribing! A 10% discount code has been sent to your email.');
                emailInput.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    }
    
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Product Quantity Input
    const quantityInputs = document.querySelectorAll('.quantity input');
    if (quantityInputs.length > 0) {
        quantityInputs.forEach(input => {
            input.addEventListener('change', function() {
                if (this.value < 1) {
                    this.value = 1;
                }
            });
        });
    }
    
    // Initialize mobile menu state
    if (window.innerWidth <= 768 && navMenu) {
        navMenu.style.display = 'none';
    }
});