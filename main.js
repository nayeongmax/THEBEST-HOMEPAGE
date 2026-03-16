// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== Mobile Menu =====
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = mobileMenu.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = mobileMenu.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, parseInt(delay));
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
});

// ===== Counter Animation =====
function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
            // Repeat every 10 seconds
            entry.target._counterInterval = setInterval(() => {
                entry.target.textContent = '0';
                animateCounter(entry.target);
            }, 10000);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => {
    counterObserver.observe(el);
});

// ===== Hero Graph Rising Animation =====
// Steep upward graph - starts flat then shoots up steeply (급경사 유지)
function animateHeroGraph() {
    const line = document.getElementById('heroGraphLine');
    const fill = document.getElementById('heroGraphFill');
    if (!line || !fill) return;

    // All paths maintain steep upward trajectory - only subtle variation
    const paths = [
        { line: 'M0,99 Q25,99 50,98 T90,96 T130,90 T160,72 T185,30 L200,2', fill: 'M0,99 Q25,99 50,98 T90,96 T130,90 T160,72 T185,30 L200,2 V100 H0Z' },
        { line: 'M0,99 Q25,99 50,98 T90,95 T130,88 T160,68 T185,26 L200,1', fill: 'M0,99 Q25,99 50,98 T90,95 T130,88 T160,68 T185,26 L200,1 V100 H0Z' },
        { line: 'M0,99 Q25,99 50,98 T90,96 T130,91 T160,74 T185,32 L200,3', fill: 'M0,99 Q25,99 50,98 T90,96 T130,91 T160,74 T185,32 L200,3 V100 H0Z' }
    ];

    let step = 0;
    function nextStep() {
        step = (step + 1) % paths.length;
        line.setAttribute('d', paths[step].line);
        fill.setAttribute('d', paths[step].fill);
    }
    setInterval(nextStep, 10000);
}
animateHeroGraph();

// ===== Case Bar After Animation =====
const caseBarTargets = [75, 50, 65];
let caseBarInterval = null;

function animateCaseBars() {
    const bars = document.querySelectorAll('.case-bar-animate');
    // Reset to 0
    bars.forEach(bar => { bar.style.transition = 'none'; bar.style.width = '0%'; });
    // Animate to target
    setTimeout(() => {
        bars.forEach((bar, i) => {
            bar.style.transition = 'width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            setTimeout(() => {
                bar.style.width = (caseBarTargets[i] || 60) + '%';
            }, 200 + i * 300);
        });
    }, 50);
}

const caseBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCaseBars();
            caseBarObserver.unobserve(entry.target);
            // Repeat every 10 seconds
            caseBarInterval = setInterval(animateCaseBars, 10000);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.case-cards').forEach(el => {
    caseBarObserver.observe(el);
});

// ===== Hero Particles =====
function createParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(200, 169, 106, ${Math.random() * 0.15 + 0.05});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 8 + 6}s ease-in-out infinite;
            animation-delay: ${Math.random() * -10}s;
        `;
        container.appendChild(particle);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
            25% { transform: translate(${Math.random() * 40 - 20}px, -30px) scale(1.2); opacity: 0.8; }
            50% { transform: translate(${Math.random() * 60 - 30}px, -60px) scale(0.8); opacity: 0.3; }
            75% { transform: translate(${Math.random() * 40 - 20}px, -30px) scale(1.1); opacity: 0.6; }
        }
    `;
    document.head.appendChild(style);
}

createParticles();

// ===== Reviews Infinite Scroll: Clone cards for seamless loop =====
document.querySelectorAll('.reviews-scroll-inner').forEach(inner => {
    const cards = inner.innerHTML;
    inner.innerHTML = cards + cards;
});

// Pause animation on hover
document.querySelectorAll('.reviews-column').forEach(col => {
    col.addEventListener('mouseenter', () => {
        col.querySelector('.reviews-scroll-inner').style.animationPlayState = 'paused';
    });
    col.addEventListener('mouseleave', () => {
        col.querySelector('.reviews-scroll-inner').style.animationPlayState = 'running';
    });
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const pos = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        }
    });
});
