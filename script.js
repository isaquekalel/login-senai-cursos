let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards; // Atualiza o índice
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 300; // A largura do card
    cards.forEach(card => {
        card.style.transform = `translateX(${offset}px)`; // Aplica o deslocamento
    });
}
