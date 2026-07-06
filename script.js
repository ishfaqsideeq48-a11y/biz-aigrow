// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu on window resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Toast notification
function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Newsletter form
const nlForm = document.getElementById('nlForm');
if (nlForm) {
    nlForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('nlEmail').value.trim();
        if (!email || !email.includes('@')) {
            showToast('Please enter a valid email address.');
            return;
        }
        showToast('✓ You\'re subscribed! First workflow lands Tuesday.');
        document.getElementById('nlEmail').value = '';
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});