// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileMenuBtn.classList.toggle('fa-times');
});

// Sticky header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scrolling za linkove
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Zatvori mobile menu ako je otvoren
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileMenuBtn.classList.remove('fa-times');
      }
    }
  });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ovde bi se dodala logika za slanje forme
    // Na primer, koristeći Fetch API ili neki drugi način
    
    alert('Poruka je uspešno poslata! Kontaktiraćemo vas uskoro.');
    this.reset();
  });
}