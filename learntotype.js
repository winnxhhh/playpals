var lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var currentLetterIndex = 0;

var shuffledLettersArray
var shuffled = null;
var congrats = false;

var canvasWidth = 750;
var canvasHeight = 500;

var normalBtn;
var shuffledBtn;

var startTime;
var elapsedTime = 0;
var timerInterval;

var correctSound;
var wrongSound;
var congratsSound;

//preloads the font used throughout the game
function preload()
{
    font = loadFont('./learnToTypeAssets/Itim-Regular.ttf')
}

//default setup of the game
function setup()
{
    let canvasContainer = document.getElementById('gameCanvasType');
    let canvas = {w: 750, h: 500};
    let multType = canvasContainer.offsetHeight/canvas.h;
    canvas = createCanvas(canvas.w*multType,canvas.h*multType);
    canvas.parent('gameCanvasType');
    
    textFont(font);
    background(255, 222, 230);
    textAlign(LEFT);
    fill(0);
    textSize(40);
    text('Are you ready to', canvasWidth/5 + 160, canvasHeight/10 + 80);
    textSize(70);
    text('Learn To Type?', canvasWidth/5 + 80, canvasHeight/10 + 170);

    textSize(40)
    text('Choose your game mode:', canvasWidth/5 + 100, canvasHeight/10 + 280);
}

//sets up the game in normal mode
function setupDefault() 
{
    currentLetterIndex = 0;
    congrats = false;
    elapsedTime = 0;
    clearInterval(timerInterval);

    let canvasContainer = document.getElementById('gameCanvasType');
    let canvas = {w: 750, h: 500};
    let multType = canvasContainer.offsetHeight/canvas.h;
    canvas = createCanvas(canvas.w*multType,canvas.h*multType);
    canvas.parent('gameCanvasType');

    textFont(font);
    background(255, 222, 230);
    defaultLetters();
    shuffled = false;
    normalBtn.remove();
    shuffledBtn.remove();
    
    startTimer();
}

//sets up the game in shuffled mode
function setupShuffled() 
{
    currentLetterIndex = 0;
    congrats = false;
    elapsedTime = 0;
    clearInterval(timerInterval);

    let canvasContainer = document.getElementById('gameCanvasType');
    let canvas = {w: 750, h: 500};
    let multType = canvasContainer.offsetHeight/canvas.h;
    canvas = createCanvas(canvas.w*multType,canvas.h*multType);
    canvas.parent('gameCanvasType');

    textFont(font);
    background(255, 222, 230);
    shuffledLetters();
    shuffled = true;
    shuffledBtn.remove();
    normalBtn.remove();

    startTimer();
}

//function to instantiate timer
function startTimer()
{
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000); //updates every second
}

//function to update timer
function updateTimer() 
{
    elapsedTime = Math.floor((Date.now() - startTime) / 1000); //time in seconds
    console.log("Elapsed Time: " + elapsedTime + " seconds");
}

function draw() 
{
    //draws timer and updates it when the game starts
    if((shuffled == false || shuffled == true) && congrats == false)
    {
        fill(255, 222, 230);
        noStroke()
        rect(canvasWidth/5 + 50, 400, 500, 200);
        fill(0);
        textSize(40);
        text('Timer: ' + elapsedTime + ' seconds', canvasWidth/2 + 80, 500);
    }
}

function defaultLetters() 
{
    background(255, 222, 230); //clears the background to avoid overlap
    textAlign(LEFT);
    fill(0);
    textSize(30);
    text('Press the corresponding keys on the keyboard in the order below.', canvasWidth/17, canvasHeight/10 + 20);

    fill(0);
    textSize(25);
    text('Try to complete it as fast as you can!', canvasWidth/17, canvasHeight/10 + 70);

    for (var i = 0; i < lettersArray.length; i++) 
    {
        if (i < currentLetterIndex) 
        {
            fill(200); //greys out letters that have been pressed in order
        } 
        else 
        {
            fill(0); //keep remaining letters in normal color
        }
        
        //draws out the letters in default order
        if (i < 13) 
        {
            textAlign(CENTER);
            textSize(50);
            text(lettersArray[i], 150 + i * 50, 230);
        } 
        else 
        {
            textAlign(CENTER);
            textSize(50);
            text(lettersArray[i], 100 + (i - 12) * 50, 330);
        }
    }
}

function congratsPage()
{
    let canvasContainer = document.getElementById('gameCanvasType');
    let canvas = {w: 750, h: 500};
    let multType = canvasContainer.offsetHeight/canvas.h;
    canvas = createCanvas(canvas.w*multType,canvas.h*multType);
    canvas.parent('gameCanvasType');

    // createCanvas(canvasWidth, canvasHeight)
    background(255, 222, 230);
    congrats = true;

    strokeWeight(3)
    fill(222, 248, 255);
    rect(canvasWidth/8, canvasHeight/8, 715, 470)
    fill(0);
    textSize(35)
    textAlign(CENTER);
    text('Congratulations! You have completed in ', canvasWidth/2 + 80, canvasHeight/4 + 30);
    text(elapsedTime + ' seconds', canvasWidth/2 + 80, canvasHeight/3 + 50);
    text('Play again?', canvasWidth/2 + 80, canvasHeight/2 + 100);

    //buttons to restart the game
    normalBtn = createButton('Normal Mode');
    normalBtn.position(canvasWidth / 2 + 170, canvasHeight / 2 + 440);
    normalBtn.mousePressed(setupDefault);
    normalBtn.class('normal');

    shuffledBtn = createButton('Shuffled Mode');
    shuffledBtn.position(canvasWidth / 2 + 410, canvasHeight / 2 + 440);
    shuffledBtn.mousePressed(setupShuffled);
    shuffledBtn.class('shuffled');
}

function shuffledLetters()
{
    background(255, 222, 230); //clears the background to avoid overlap
    shuffledLettersArray = shuffle(lettersArray); //shuffles the lettersArray to increase the difficulty of the game

    drawShuffledLetters();
}

function drawShuffledLetters()
{
    background(255, 222, 230); //clears the background to avoid overlap
    textAlign(LEFT);
    fill(0);
    textSize(30);
    text('Press the corresponding keys on the keyboard in the order below.', canvasWidth/17, canvasHeight/10 + 20);

    fill(0);
    textSize(25);
    text('Try to complete it as fast as you can!', canvasWidth/17, canvasHeight/10 + 70);

    for (var i = 0; i < shuffledLettersArray.length; i++) 
    {
        if (i < currentLetterIndex) 
        {
            fill(200); //greys out letters that have been pressed in order
        } 
        else 
        {
            fill(0); //keep remaining letters in normal color
        }
        
        //draws out the shuffled letters
        if (i < 13) 
        {
            textAlign(CENTER);
            textSize(50);
            text(shuffledLettersArray[i], 150 + i * 50, 230);
        } 
        else 
        {
            textAlign(CENTER);
            textSize(50);
            text(shuffledLettersArray[i], 100 + (i - 12) * 50, 330);
        }
    }
}

function keyPressed() 
{
    if(shuffled == false)
    {
        //checks if the pressed key is the expected one in sequence
        if (keyCode - 65 === currentLetterIndex) 
        { 
            currentLetterIndex++;
            defaultLetters(); //updates the letters display
            correctSound.play();

            //checks if all the letters have been typed in the correct sequence, the congratsPage is brought up and the timer will be stopped
            if (currentLetterIndex === lettersArray.length) 
            {
                clearInterval(timerInterval); //stops timer
                congratsSound.play();
                congratsPage();
            }
        }
        else
        {
            wrongSound.play();
            alert('You pressed the wrong key!')
        }
    }
    else if(shuffled == true)
    {
        //checks if the pressed key is the expected one in sequence
        if (lettersArray[keyCode - 65] === shuffledLettersArray[currentLetterIndex]) 
        { 
            currentLetterIndex++;
            drawShuffledLetters(); //updates the letters display
            correctSound.play(); 

            //checks if all the letters have been typed in the correct sequence, the congratsPage is brought up and the timer will be stopped
            if (currentLetterIndex === lettersArray.length) 
            {
                clearInterval(timerInterval); //stops timer
                congratsSound.play();
                congratsPage();
            }
        }
        else
        {
            wrongSound.play();
            alert('You pressed the wrong key!')
        }
    }
}

//ensures that once the window is loaded, the buttons in the start page are instantiated and all sounds are loaded
window.onload = function() 
{
    normalBtn = document.getElementById('normal')
    shuffledBtn = document.getElementById('shuffled')

    normalBtn.addEventListener('click', setupDefault);
    shuffledBtn.addEventListener('click', setupShuffled);

    correctSound = document.getElementById('correctKey');
    wrongSound = document.getElementById('wrongKey');
    congratsSound = document.getElementById('congratsBell');
   
    correctSound.volume = 0.5;
    wrongSound.volume = 1.0;
};