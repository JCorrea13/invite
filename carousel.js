const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slidesContainer = document.getElementById('slidescontainer');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3500);