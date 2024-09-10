let timer;
let time = 60;
let score = 0;
let highScore = 0;
let level = 1; // New variable for level
const levels = {
    1: { time: 60, operations: ['+' , '-','*', '/'], numberRange: 10 },
    2: { time: 60, operations: ['*', '/'], numberRange: 15 },
    3: { time: 60, operations: ['*', '/'], numberRange: 20 },
    // Add more levels as needed
};



document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        playSound('clickSound');
    });
});

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.play().catch(error => console.error('Audio playback error:', error));
    } else {
        console.error('Sound element not found:', soundId);
    }
}

document.getElementById('clickSound').volume = 1.0;  // Maximum volume
document.getElementById('correctSound').volume = 1.0;  
document.getElementById('incorrectSound').volume = 1.0;  

function startGame(selectedLevel) {
    playSound('clickSound');
    if(!levels[selectedLevel]){
        alert('Invalid level selected');
        return;
    }
    level = selectedLevel; // Set the chosen level
    resetGame();
    applyLevelSettings();
    generateProblem();
    generateOptions();
    timer = setInterval(updateTimer, 1000);
    document.getElementById('highScoreCount').innerText = highScore;
}

function applyLevelSettings() {
    const levelSettings = levels[level];
    time = levelSettings.time;
    document.getElementById('time').innerText = time;
    // Adjust other settings based on level, if needed
}


function updateTimer() {
    time--;
    document.getElementById('time').innerText = time;
    if (time <= 0) {
        finishGame();
    }
}


function resetGame() {
    clearInterval(timer);
    playSound('clickSound');
    score = 0;
    document.getElementById('time').innerText = time;
    document.getElementById('currentScore').innerText = score;
    document.getElementById('result').innerText = '';
    document.getElementById('problem').innerText = '';
    document.getElementById('options').innerHTML = '';
    document.getElementById('highScoreCount').innerText = highScore;
}

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        document.getElementById('highScoreCount').
            innerText = highScore;
    }
}



//Extensible level up function
// function checkLevelUp() {
//     if (score >= 5 * level) { //level up every 5 points
//         level++;
//         applyLevelSettings();
//         generateProblem();
//         generateOptions();
//     }
// }

function generateProblem() {
    const levelSettings = levels[level];
    const num1 = Math.floor(Math.random() * levelSettings.numberRange) + 1;
    const num2 = Math.floor(Math.random() * levelSettings.numberRange) + 1;
    const operation = getRandomOperation(levelSettings.operations);

    let problem;

    switch (operation) {
        case '+':
            problem = `${num1} + ${num2}`;
            break;
        case '-':
            problem = `${num1} - ${num2}`;
            break;    
        case '*':
            problem = `${num1} * ${num2}`;
            break;
        case '/':
            // Ensure the division results in a whole number
            const dividend = num1 * num2; // Multiplying to ensure num2 divides into dividend evenly
            problem = `${dividend} / ${num2}`;
            break;
        default:
            problem = '';
    }

    document.getElementById('problem').innerText = problem;
}

function generateOptions() {
    const problemText = document.getElementById('problem').innerText;
    const correctAnswer = eval(problemText);
    const options = [correctAnswer];

    // Determine if the problem involves 
    // division or multiplication
    const reqDivision = problemText.includes('/');
    const reqMultiplication = problemText.includes('*');

    while (options.length < 4) {
        let option;
        if (reqDivision || reqMultiplication) {
            // For division and multiplication, 
            // generate options with 1 decimal places
            option = correctAnswer + (Math.random() * 20 - 10);
            option = parseFloat(option.toFixed(0));
        } else {
            // For other operations, generate options as before
            option = correctAnswer +
                Math.floor(Math.random() * 10) - 0;
        }

        if (!options.includes(option)) {
            options.push(option);
        }
    }

    options.sort(() => Math.random() - 0.5);

    const optionsContainer =
        document.getElementById('options');
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const button =
            document.createElement('button');
        button.classList.add('option');
        button.innerText = option.toFixed(2);
        button.onclick = () =>
            selectOption(option, correctAnswer);
        optionsContainer.appendChild(button);
    });
}

function getRandomOperation(operations) {
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
}

function selectOption(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        playSound('clickSound');
        document.getElementById('result').innerHTML = `<span class="correct">Correct!</span>`;
        score++;
        // Update score
        document.getElementById('currentScore').innerText = score;
        document.getElementById('correctSound').play(); // Play correct answer sound

        // Generate a new problem and options immediately after correct answer
        setTimeout(() => {
            generateProblem();
            generateOptions();
        }, 200); // Add a small delay to give feedback before new question
        

    } else {
        playSound('clickSound');
        document.getElementById('result').innerHTML = `<span class="incorrect">Incorrect. Try again.</span>`;
        document.getElementById('incorrectSound').play(); // Play correct answer sound
        time = time - 1;

    }
}


function finishGame() {
    document.getElementById('result').innerText = 'Time is up! Game over.';
    document.getElementById('options').innerHTML = '';
    document.getElementById('problem').innerText = '';
    clearInterval(timer);
    updateHighScore();
    // Optionally, prompt to restart at the same level or choose a new level
}


