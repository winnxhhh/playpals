let shapes = [];
let placeholders = [];
let draggingShape = null;
let offsetX, offsetY;
let gameOver = false;
let resetButton;

function setup() {
    createCanvas(600, 400);
    resetButton = createButton('Reset');
    resetButton.position(770, 670);
    resetButton.mousePressed(resetGame);
    resetGame();
}

function draw() {
    background(255);

    // Draw placeholders
    placeholders.forEach(placeholder => drawPlaceholder(placeholder));

    // Draw shapes
    shapes.forEach(shape => drawShape(shape));

    // Check if the game is over and display the success message
    if (gameOver) {
        showSuccessMessage();
    }
}

function resetGame() {
    // Reset game over status
    gameOver = false;

    // Shuffle and randomize shapes
    shapes = shuffleArray([
        { x: 250, y: 50, size: 50, type: 'circle', color: getRandomColor() },
        { x: 250, y: 150, size: 50, type: 'square', color: getRandomColor() },
        { x: 250, y: 250, size: 50, type: 'star', color: getRandomColor() },
        { x: 250, y: 350, size: 50, type: 'triangle', color: getRandomColor() }
    ]);

    placeholders = shuffleArray([
        { x: 550, y: 100, size: 50, type: 'circle' },
        { x: 500, y: 200, size: 50, type: 'square' },
        { x: 500, y: 300, size: 50, type: 'star' },
        { x: 400, y: 300, size: 50, type: 'triangle' }
    ]);

    draggingShape = null;
}

function drawShape(shape) {
    fill(shape.color);
    stroke(0);
    strokeWeight(2);
    switch (shape.type) {
        case 'circle':
            ellipse(shape.x, shape.y, shape.size);
            break;
        case 'square':
            rect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size);
            break;
        case 'star':
            drawStar(shape.x, shape.y, shape.size / 2, shape.size);
            break;
        case 'triangle':
            triangle(shape.x - shape.size / 2, shape.y + shape.size / 2, shape.x + shape.size / 2, shape.y + shape.size / 2, shape.x, shape.y - shape.size / 2);
            break;
    }
}

function drawPlaceholder(placeholder) {
    noFill();
    stroke(0, 153, 204);
    strokeWeight(3);
    switch (placeholder.type) {
        case 'circle':
            ellipse(placeholder.x, placeholder.y, placeholder.size);
            break;
        case 'square':
            rect(placeholder.x - placeholder.size / 2, placeholder.y - placeholder.size / 2, placeholder.size, placeholder.size);
            break;
        case 'star':
            drawStar(placeholder.x, placeholder.y, placeholder.size / 2, placeholder.size);
            break;
        case 'triangle':
            triangle(placeholder.x - placeholder.size / 2, placeholder.y + placeholder.size / 2, placeholder.x + placeholder.size / 2, placeholder.y + placeholder.size / 2, placeholder.x, placeholder.y - placeholder.size / 2);
            break;
    }
}

function drawStar(x, y, radius1, radius2) {
    beginShape();
    for (let i = 0; i < TWO_PI; i += PI / 5) {
        let r = i % (PI / 5 * 2) === 0 ? radius1 : radius2;
        let xVertex = x + cos(i) * r;
        let yVertex = y + sin(i) * r;
        vertex(xVertex, yVertex);
    }
    endShape(CLOSE);
}

function mousePressed() {
    if (gameOver) return;

    for (let shape of shapes) {
        if (isMouseOverShape(shape)) {
            draggingShape = shape;
            offsetX = mouseX - shape.x;
            offsetY = mouseY - shape.y;
            return;
        }
    }
}

function mouseDragged() {
    if (draggingShape) {
        draggingShape.x = mouseX - offsetX;
        draggingShape.y = mouseY - offsetY;
    }
}

function mouseReleased() {
    if (draggingShape) {
        let matchedPlaceholder = placeholders.find(placeholder => placeholder.type === draggingShape.type && isMouseOverPlaceholder(placeholder));
        if (matchedPlaceholder) {
            draggingShape.x = matchedPlaceholder.x;
            draggingShape.y = matchedPlaceholder.y;
            alert('Correct match!');
            draggingShape = null;
        } else {
            alert('Incorrect match. Try again.');
        }

        if (shapes.every(shape => placeholders.some(placeholder => placeholder.type === shape.type && placeholder.x === shape.x && placeholder.y === shape.y))) {
            setTimeout(() => {
                alert('Game Over!');
                playClappingSound();
                resetGame();  // Shuffle shapes automatically after the game is over
            }, 500);
        }
    }
}

function isMouseOverShape(shape) {
    return dist(mouseX, mouseY, shape.x, shape.y) < shape.size / 2;
}

function isMouseOverPlaceholder(placeholder) {
    return dist(mouseX, mouseY, placeholder.x, placeholder.y) < placeholder.size / 2;
}

function getRandomColor() {
    return color(random(255), random(255), random(255));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = floor(random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function playClappingSound() {
    let clappingSound = new Audio('clapping.mp3');
    clappingSound.play();
}

function showSuccessMessage() {
    textSize(24);
    fill(0, 153, 0);
    textAlign(CENTER, CENTER);
    text("Success! Game Over!", width / 2, height / 2);
}
