// TrashAway - Global Script
// Note: Most page-specific logic is inline per page.
// This file handles shared utilities if loaded externally.

function applyLightTheme() {
    if (document.body) {
        document.body.classList.add('light-theme');
    }
}

// Cursor (desktop only — CSS handles hiding on touch devices)
function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    // Only enable on desktop (not mobile)
    if (window.innerWidth <= 768) return;

    document.body.classList.add('custom-cursor-active');

    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hide cursor on mobile orientation change
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            cursor.style.display = 'none';
            document.body.classList.remove('custom-cursor-active');
        } else {
            cursor.style.display = 'block';
            document.body.classList.add('custom-cursor-active');
        }
    });
}

// Spotlight effect on cards
function initSpotlight() {
    document.querySelectorAll('.feature-card, .step-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });
}

// Scroll reveal
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light-theme');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    initCursor();
    initSpotlight();
    initReveal();
});

/* --- NEW LOGO SCROLL LOGIC --- */
window.addEventListener('scroll', () => {
    const pillLogo = document.querySelector('.logo');
    const topLogoContainer = document.querySelector('.top-logo-container');

    if (pillLogo && topLogoContainer) {
        // We trigger the slide-in as soon as you scroll 50px
        if (window.scrollY > 50) {
            pillLogo.classList.remove('pill-logo-hidden');
            pillLogo.classList.add('pill-logo-visible');
            topLogoContainer.style.opacity = '0';
            topLogoContainer.style.transform = 'translateY(-20px)';
            topLogoContainer.style.pointerEvents = 'none';
        } else {
            pillLogo.classList.add('pill-logo-hidden');
            pillLogo.classList.remove('pill-logo-visible');
            topLogoContainer.style.opacity = '1';
            topLogoContainer.style.transform = 'translateY(0)';
            topLogoContainer.style.pointerEvents = 'auto';
        }
    }
});
