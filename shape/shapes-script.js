// script.js

document.addEventListener('DOMContentLoaded', () => {
    const leftShapes = document.querySelectorAll('#section-left .shape');
    const rightShapes = document.querySelectorAll('#section-right .shape');
    const resetButton = document.getElementById('reset-button');
    
    let selectedShape = null;

    // Function to shuffle shapes
    function shuffleShapes(sectionId) {
        const section = document.getElementById(sectionId);
        const shapes = Array.from(section.children);
        const shuffledShapes = shapes.sort(() => 0.5 - Math.random());
        
        shuffledShapes.forEach(shape => section.appendChild(shape));
    }

    // Handle shape click
    function handleShapeClick(event) {
        if (selectedShape) {
            if (selectedShape.dataset.shape === event.target.dataset.shape) {
                alert('Match found!');
                event.target.style.opacity = '0.5';
                selectedShape.style.opacity = '0.5';
                selectedShape = null;
                checkGameOver();
            } else {
                alert('Not a match, try again.');
                selectedShape = null;
            }
        } else {
            selectedShape = event.target;
        }
    }

    // Check if the game is over
    function checkGameOver() {
        const leftSection = document.getElementById('section-left');
        const rightSection = document.getElementById('section-right');
        const unmatchedShapes = leftSection.querySelectorAll('.shape:not([style*="opacity: 0.5"])');
        
        if (unmatchedShapes.length === 0) {
            alert('Game Over!');
            shuffleShapes('section-left');
            shuffleShapes('section-right');
        }
    }

    // Shuffle shapes when the page loads
    shuffleShapes('section-left');
    shuffleShapes('section-right');

    // Reset button click event
    resetButton.addEventListener('click', () => {
        location.reload(); // Refresh the page
    });

    // Attach event listeners to shapes
    leftShapes.forEach(shape => shape.addEventListener('click', handleShapeClick));
    rightShapes.forEach(shape => shape.addEventListener('click', handleShapeClick));
});
