const shapesContainer = document.getElementById('shapes-container');
const resetButton = document.getElementById('reset-button');
const successSound = document.getElementById('success-sound');
const failSound = document.getElementById('fail-sound');

const shapes = [
    { shape: 'circle', color: 'red' },
    { shape: 'square', color: 'blue' },
    { shape: 'rectangle', color: 'green' },
    { shape: 'oval', color: 'orange' },
    { shape: 'triangle', color: 'purple' }
];

let selectedShapes = [];
let currentMatchingShapes = [];

function shuffleShapes() {
    const selectedShape = shapes[Math.floor(Math.random() * shapes.length)];
    const shapeArray = [...shapes.filter(s => s.shape !== selectedShape.shape), selectedShape, selectedShape];
    return shapeArray.sort(() => Math.random() - 0.5);
}

function createShapeElement(shapeObj) {
    const shapeElement = document.createElement('div');
    shapeElement.classList.add('shape', shapeObj.shape);
    shapeElement.style.backgroundColor = shapeObj.color;

    if (shapeObj.shape === 'triangle') {
        shapeElement.style.borderBottomColor = shapeObj.color;
    }

    shapeElement.addEventListener('click', () => handleShapeClick(shapeElement, shapeObj));
    return shapeElement;
}

function handleShapeClick(shapeElement, shapeObj) {
    if (selectedShapes.length < 2) {
        selectedShapes.push(shapeObj);
        shapeElement.classList.add('clicked');

        if (selectedShapes.length === 2) {
            if (selectedShapes[0].shape === selectedShapes[1].shape) {
                successSound.play();
                alert('Congrats! You matched the shapes.');
                resetGame();
            } else {
                failSound.play();
                alert('Try again!');
                selectedShapes = [];
                document.querySelectorAll('.shape').forEach(el => el.classList.remove('clicked'));
            }
        }
    }
}

function resetGame() {
    selectedShapes = [];
    shapesContainer.innerHTML = '';
    const shuffledShapes = shuffleShapes();
    shuffledShapes.forEach(shapeObj => {
        const shapeElement = createShapeElement(shapeObj);
        shapesContainer.appendChild(shapeElement);
    });
}

resetButton.addEventListener('click', resetGame);

// Initial game setup
resetGame();
