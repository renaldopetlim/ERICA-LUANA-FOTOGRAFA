const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0; // Mantém o controle de qual imagem está sendo exibida.

function updateCarousel() {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(${-index * width}px)`; // Move o carrossel horizontalmente.
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
}); // Adicionam a funcionalidade aos botões de navegação.

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
}) // Adicionam a funcionalidade aos botões de navegação.

window.addEventListener('resize', updateCarousel);