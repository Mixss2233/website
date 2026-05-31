// ========== SCROLL REVEAL ANIMATION ==========
const revealElements = document.querySelectorAll('.review-card, .why-item, .package-card, .guide-card, .gallery-masonry, .faq-item, .transport-box, .eco-commitment, .contact-card-premium, .instant-booking-section, .section-title, .section-subtitle');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });
revealElements.forEach((el, index) => {
    el.classList.add('reveal');
    if (index % 3 === 0) el.classList.add('reveal-delay-1');
    else if (index % 3 === 1) el.classList.add('reveal-delay-2');
    else el.classList.add('reveal-delay-3');
    observer.observe(el);
});
// Hero content
document.querySelector('.hero-content')?.classList.add('reveal');
if (document.querySelector('.hero-content')) observer.observe(document.querySelector('.hero-content'));

// ========== NAVBAR SCROLL ==========
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// ========== MOBILE MENU ==========
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('closeMenu');
function openMenu() { mobileNav.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeMenuFunc() { mobileNav.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow = ''; }
if (menuToggle) menuToggle.addEventListener('click', openMenu);
if (closeMenu) closeMenu.addEventListener('click', closeMenuFunc);
if (overlay) overlay.addEventListener('click', closeMenuFunc);
document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', closeMenuFunc));

// ========== FAQ ACCORDION ==========
document.addEventListener('click', (e) => {
    if (e.target.closest('.faq-question')) {
        const btn = e.target.closest('.faq-question');
        const ans = btn.nextElementSibling;
        ans.classList.toggle('show');
        const icon = btn.querySelector('i');
        if (icon) icon.classList.toggle('fa-chevron-up');
    }
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target !== "#" && target !== "") {
            const el = document.querySelector(target);
            if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); closeMenuFunc(); }
        }
    });
});

// ========== DROPDOWN PAKET (LOMPAT KE CARD) ==========
const packageSelect = document.getElementById('packageSelect');
if (packageSelect) {
    packageSelect.addEventListener('change', function() {
        const value = this.value;
        if (!value) return;
        const targetElement = document.getElementById(value);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Highlight sementara
            targetElement.style.transition = 'box-shadow 0.3s';
            targetElement.style.boxShadow = '0 0 0 3px var(--forest-gold)';
            setTimeout(() => {
                targetElement.style.boxShadow = '';
            }, 1500);
            setTimeout(() => { packageSelect.value = ''; }, 2000);
        }
    });
}

// ========== INSTANT BOOKING FORM ==========
const bookingForm = document.getElementById('instantBookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const date = document.getElementById('bookingDate').value;
        const name = document.getElementById('bookingName').value;
        const email = document.getElementById('bookingEmail').value;
        const people = document.getElementById('bookingPeople').value;
        const packageSelected = document.getElementById('bookingPackage').options[bookingPackage.selectedIndex].text;
        const pickup = document.getElementById('bookingPickup').value;
        const notes = document.getElementById('bookingNotes').value;
        if (!date || !name || !email || !people || !pickup) {
            alert('Mohon isi semua field yang wajib (tanggal, nama, email, jumlah orang, penjemputan).');
            return;
        }
        let message = `*INSTANT BOOKING - Sumatra Happy Track*%0A`;
        message += `📅 Tanggal: ${date}%0A`;
        message += `👤 Nama: ${name}%0A`;
        message += `📧 Email: ${email}%0A`;
        message += `👥 Jumlah orang: ${people}%0A`;
        message += `🎒 Paket: ${packageSelected}%0A`;
        message += `📍 Penjemputan: ${pickup}%0A`;
        if (notes) message += `📝 Catatan: ${notes}%0A`;
        message += `%0A_Pesan dikirim dari website Instant Booking._`;
        const waNumber = '6282249581766';
        const waLink = `https://wa.me/${waNumber}?text=${message}`;
        window.open(waLink, '_blank');
        alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk mengirim pesan.');
    });
}

// ========== LIGHTBOX GALLERY ==========
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightbox = document.querySelector('.lightbox-close');
if (galleryItems.length) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-img');
            const title = item.querySelector('.gallery-overlay h4')?.innerText || '';
            const desc = item.querySelector('.gallery-overlay p')?.innerText || '';
            if (lightboxImg) lightboxImg.src = imgSrc;
            if (lightboxCaption) lightboxCaption.innerText = `${title} - ${desc}`;
            if (lightbox) lightbox.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
}
if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
        if (lightbox) lightbox.classList.remove('show');
        document.body.style.overflow = '';
    });
}
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// ========== ASISTEN MONYET ==========
const monkey = document.getElementById('monkeyAssistant');
const bubble = document.getElementById('monkeyBubble');
let bubbleTimeout;

if (monkey) {
    monkey.addEventListener('click', (e) => {
        e.stopPropagation();
        if (bubble) bubble.classList.add('show');
        if (bubbleTimeout) clearTimeout(bubbleTimeout);
        bubbleTimeout = setTimeout(() => {
            if (bubble) bubble.classList.remove('show');
        }, 4000);
    });
}

document.addEventListener('click', (e) => {
    if (monkey && !monkey.contains(e.target) && bubble) {
        bubble.classList.remove('show');
    }
});

// Sapaan otomatis pertama kali
setTimeout(() => {
    if (!localStorage.getItem('monkeyGreeted') && bubble) {
        bubble.classList.add('show');
        bubble.innerHTML = "Halo! Saya Utan, asisten virtual Anda 🦧<br>Klik saya untuk info trekking!";
        setTimeout(() => {
            if (bubble) bubble.classList.remove('show');
            bubble.innerHTML = ""; // reset
        }, 5000);
        localStorage.setItem('monkeyGreeted', 'true');
    }
}, 1500);

// ========== HERO SLIDESHOW CLEAN ==========
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('slidePrev');
const nextBtn = document.getElementById('slideNext');
const dotsContainer = document.getElementById('slideDots');
let currentSlide = 0;
let slideInterval;

// Buat indikator dot
function createDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateDots();
    resetInterval();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 6000);
}

// Event listener
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

// Mulai slideshow
if (slides.length > 0) {
    createDots();
    resetInterval();
}

// ========== TESTIMONIAL SPIN-IN ANIMATION ==========
const testimonialCards = document.querySelectorAll('.testimonial-card');
const spinObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tambahkan class untuk memicu animasi
            entry.target.classList.add('animate-spin');
            // Setelah animasi selesai, observer tidak perlu lagi
            spinObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

testimonialCards.forEach(card => {
    spinObserver.observe(card);
});

// ========== DROPDOWN KHUSUS UNTUK MOBILE (User Interactivity) ==========
const mobileDropdownHeaders = document.querySelectorAll('.mobile-dropdown-header');
mobileDropdownHeaders.forEach(header => {
    header.addEventListener('click', function(e) {
        e.preventDefault();
        const content = this.nextElementSibling;
        if (content && content.classList.contains('mobile-dropdown-content')) {
            content.classList.toggle('show');
            const icon = this.querySelector('i');
            if(icon) icon.style.transform = content.classList.contains('show') ? 'rotate(90deg)' : 'rotate(0deg)';
        }
    });
});