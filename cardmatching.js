
// script.js
const cards = Array.from(document.querySelectorAll('.card'));
const scoreElement = document.getElementById('score');
const clappingSound = document.getElementById('clapping-sound');
let firstCard = null;
let secondCard = null;
let lock = false;
let moves = 0;

// Shuffle the cards
function shuffleCards() {
    const cardNames = cards.map(card => card.dataset.name);
    cardNames.sort(() => Math.random() - 0.5);

    cards.forEach((card, index) => {
        card.dataset.name = cardNames[index];
        card.classList.remove('flipped', 'match');
        card.style.background = "#ccc";
    });

    moves = 0;
    updateScore();
}

// Flip a card
function flipCard(event) {
    if (lock) return;

    const clickedCard = event.target;
    if (clickedCard === firstCard || clickedCard.classList.contains('match')) return;

    clickedCard.classList.add('flipped');
    clickedCard.style.background = "white"; // Reveal the card

    if (!firstCard) {
        firstCard = clickedCard;
        return;
    }

    secondCard = clickedCard;
    moves++;
    updateScore();
    checkForMatch();
}

// Check if the flipped cards match
function checkForMatch() {
    lock = true;

    const isMatch = firstCard.dataset.name === secondCard.dataset.name;

    if (isMatch) {
        firstCard.classList.add('match');
        secondCard.classList.add('match');
        checkForWin();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.style.background = "#ccc";
            secondCard.style.background = "#ccc";
            resetCards();
        }, 1000);
    }
}

// Check if all cards are matched
function checkForWin() {
    const allMatched = cards.every(card => card.classList.contains('match'));
    if (allMatched) {
        setTimeout(() => {
            clappingSound.play();
            alert('Congratulations! You won the game!');
        }, 500);
    } else {
        resetCards();
    }
}

// Reset the state of the cards
function resetCards() {
    [firstCard, secondCard] = [null, null];
    lock = false;
}

// Update the score display
function updateScore() {
    scoreElement.textContent = moves;
}

// Set up event listeners
function setupGame() {
    cards.forEach(card => card.addEventListener('click', flipCard));
    shuffleCards();
}

// Restart the game
document.getElementById('restart').addEventListener('click', setupGame);

// Initialize the game
setupGame();
