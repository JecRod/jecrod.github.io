// small interactions
document.getElementById('year').textContent = new Date().getFullYear();

// Download resume button: point to the uploaded PDF if you place it in same folder as "resume.pdf"
const dl = document.getElementById('downloadResume');
dl.addEventListener('click', (e) => {
  e.preventDefault();
  // Replace the file name below with your uploaded PDF filename saved in the same folder
  const filename = 'uploaded_resume.pdf'; // <-- rename this file to your actual PDF file name
  const a = document.createElement('a');
  a.href = filename;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
});

// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active');
  mainNav.classList.toggle('mobile-active');
  
  // Prevent body scroll when menu is open
  if (mainNav.classList.contains('mobile-active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      mobileMenuToggle.classList.remove('active');
      mainNav.classList.remove('mobile-active');
      document.body.style.overflow = '';
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && 
      mainNav.classList.contains('mobile-active') &&
      !mainNav.contains(e.target) &&
      !mobileMenuToggle.contains(e.target)) {
    mobileMenuToggle.classList.remove('active');
    mainNav.classList.remove('mobile-active');
    document.body.style.overflow = '';
  }
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(6,10,20,0.95)';
    header.style.backdropFilter = 'blur(15px)';
  } else {
    header.style.background = 'linear-gradient(90deg, rgba(6,10,20,0.8), rgba(8,12,25,0.6))';
    header.style.backdropFilter = 'blur(10px)';
  }
});

// Add intersection observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    // Reset mobile menu state on larger screens
    mobileMenuToggle.classList.remove('active');
    mainNav.classList.remove('mobile-active');
    document.body.style.overflow = '';
  }
});