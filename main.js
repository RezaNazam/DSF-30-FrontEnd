const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 5000);

// transparent navbar
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    // Jika scroll lebih dari 50px
    navbar.classList.add('transparent');
  } else {
    navbar.classList.remove('transparent');
  }
});

// navbar scroll

let lastScrollTop = 0;
let scrollTimeout;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Jika scroll ke bawah, sembunyikan navbar
  if (scrollTop > lastScrollTop) {
    navbar.classList.add('hidden');
  }
  // Jika scroll ke atas, tampilkan navbar dengan halus
  else if (scrollTop < lastScrollTop) {
    navbar.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Untuk IE

  // Hapus kelas hidden setelah scroll berhenti selama 2 detik
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function () {
    // Pastikan navbar hanya muncul kembali jika posisi scroll tidak berubah
    if (scrollTop === window.pageYOffset || scrollTop === document.documentElement.scrollTop) {
      navbar.classList.remove('hidden');
    }
  }, 2000);
});

// Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  if (sidebar.style.width === '250px') {
    sidebar.style.width = '0';
    overlay.style.display = 'none'; // Sembunyikan overlay saat sidebar ditutup
  } else {
    sidebar.style.width = '250px';
    overlay.style.display = 'block'; // Tampilkan overlay saat sidebar dibuka
  }
}
