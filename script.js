/**
 * script.js
 * Implements Mobile Navigation, Dark Mode Toggle, and Smooth Scrolling.
 * Built with modern ES6+ syntax and accessibility best practices.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. SCROLL-AWARE HEADER EFFECTS & SMOOTH SCROLLING
    // ==========================================================================
    const header = document.querySelector('.header');
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Terapkan efek bayangan/background pada header saat di-scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling untuk semua link internal
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================================================
    // 2. MOBILE NAVIGATION (HAMBURGER MENU)
    // ==========================================================================
    const hamburgerBtn = document.querySelector('.hamburger');
    const mobileNavMenu = document.querySelector('.nav__menu');
    const navItems = document.querySelectorAll('.nav__link');

    if (hamburgerBtn && mobileNavMenu) {
        // Arrow function untuk toggle menu dan update atribut aksesibilitas
        const toggleMobileMenu = () => {
            mobileNavMenu.classList.toggle('open');
            const isMenuOpen = mobileNavMenu.classList.contains('open');
            hamburgerBtn.setAttribute('aria-expanded', isMenuOpen);
        };

        hamburgerBtn.addEventListener('click', toggleMobileMenu);

        // Tutup menu otomatis saat link navigasi diklik
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileNavMenu.classList.remove('open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ==========================================================================
    // 3. DARK MODE TOGGLE & LOCALSTORAGE
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Arrow function untuk menerapkan tema dan menukar ikon FontAwesome
    const applyTheme = (themeMode) => {
        if (themeMode === 'light') {
            document.body.classList.add('light-theme');
            if (themeIcon) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        } else {
            document.body.classList.remove('light-theme');
            if (themeIcon) {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        }
    };

    // Cek LocalStorage saat pertama kali halaman dimuat
    const savedThemePreference = localStorage.getItem('theme') || 'dark';
    applyTheme(savedThemePreference);

    // Event listener untuk tombol toggle tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isCurrentlyLight = document.body.classList.contains('light-theme');
            const newThemePreference = isCurrentlyLight ? 'dark' : 'light';
            
            applyTheme(newThemePreference);
            localStorage.setItem('theme', newThemePreference);
        });
    }
});