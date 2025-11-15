// script.js

// Display current year in footer
var yearElement = document.getElementById('year');
if (yearElement) {
  var currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
}

// Handle contact form submission
var form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var formMsg = document.getElementById('formMsg');

    if (!name || !email || !message) {
      formMsg.textContent = 'Please fill in all fields.';
      return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMsg.textContent = 'Please enter a valid email address.';
      return;
    }

    formMsg.textContent = 'Thanks ' + name + '! Your message was received (demo only).';
    form.reset();
  });
}

// Lightbox for gallery images
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modalImg');
var closeBtn = document.querySelector('.close-btn');
var galleryImages = document.querySelectorAll('.gallery img');

if (galleryImages && modal && modalImg) {
  galleryImages.forEach(function (img) {
    img.addEventListener('click', function () {
      var full = img.getAttribute('data-full') || img.src;
      modalImg.src = full;
      modal.classList.add('open');
    });
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', function () {
    modal.classList.remove('open');
    modalImg.src = '';
  });
}

if (modal) {
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('open');
      modalImg.src = '';
    }
  });
}

// Smooth scrolling for navigation links
var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    navLinks.forEach(function (a) {
      a.classList.remove('active');
    });

    link.classList.add('active');

    var sectionId = link.getAttribute('href');
    var section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});