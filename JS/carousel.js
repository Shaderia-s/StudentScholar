let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function updateSlide() {
    const carousel = document.querySelector('.carousel');
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}

// Automatically update the slide width on window resize
window.addEventListener('resize', updateSlide);
