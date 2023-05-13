window.addEventListener('DOMContentLoaded', init);

function init() {
    const cards = document.getElementsByClassName('flip-card');
    for (const card of cards) {
        const degree = Math.floor(Math.random() * (45 - (-45)) -45);
        card.style.transform = `rotate(${degree}deg)`;
    }

    /* creates 25 cards */
    for (let i = 0; i < 25; i++) {
        createCard();
    }
}

/*
 * Create a background card with random rotation and position
 */
function createCard() {
    const card = document.createElement('img');
    const randomFace = null;
    card.setAttribute('src', randomFace);
}