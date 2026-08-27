document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 2. HERO PARTICLES GENERATOR
    // ==========================================
    const particlesContainer = document.getElementById('heroParticles');
    const particleCount = 24;

    if (particlesContainer) {
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 3 + 2;
            const leftPos = Math.random() * 100;
            const duration = Math.random() * 12 + 8;
            const delay = Math.random() * 8;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${leftPos}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    // ==========================================
    // 3. GSAP & SCROLLTRIGGER ANIMATIONS
    // ==========================================
    gsap.registerPlugin(ScrollTrigger);

    // Hero Entry Animation
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    heroTl.from('.hero-content .eyebrow', { opacity: 0, y: 20, delay: 0.2 })
          .from('.hero-title', { opacity: 0, y: 30 }, '-=0.8')
          .from('.hero-desc', { opacity: 0, y: 20 }, '-=0.8')
          .from('.hero-cta-group', { opacity: 0, y: 20 }, '-=0.8')
          .from('.service-visual-card, .mobile-phone-device-container, .lead-pipeline-funnel-card, .creator-interactive-card', { opacity: 0, scale: 0.95, y: 30 }, '-=0.8');

    // Section Titles Reveal
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Capability Boxes Stagger
    gsap.from('.capability-box', {
        scrollTrigger: {
            trigger: '.capability-box',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Timeline Steps Stagger
    gsap.from('.timeline-step', {
        scrollTrigger: {
            trigger: '.timeline-wrapper',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Lead Generation Funnel Slices
    if (document.querySelector('.funnel-stack-interactive')) {
        gsap.from('.f-slice', {
            scrollTrigger: {
                trigger: '.funnel-stack-interactive',
                start: 'top 75%',
            },
            scaleX: 0.85,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }

    // Mobile App Funnel Steps
    if (document.querySelector('.funnel-live-tracker')) {
        gsap.from('.f-step', {
            scrollTrigger: {
                trigger: '.mobile-chassis',
                start: 'top 75%',
            },
            x: -20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out'
        });
    }

    // AI Orbit Floating Effect
    gsap.to('.matrix-orbit', {
        y: 'random(-5, 5)',
        x: 'random(-5, 5)',
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'sine.inOut',
        stagger: 0.2
    });

    // ==========================================
    // 4. ANIMATED PERFORMANCE NUMBERS (COUNTER)
    // ==========================================
    const statCards = document.querySelectorAll('.stat-val');
    statCards.forEach(stat => {
        const targetVal = parseFloat(stat.getAttribute('data-target'));
        const isDecimal = stat.getAttribute('data-decimal') === '1';

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                gsap.to(stat, {
                    innerText: targetVal,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerText: isDecimal ? 0.1 : 1 },
                    onUpdate: function () {
                        if (isDecimal) {
                            stat.innerText = parseFloat(stat.innerText).toFixed(1);
                        } else {
                            stat.innerText = Math.floor(stat.innerText);
                        }
                    }
                });
            }
        });
    });

    // ==========================================
    // 5. SMOOTH ANCHOR LINK SCROLLING
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const navOffset = 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});