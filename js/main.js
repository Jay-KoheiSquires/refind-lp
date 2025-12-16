/* ===================================
   REFIND - Main JavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initPageLoader();
    initMobileMenu();
    initHeroSlider();
    initProductSliders();
    initReviewsSlider();
});

/* ===================================
   Page Loader
   =================================== */
function initPageLoader() {
    const loader = document.getElementById('pageLoader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 1500);
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

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }
}

/* ===================================
   Hero Slider
   =================================== */
function initHeroSlider() {
    const heroSlider = document.getElementById('heroSlider');

    if (heroSlider) {
        new Splide('#heroSlider', {
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: true,
            pagination: true,
            speed: 1000,
        }).mount();
    }
}

/* ===================================
   Product Sliders
   =================================== */
function initProductSliders() {
    // Best Sellers Slider
    const bestSellerSlider = document.getElementById('bestSellerSlider');
    if (bestSellerSlider) {
        new Splide('#bestSellerSlider', {
            type: 'slide',
            perPage: 4,
            perMove: 1,
            gap: '1.5rem',
            pagination: false,
            arrows: true,
            breakpoints: {
                1200: {
                    perPage: 3,
                },
                900: {
                    perPage: 2,
                },
                600: {
                    perPage: 1.5,
                    padding: { right: '2rem' },
                },
            },
        }).mount();
    }

    // New Arrivals Slider
    const newArrivalsSlider = document.getElementById('newArrivalsSlider');
    if (newArrivalsSlider) {
        new Splide('#newArrivalsSlider', {
            type: 'slide',
            perPage: 4,
            perMove: 1,
            gap: '1.5rem',
            pagination: false,
            arrows: true,
            breakpoints: {
                1200: {
                    perPage: 3,
                },
                900: {
                    perPage: 2,
                },
                600: {
                    perPage: 1.5,
                    padding: { right: '2rem' },
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
            gap: '1.5rem',
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
   Scroll Animations (Optional)
   =================================== */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

/* ===================================
   Quick Add to Cart (Demo)
   =================================== */
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('quick-add')) {
        e.preventDefault();

        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let count = parseInt(cartCount.textContent) || 0;
            count++;
            cartCount.textContent = count;

            // Animation feedback
            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }

        // Button feedback
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

        const input = this.querySelector('.newsletter-input');
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

    if (currentScroll > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }

    lastScroll = currentScroll;
});
