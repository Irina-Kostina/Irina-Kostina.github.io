// Add smooth scrolling and interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to tech items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05) rotateZ(5deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
        });
    });

    // Add floating animation to background shapes
    const shapes = document.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
        setInterval(() => {
            const x = Math.sin(Date.now() * 0.001 + index) * 20;
            const y = Math.cos(Date.now() * 0.0015 + index) * 15;
            shape.style.transform = `translate(${x}px, ${y}px)`;
        }, 50);
    });

    // CTA button interaction
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        this.style.transform = 'translateY(-2px) scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px) scale(1)';
        }, 100);
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform += ` translateY(${scrolled * speed}px)`;
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToObserve = document.querySelectorAll('.tech-item, .social-link, .fact-item, .project-card');
    elementsToObserve.forEach((element, index) => {
        // Add staggered animation delay for project cards
        if (element.classList.contains('project-card')) {
            element.style.animationDelay = `${index * 0.2}s`;
        }
        observer.observe(element);
    });

    // Add hover animation to fact items
    const factItems = document.querySelectorAll('.fact-item');
    factItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.1)';
            this.style.zIndex = '100';
        });
        
        item.addEventListener('mouseleave', function() {
            const currentTransform = this.style.transform.replace(' scale(1.1)', '');
            this.style.transform = currentTransform;
            this.style.zIndex = '10';
        });
    });

    // Animate facts wheel on scroll
    const factsWheel = document.querySelector('.facts-wheel');
    if (factsWheel) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.1;
            factsWheel.style.transform = `rotate(${rate}deg)`;
        });
    }

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const projectImage = this.querySelector('.project-image');
            if (projectImage) {
                projectImage.style.transform = 'translateY(-5px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const projectImage = this.querySelector('.project-image');
            if (projectImage) {
                projectImage.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Add click animation to project links
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'translateY(-2px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
        });
    });

        // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            
            // Show loading state
            btnText.textContent = 'Sending...';
            btnIcon.textContent = '⏳';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Simulate form submission (replace with actual form submission logic)
            setTimeout(() => {
                btnText.textContent = 'Message Sent!';
                btnIcon.textContent = '✅';
                submitBtn.style.background = 'linear-gradient(45deg, #10b981, #059669)';
                
                // Reset form
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    btnText.textContent = 'Send Message';
                    btnIcon.textContent = '🚀';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = 'linear-gradient(45deg, #14b8a6, #0891b2)';
                }, 3000);
            }, 2000);
        });
    }

    // Add focus animations to form inputs
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });

    // Add smooth scroll behavior for footer links
    const footerLinks = document.querySelectorAll('footer a[href^="#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add typing animation to contact method cards
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach((method, index) => {
        method.style.opacity = '0';
        method.style.transform = 'translateX(-30px)';
        method.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            method.style.opacity = '1';
            method.style.transform = 'translateX(0)';
        }, 100 + (index * 200));
    });

});