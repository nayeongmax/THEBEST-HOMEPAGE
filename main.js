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

// ===== Hero Bar+Line Chart (Canvas) =====
function initHeroChart() {
    const canvas = document.getElementById('heroBarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
    }
    resize();
    window.addEventListener('resize', resize);

    // Bar data - ascending pattern
    const barCount = 14;
    let barHeights = [];
    let targetHeights = [];
    let lineProgress = 0;

    function generateTargets() {
        const arr = [];
        for (let i = 0; i < barCount; i++) {
            let base;
            if (i < barCount - 4) {
                // First 10 bars: start at 40% (1/3 of visible area) and gently rise to ~50%
                base = 40 + (i / (barCount - 4)) * 10;
            } else {
                // Last 4 bars: dramatic steep climb 55% → 70% → 82% → 97%
                const idx = i - (barCount - 4);
                base = 55 + idx * 15;
            }
            arr.push(base + Math.random() * 4 - 2);
        }
        return arr;
    }

    targetHeights = generateTargets();
    barHeights = targetHeights.map(() => 0);

    function draw() {
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const gap = w / (barCount + 1);
        const barW = gap * 0.5;
        const maxH = h * 0.85;

        // Draw bars with gradient
        for (let i = 0; i < barCount; i++) {
            const x = gap * (i + 0.75);
            const bh = (barHeights[i] / 100) * maxH;
            const y = h - bh;

            const grad = ctx.createLinearGradient(x, y, x, h);
            grad.addColorStop(0, 'rgba(100, 160, 255, 0.7)');
            grad.addColorStop(1, 'rgba(60, 120, 220, 0.2)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.roundRect(x - barW / 2, y, barW, bh, [4, 4, 0, 0]);
            ctx.fill();
        }

        // Draw line over bars (glowing)
        if (lineProgress > 0) {
            const pts = [];
            for (let i = 0; i < barCount; i++) {
                const x = gap * (i + 0.75);
                const bh = (barHeights[i] / 100) * maxH;
                pts.push({ x, y: h - bh - 4 });
            }

            // Glow
            ctx.shadowColor = 'rgba(100, 200, 255, 0.6)';
            ctx.shadowBlur = 12;
            ctx.strokeStyle = 'rgba(180, 220, 255, 0.9)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            const visiblePts = Math.floor(pts.length * lineProgress);
            for (let i = 0; i <= visiblePts && i < pts.length; i++) {
                if (i === 0) ctx.moveTo(pts[i].x, pts[i].y);
                else ctx.lineTo(pts[i].x, pts[i].y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Dots
            for (let i = 0; i <= visiblePts && i < pts.length; i++) {
                ctx.beginPath();
                ctx.arc(pts[i].x, pts[i].y, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.fill();
            }

            // Arrow at end
            if (visiblePts >= pts.length - 1) {
                const last = pts[pts.length - 1];
                ctx.beginPath();
                ctx.moveTo(last.x + 6, last.y - 10);
                ctx.lineTo(last.x + 16, last.y - 20);
                ctx.lineTo(last.x + 10, last.y - 20);
                ctx.moveTo(last.x + 16, last.y - 20);
                ctx.lineTo(last.x + 16, last.y - 14);
                ctx.strokeStyle = 'rgba(180, 220, 255, 0.8)';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
    }

    // Animate bars growing
    let animStart = null;
    function animateBars(timestamp) {
        if (!animStart) animStart = timestamp;
        const elapsed = timestamp - animStart;
        const duration = 2000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        for (let i = 0; i < barCount; i++) {
            barHeights[i] = targetHeights[i] * eased;
        }
        lineProgress = Math.max(0, (progress - 0.3) / 0.7);

        draw();
        if (progress < 1) requestAnimationFrame(animateBars);
    }
    requestAnimationFrame(animateBars);

    // Repeat every 10 seconds with new subtle targets
    setInterval(() => {
        targetHeights = generateTargets();
        animStart = null;
        lineProgress = 0;
        requestAnimationFrame(animateBars);
    }, 10000);
}
initHeroChart();

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
