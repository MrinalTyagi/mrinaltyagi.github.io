document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // AOS — Animate on Scroll
    // ==========================================
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80
    });

    // ==========================================
    // Typed.js — Hero subtitle
    // ==========================================
    new Typed('#typed-output', {
        strings: [
            'Associate Machine Learning Scientist',
            'MS (Research) in AI, IIT Delhi',
            'Published at MICCAI, ISBI &amp; Elsevier Q1',
            'LLMs · RAG · Computer Vision · NLP'
        ],
        typeSpeed: 40,
        backSpeed: 25,
        backDelay: 2000,
        loop: true,
        smartBackspace: true
    });

    // ==========================================
    // Particles.js — Hero background
    // ==========================================
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 70,
                    density: { enable: true, value_area: 900 }
                },
                color: { value: '#00b4d8' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.4,
                    random: true,
                    anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.5, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 140,
                    color: '#00b4d8',
                    opacity: 0.15,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 160, line_linked: { opacity: 0.35 } },
                    push: { particles_nb: 3 }
                }
            },
            retina_detect: true
        });
    }

    // ==========================================
    // Navbar scroll effect
    // ==========================================
    var navbar = document.getElementById('navbar');
    var heroSection = document.getElementById('hero');

    function handleNavScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // ==========================================
    // Mobile hamburger menu
    // ==========================================
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // ==========================================
    // Active nav link highlighting on scroll
    // ==========================================
    var sections = document.querySelectorAll('section[id]');
    var navAnchors = document.querySelectorAll('.nav-links a');

    function highlightNav() {
        var scrollY = window.scrollY + 120;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav-links a[href="#' + id + '"]');
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.style.color = '#00b4d8';
                } else {
                    link.style.color = '';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    // ==========================================
    // Reduce particle count on mobile
    // ==========================================
    if (window.innerWidth < 768 && typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
        pJSDom[0].pJS.particles.number.value = 30;
        pJSDom[0].pJS.fn.particlesRefresh();
    }

});
