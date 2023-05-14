window.addEventListener('DOMContentLoaded', init);

function init() {
    const cards = document.getElementsByClassName('flip-card');
    for (const card of cards) {
        const degree = Math.floor(Math.random() * (45 - (-45)) -45);
        card.style.transform = `rotate(${degree}deg)`;
    }

    /* creates 25 cards */
    for (let i = 0; i < 52; i++) {
        createCard();
    }

    for (let i = 0; i < 20; i++) {
        createFlower(i);
    }
}

/*
 * TODO Create a background card with random rotation and position
 */
function createCard() {
    const main = document.querySelector('main');
    const card = document.createElement('img');
    
    const face = Math.floor(Math.random() * (52 - 1) + 1);
    const randomFace = `assets/images/cards/${face}.png`;
    card.setAttribute('src', randomFace);

    const positionX = Math.floor(Math.random() * 100);
    const positionY = Math.floor(Math.random() * 85);
    const rotation = Math.floor(Math.random() * 180);
    card.style.position = 'absolute';
    card.style.transform = `rotate(${rotation}deg)`;
    card.style.width = '1.875in';
    card.style.height = '2.625in';
    card.style.top = `${positionY}%`;
    card.style.left = `${positionX}%`;

    main.appendChild(card);
}

/*
 * TODO Create a flower that blooms scroll
 */
function createFlower(i) {
    const main = document.querySelector('main');
    const flower = document.createElement('img');
    flower.setAttribute('src', `assets/images/flower.png`);
    flower.classList.add('flower');
    flower.id = `flower${i}`;

    const positionX = Math.floor(Math.random() * 100);
    const positionY = Math.floor(Math.random() * 85);
    const rotation = Math.floor(Math.random() * 180);
    flower.style.position = 'absolute';
    flower.style.transform = `rotate(${rotation}deg)`;
    flower.style.transform = `scale(25%)`;
    flower.style.top = `${positionY}%`;
    flower.style.left = `${positionX}%`;

    main.appendChild(flower);
}