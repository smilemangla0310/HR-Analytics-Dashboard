/* ============================================
   Presence Insights — Project Website Scripts
   ============================================ */

(function () {
    'use strict';

    // -------------------------------------------
    // 1. Power BI Embed Fallback Detection
    // -------------------------------------------
    // If the iframe src still contains the placeholder,
    // hide the iframe and show the fallback message.
    const iframe = document.getElementById('powerbi-embed');
    const fallback = document.getElementById('embed-fallback');

    if (iframe && fallback) {
        const src = iframe.getAttribute('src') || '';
        if (
            src === 'PASTE_POWER_BI_EMBED_LINK_HERE' ||
            src.trim() === '' ||
            src === '#'
        ) {
            iframe.style.display = 'none';
            fallback.classList.add('visible');
        }
    }

    // -------------------------------------------
    // 2. Scroll Reveal Animation
    // -------------------------------------------
    // Add the 'reveal' class to major section elements
    const revealTargets = document.querySelectorAll(
        '.kpi-card, .feature-card, .insight-card, .workflow-step, .section-title, .section-desc'
    );

    revealTargets.forEach(function (el) {
        el.classList.add('reveal');
    });

    function handleScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const revealPoint = 50;

        reveals.forEach(function (el) {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }

    // Run on load and scroll
    window.addEventListener('scroll', handleScrollReveal, { passive: true });
    window.addEventListener('load', handleScrollReveal);

    // -------------------------------------------
    // 3. Smooth Scroll for Anchor Links
    // -------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // -------------------------------------------
    // 4. KPI Counter Animation
    // -------------------------------------------
    function animateCounters() {
        const kpiValues = document.querySelectorAll('.kpi-value');
        kpiValues.forEach(function (el) {
            if (el.dataset.animated) return;

            const rect = el.getBoundingClientRect();
            if (rect.top > window.innerHeight) return;

            el.dataset.animated = 'true';
            const text = el.textContent.trim();
            const hasPercent = text.includes('%');
            const hasComma = text.includes(',');
            const numericValue = parseFloat(text.replace(/[,%]/g, ''));

            if (isNaN(numericValue)) return;

            const duration = 1200;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const currentValue = numericValue * eased;

                if (hasComma) {
                    el.textContent = Math.round(currentValue).toLocaleString();
                } else if (hasPercent) {
                    el.textContent = currentValue.toFixed(2) + '%';
                } else {
                    el.textContent = currentValue.toFixed(2);
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    // Ensure final value is exact
                    el.textContent = text;
                }
            }

            requestAnimationFrame(updateCounter);
        });
    }

    window.addEventListener('scroll', animateCounters, { passive: true });
    window.addEventListener('load', animateCounters);

})();
