var canvasWidth;
var canvasHeight;

var petalsX;
var petalsY;
var petalsWidth;
var petalsHeight;
var petalsCtr;
var petalsR;
var petalsG;
var petalsB;

var stemX;
var stemY;
var heightArray = [30, 80, 130, 180, 230, 280, 330, 380]

var potX;
var potY;
var potWidth;
var potHeight;

var rulerX;
var rulerY;
var rulerHeight;

var leafX;
var leafY;
var leafYr;
var leafYl;
var leafWidth;
var leafHeight;

var answerArray = ["0cm", "1cm", "2cm", "3cm", "4cm", "5cm", "6cm", "7cm", "8cm"];
var question;
var correctAns = [
    {height: -20, answer: "0cm"},
    {height: 30, answer: "1cm"},
    {height: 80, answer: "2cm"},
    {height: 130, answer: "3cm"},
    {height: 180, answer: "4cm"},
    {height: 230, answer: "5cm"},
    {height: 280, answer: "6cm"},
    {height: 330, answer: "7cm"},
    {height: 380, answer: "8cm"}
]
var congrats = false;
var intro = false;

function preload()
{
    font = loadFont('./flowerPowerAssets/Itim-Regular.ttf')
}

function setup()
{
    let canvasContainer = document.getElementById('gameCanvasFlower');
    let canvas = {w: 900, h: 700};
    let multFlower = canvasContainer.offsetHeight/canvas.h;
    canvas = createCanvas(canvas.w*multFlower,canvas.h*multFlower);
    canvas.parent('gameCanvasFlower');
    canvasWidth = 900;
    canvasHeight = 700;
    background(255, 255, 220); 

    textFont(font);
    stemX = 7;
    stemY = random(heightArray);
    
    petalsR = random(0, 255);
    petalsG = random(0, 255);
    petalsB = random(0, 255);
    petalsPos = 15;

    //retrieve the question count from sessionStorage when the page loads
    if (sessionStorage.getItem('questionCount')) 
    {
        question = parseInt(sessionStorage.getItem('questionCount'));
    } 
    else 
    {
        question = 0;
    }

    //if in gameplay, display the instructions and question number
    if(question < 11 && question > 0)
    {
        fill(0)
        textSize(30);
        text('Read the ruler and select the correct option for', 60, 30)
        text('the height of the flower.', 60, 60)
        textSize(40)
        text('Question ' + question, 60, 105)
    }
    
    //after answering 10 questions, play congrats music
    if(question === 11)
    {
        congratsBgm.play();
    }
}

function draw()
{
    if(question === 0)
    {
        introPage();
    }
    else if(question === 11)
    {
        congratsPage();
    }
    else if(0 < question < 11)
    {
        noStroke();
        drawStem();
        drawPot();
        drawFlower();
        drawRuler();
        drawLeaves();
    }
}

//intro page code
function introPage()
{
    noStroke();
    fill(255, 220, 240)
    rect(canvasWidth/10, canvasHeight/10, 8 * canvasWidth/10, 8 * canvasHeight/10, 100);
    fill(0);
    textAlign(CENTER);

    textSize(80);
    text('Flower Power', canvasWidth/2, 170)

    textSize(35)
    text('In this game, we will be using a ruler', canvasWidth/2, 320)
    text('to measure the height of flowers!', canvasWidth/2, 370)
    
    textSize(50);
    text('Are you ready?', canvasWidth/2, 480)

    var btnX = canvasWidth/2;
    var btnY = 560;
    var btnWidth = 150;
    var btnHeight = 100;
    var btnRadius = btnWidth / 2;
    intro = true;

    var hover = false;

    if(dist(mouseX, mouseY, btnX, btnY) <= btnRadius)
    {
        hover = true;
    }

    if(hover === true)
    {
        fill(22, 201, 73);
        ellipse(btnX, btnY, btnWidth, btnHeight)
        stroke(22, 201, 73);
        strokeWeight(20);
        line(btnX + btnWidth/2, btnY, btnX + 2 * btnWidth / 3, btnY);
        noStroke();
        fill(255);
        text('Yes!', btnX, btnY + 20)    
    }
    else
    {
        fill(44, 107, 62);
        ellipse(btnX, btnY, btnWidth, btnHeight)
        stroke(44, 107, 62);
        strokeWeight(20);
        line(btnX + btnWidth/2, btnY, btnX + 2 * btnWidth / 3, btnY);    
        noStroke();
        fill(255);
        text('Yes!', btnX, btnY + 20)
    }

    //left side flowers
    for(var i = 0 ; i < 5 ; i++)
    {
        push()
        petalsX = canvasWidth/8 + petalsPos - 20;
        petalsY = canvasHeight/14 + petalsPos * 10 * i;
        petalsWidth = 55;
        petalsCtr = 50
        fill(petalsR, petalsG, petalsB);
        ellipse(petalsX + 40, petalsY, petalsWidth + 5);
        ellipse(petalsX, petalsY + 40, petalsWidth + 5);
        ellipse(petalsX, petalsY - 40, petalsWidth + 5);
        ellipse(petalsX - 40, petalsY, petalsWidth + 5);
        pop();

        push();
        fill(petalsB)
        ellipse(petalsX, petalsY, petalsCtr);
        pop();
    }

    //right side flowers
    for(var i = 0 ; i < 5 ; i++)
    {
        push()
        petalsX = 7 * canvasWidth/8 + petalsPos - 10;
        petalsY = canvasHeight/14 + petalsPos * 10 * i;
        petalsWidth = 55;
        petalsCtr = 50
        fill(petalsR, petalsG, petalsB);
        ellipse(petalsX + 40, petalsY, petalsWidth + 5);
        ellipse(petalsX, petalsY + 40, petalsWidth + 5);
        ellipse(petalsX, petalsY - 40, petalsWidth + 5);
        ellipse(petalsX - 40, petalsY, petalsWidth + 5);
        pop();

        push();
        fill(petalsB)
        ellipse(petalsX, petalsY, petalsCtr);
        pop();
    }
}

//code for the congratulations popup after getting 10 questions correct
function congratsPage()
{
    noStroke();
    fill(255, 220, 240)
    rect(canvasWidth/10, canvasHeight/10, 8 * canvasWidth/10, 8 * canvasHeight/10, 100);
    fill(0);
    textAlign(CENTER);
    textSize(80);
    text('Flower Power', canvasWidth/2, 170)
    textSize(50)
    text('You are so awesome', canvasWidth/2, 300)
    text('at reading the ruler!', canvasWidth/2, 370)
    text('Play again?', canvasWidth/2, 480)

    var btnX = canvasWidth/2;
    var btnY = 560;
    var btnWidth = 150;
    var btnHeight = 100;
    var btnRadius = btnWidth / 2;
    congrats = true;

    var hover = false;

    if(dist(mouseX, mouseY, btnX, btnY) <= btnRadius)
    {
        hover = true;
    }

    if(hover === true)
    {
        fill(22, 201, 73);
        ellipse(btnX, btnY, btnWidth, btnHeight)
        stroke(22, 201, 73);
        strokeWeight(20);
        line(btnX + btnWidth/2, btnY, btnX + 2 * btnWidth / 3, btnY);
        noStroke();
        fill(255);
        text('Yes!', btnX, btnY + 20)    
    }
    else
    {
        fill(44, 107, 62);
        ellipse(btnX, btnY, btnWidth, btnHeight)
        stroke(44, 107, 62);
        strokeWeight(20);
        line(btnX + btnWidth/2, btnY, btnX + 2 * btnWidth / 3, btnY);    
        noStroke();
        fill(255);
        text('Yes!', btnX, btnY + 20)
    }

    //left side flowers
    for(var i = 0 ; i < 5 ; i++)
    {
        push()
        petalsX = canvasWidth/8 + petalsPos - 20;
        petalsY = canvasHeight/14 + petalsPos * 10 * i;
        petalsWidth = 55;
        petalsCtr = 50
        fill(petalsR, petalsG, petalsB);
        ellipse(petalsX + 40, petalsY, petalsWidth + 5);
        ellipse(petalsX, petalsY + 40, petalsWidth + 5);
        ellipse(petalsX, petalsY - 40, petalsWidth + 5);
        ellipse(petalsX - 40, petalsY, petalsWidth + 5);
        pop();

        push();
        fill(petalsB)
        ellipse(petalsX, petalsY, petalsCtr);
        pop();
    }

    //right side flowers
    for(var i = 0 ; i < 5 ; i++)
    {
        push()
        petalsX = 7 * canvasWidth/8 + petalsPos - 10;
        petalsY = canvasHeight/14 + petalsPos * 10 * i;
        petalsWidth = 55;
        petalsCtr = 50
        fill(petalsR, petalsG, petalsB);
        ellipse(petalsX + 40, petalsY, petalsWidth + 5);
        ellipse(petalsX, petalsY + 40, petalsWidth + 5);
        ellipse(petalsX, petalsY - 40, petalsWidth + 5);
        ellipse(petalsX - 40, petalsY, petalsWidth + 5);
        pop();

        push();
        fill(petalsB)
        ellipse(petalsX, petalsY, petalsCtr);
        pop();
    }
}

//leaf option buttons drawing code
function drawLeaves()
{
    //left side leaves
    for(var i = 1 ; i < 5 ; i++)
    {
        leafX = 140;
        leafYl = 20;
        leafWidth = 100;
        leafHeight = 70;
        var hover = false;

        var x2 = leafX;  
        var y2 = leafYl + leafX * i;
        var leafRadius = leafWidth / 2;

        if(dist(mouseX, mouseY, x2, y2) <= leafRadius)
        {
            hover = true;
        }
        
        noStroke();

        if(hover === true)
        {   
            fill(22, 201, 73);
            ellipse(leafX, leafYl + 140 * i, leafWidth, leafHeight);
            stroke(22, 201, 73);
            strokeWeight(10);
            line(leafX + leafWidth/2, leafYl + 140 * i, leafX + 2 * leafWidth / 3, leafYl + 140 * i);
        }
        else
        {
            fill(44, 107, 62);
            ellipse(leafX, leafYl + 140 * i, leafWidth, leafHeight);
            stroke(44, 107, 62);
            strokeWeight(10);
            line(leafX + leafWidth/2, leafYl + 140 * i, leafX + 2 * leafWidth / 3, leafYl + 140 * i);   
        }
        
        for(var j = 1 ; j < 9 ; j++)
        {
            if(j % 2 == 1)
            {
                textYl = leafYl + 82; 
                noStroke();
                fill(255);
                text(answerArray[j], leafX - 30, textYl + 70 * j);
                textSize(35);
            }
        }
    }
        
    //right side leaves
    for(var i = 1 ; i < 5 ; i++)
    {
        leafX = 140;
        leafYr = 90; 
        leafWidth = 100;
        leafHeight = 70;
        var hover = false;

        var x1 = leafX + 100 
        var y1 = leafYr + leafX * i;
        var leafRadius = leafWidth / 2;

        if(dist(mouseX, mouseY, x1, y1) <= leafRadius)
        {
            hover = true;
        }

        noStroke();

        if(hover === true)
        {
            fill(22, 201, 73);
            ellipse(leafX + 100, leafYr + 140 * i, leafWidth, leafHeight);
            stroke(22, 201, 73);
            strokeWeight(10);
            line(leafX + 30, leafYr + 140 * i, leafX + 2 * leafWidth / 3, leafYr + 140 * i);    
        }
        else
        {
            fill(44, 107, 62);
            ellipse(leafX + 100, leafYr + 140 * i, leafWidth, leafHeight);
            stroke(44, 107, 62);
            strokeWeight(10);
            line(leafX + 30, leafYr + 140 * i, leafX + 2 * leafWidth / 3, leafYr + 140 * i);    
        }
            
        for(var j = 1 ; j < 9 ; j++)
        {
            if(j % 2 == 0)
            {
                var textYr = leafYr + 10;
                noStroke();
                fill(255);
                text(answerArray[j], leafX + 70, textYr + 70 * j);
                textSize(35);
            }
        }
    }
}

function mousePressed() 
{
    leafBtns();
    congratsBtn();
    introBtn();
}

//leaf option buttons logic code
function leafBtns()
{
    var leafClicked = false;
    var leafDirection = null; //if true, leaf selected is on the right. if false, leaf selected is on te left

    for (var i = 1; i < 5; i++) 
    {
        var x1 = leafX + 100 // leafX + 100
        var y1 = leafYr + leafX * i;
        var leafRadius = leafWidth / 2;

        //check if the click is within the right leaf's area
        if (dist(mouseX, mouseY, x1, y1) <= leafRadius) 
        {
            console.log('you clicked a right leaf!');
            leafClicked = true;
            leafDirection = true;

            if(leafClicked == true && leafDirection == true)
            {
                i = i * 2 //ensures that i is an even number between 1-8
                checkAns(answerArray[i], i);
            } 
        }

        var x2 = leafX;
        var y2 = leafYl + leafX * i;

        //check if the click is within the left leaf's area
        if (dist(mouseX, mouseY, x2, y2) <= leafRadius) 
        {
            console.log('you clicked a left leaf!');
            leafClicked = true;
            leafDirection = false;

            if(leafClicked == true && leafDirection == false)
            {
                i = i * 2 - 1 //ensures that i is an odd number between 1-8
                checkAns(answerArray[i], i);
            }
        }
    }

    if (!leafClicked) 
    {
        console.log('you clicked OUTSIDE the leaves');
    }
}

//play again button drawing and logic code
function congratsBtn()
{
    var btnClicked = false;

    var btnX = canvasWidth/2;
    var btnY = 590;
    var btnWidth = 150;
    var btnRadius = btnWidth / 2;

    if(congrats === true && dist(mouseX, mouseY, btnX, btnY) <= btnRadius)
    {
        btnClicked = true;
        question = 1;
        sessionStorage.setItem('questionCount', question); //saves the updated question count to sessionStorage

        if(btnClicked === true)
        {
            location.reload();
        }
    }
}

//intro button drawing and logic code
function introBtn()
{
    var btnClicked = false;

    var btnX = canvasWidth/2;
    var btnY = 590;
    var btnWidth = 150;
    var btnRadius = btnWidth / 2;

    if(intro === true && dist(mouseX, mouseY, btnX, btnY) <= btnRadius)
    {
        btnClicked = true;
        question++;
        sessionStorage.setItem('questionCount', question); //saves the updated question count to sessionStorage

        if(btnClicked === true)
        {
            location.reload();
        }
    }
}

//function to check if the selected option is correct
function checkAns(selectedAns, option)
{
    var correct = null;

    if(selectedAns === correctAns[option].answer && stemY === correctAns[option].height)
    {
        alert('You are correct!')
        correct = true;
        question++;
        sessionStorage.setItem('questionCount', question); //saves the updated question count to sessionStorage
    }
    else
    {
        alert('You chose the wrong answer, please try again.')
        correct = false;
    }

    if(correct === true)
    {
        location.reload();
    } 
}

//stem drawing code
function drawStem()
{
    //stem
    fill(44, 107, 62);
    rect(potX + potWidth/2 - stemX/2, potY - stemY, stemX, stemY);
}

//flower drawing code
function drawFlower()
{
    //flower
    petalsX = potX + potWidth/2;
    petalsY = potY - stemY;
    petalsWidth = 55;
    petalsCtr = 50
    push()
    fill(petalsR, petalsG, petalsB);
    ellipse(petalsX + 40, petalsY, petalsWidth + 5);
    ellipse(petalsX, petalsY + 40, petalsWidth + 5);
    ellipse(petalsX, petalsY - 40, petalsWidth + 5);
    ellipse(petalsX - 40, petalsY, petalsWidth + 5);
    pop();

    push();
    fill(petalsB)
    ellipse(petalsX, petalsY, petalsCtr);
    pop();
}

//pot drawing code
function drawPot()
{
    //pot
    potX = 500;
    potY = 500;
    potWidth = 100;
    potHeight = 100;
    fill(120, 53, 12);
    rect(potX, potY, potWidth, potHeight, 10);

    fill(153, 59, 2);
    rect(potX - 25, potY, potWidth + 50, potHeight/4, 15);
}

//ruler drawing code
function drawRuler()
{
    //ruler
    rulerX = 700
    rulerY = 0
    rulerHeight = 500

    //ruler body
    fill(173, 120, 28);
    rect(rulerX, rulerY, 130, rulerHeight)

    //ruler line
    stroke(0);
    strokeWeight(5)
    for(var i = 1 ; i < 10 ; i ++)
    {
        line(rulerX + 3, i * rulerHeight / 10, rulerX + 40, i * rulerHeight / 10);
    }

    //ruler text
    push();
    noStroke();
    fill(0);
    textSize(30);
    text('8', rulerX + 50, rulerHeight / 10 + 10)
    text('7', rulerX + 50, 2 * rulerHeight / 10 + 10)
    text('6', rulerX + 50, 3 * rulerHeight / 10 + 10)
    text('5', rulerX + 50, 4 * rulerHeight / 10 + 10)
    text('4', rulerX + 50, 5 * rulerHeight / 10 + 10)
    text('3', rulerX + 50, 6 * rulerHeight / 10 + 10)
    text('2', rulerX + 50, 7 * rulerHeight / 10 + 10)
    text('1', rulerX + 50, 8 * rulerHeight / 10 + 10)
    text('0', rulerX + 50, 9 * rulerHeight / 10 + 10)
    textSize(15)
    text('centimeters (cm)', rulerX + 10, rulerY + 20)
    pop();

    //dotted guide line
    push();
    stroke(0)
    setLineDash([30, 40]);
    line(rulerX - 300, petalsY - 40 - petalsWidth/2 - 3, rulerX + 40, petalsY - 40 - petalsWidth/2 - 3);
    pop();
}

//function that turns the line dashed
function setLineDash(list) 
{
    drawingContext.setLineDash(list);
}

//ensures the audio is loaded as soon as the window is loaded
window.onload = function() 
{
    congratsBgm = document.getElementById('congratsMusic');
}