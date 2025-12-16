/* ===================================
   REFIND - Main JavaScript v3
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    initPageLoader();
    initMobileMenu();
    initHeroSlider();
    initProductSliders();
    initCelebritiesSlider();
    initReviewsSlider();
    initFaqAccordion();
});

/* ===================================
   Page Loader
   =================================== */
function initPageLoader() {
    const loader = document.getElementById('pageLoader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 1000);
    });
}

/* ===================================
   Mobile Menu
   =================================== */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }
}

/* ===================================
   Hero Slider (コンパクト版)
   =================================== */
function initHeroSlider() {
    const heroSlider = document.getElementById('heroSlider');

    if (heroSlider) {
        new Splide('#heroSlider', {
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 4000,
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: true,
            pagination: true,
            speed: 800,
        }).mount();
    }
}

/* ===================================
   Product Sliders
   =================================== */
function initProductSliders() {
    const bestSellerSlider = document.getElementById('bestSellerSlider');
    if (bestSellerSlider) {
        new Splide('#bestSellerSlider', {
            type: 'slide',
            perPage: 4,
            perMove: 1,
            gap: '1rem',
            pagination: false,
            arrows: true,
            drag: 'free',
            snap: true,
            breakpoints: {
                1200: {
                    perPage: 3,
                },
                900: {
                    perPage: 2,
                },
                600: {
                    perPage: 1.5,
                    padding: { right: '1.5rem' },
                },
            },
        }).mount();
    }

    const newArrivalsSlider = document.getElementById('newArrivalsSlider');
    if (newArrivalsSlider) {
        new Splide('#newArrivalsSlider', {
            type: 'slide',
            perPage: 4,
            perMove: 1,
            gap: '1rem',
            pagination: false,
            arrows: true,
            drag: 'free',
            snap: true,
            breakpoints: {
                1200: {
                    perPage: 3,
                },
                900: {
                    perPage: 2,
                },
                600: {
                    perPage: 1.5,
                    padding: { right: '1.5rem' },
                },
            },
        }).mount();
    }
}

/* ===================================
   Celebrities Slider (WORN BY CELEBRITIES風)
   =================================== */
function initCelebritiesSlider() {
    const celebritiesSlider = document.getElementById('celebritiesSlider');

    if (celebritiesSlider) {
        new Splide('#celebritiesSlider', {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            pagination: false,
            arrows: true,
            drag: 'free',
            breakpoints: {
                1200: {
                    perPage: 3,
                },
                900: {
                    perPage: 2,
                },
                600: {
                    perPage: 1.5,
                    padding: { right: '1.5rem' },
                },
            },
        }).mount();
    }
}

/* ===================================
   Reviews Slider
   =================================== */
function initReviewsSlider() {
    const reviewsSlider = document.getElementById('reviewsSlider');

    if (reviewsSlider) {
        new Splide('#reviewsSlider', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            pagination: true,
            arrows: true,
            breakpoints: {
                1024: {
                    perPage: 2,
                },
                640: {
                    perPage: 1,
                },
            },
        }).mount();
    }
}

/* ===================================
   FAQ Accordion
   =================================== */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/* ===================================
   Quick Add to Cart (Demo)
   =================================== */
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('quick-add')) {
        e.preventDefault();

        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let count = parseInt(cartCount.textContent) || 0;
            count++;
            cartCount.textContent = count;

            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }

        const originalText = e.target.textContent;
        e.target.textContent = 'ADDED!';
        e.target.style.background = '#4caf50';

        setTimeout(() => {
            e.target.textContent = originalText;
            e.target.style.background = '';
        }, 1500);
    }
});

/* ===================================
   Newsletter Form (Demo)
   =================================== */
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const input = this.querySelector('input');
        const button = this.querySelector('.btn');

        if (input.value) {
            button.textContent = 'SUBSCRIBED!';
            button.style.background = '#4caf50';
            input.value = '';

            setTimeout(() => {
                button.textContent = 'SUBSCRIBE';
                button.style.background = '';
            }, 3000);
        }
    });
}

/* ===================================
   Header Scroll Effect
   =================================== */
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }

    lastScroll = currentScroll;
});
