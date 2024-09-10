let variables;

//panda image
//<a href="https://www.freepik.com/free-vector/cute-panda-hanging-pencil-cartoon-vector-icon-illustration-animal-education-icon-isolated-flat_39515610.htm#query=cartoon&position=24&from_view=keyword&track=ais_hybrid&uuid=3a8a304e-9f0d-44a6-bf8d-91a78a6a73b2">Image by catalyststuff</a> on Freepik

//pencil image
//<a href="https://www.freepik.com/free-psd/cartoon-pencil-illustration_158209664.htm#fromView=search&page=1&position=20&uuid=2a6dfecd-dd36-44f7-9814-b827df0cf8db">Image by freepik</a>

function setup() {
  let canvasContainer = document.getElementById('gameCanvasp3');
  let canvas = {w: 960, h: 540};
  let mult = canvasContainer.offsetHeight/canvas.h;
  canvas = createCanvas(canvas.w*mult,canvas.h*mult);
  canvas.parent('gameCanvasp3');
  
  variables = {
    buttons:[],
    state:"menu",
    hostImg:null,
    pencilImg:null,
    hostState:"normal",
    question:1,
    wordMillis:null,
    timeLeftMillis:null,
    textBox:[{x:width/2-300,y:height/2-70+50,w:300,h:100},{x:width/2+50,y:height/2-70+50,w:300,h:100},{x:width/2-300,y:height/2-70+50+120,w:300,h:100},{x:width/2+50,y:height/2-70+50+120,w:300,h:100}],
    timeLimit:100,
    timeRemaining:0,
    points:0,
    timeColor: {r:255,g:153,b:204},
    textColor: {r:205,g:250,b:250},
    correctText:["Nice one!","Good job!","Fantastic!","Keep it up!","Fabulous!","Wow!"],
    correctI:0,
    wrongText:["Try again","Slight error","Almost got it","Keep trying","Good attempt"],
    wrongI:0,
    offset:{x:-55,y:-30},
    gameId:6,
    words: [
    {0:"recieve", 1:"receive", 2:"recive", 3:"receeve", answer:1},
    {0:"seperate", 1:"seperete", 2:"separat", 3:"separate", answer:3},
    {0:"definately", 1:"definitely", 2:"definatly", 3:"definantly", answer:1},
    {0:"adress", 1:"address", 2:"adres", 3:"addres", answer:1},
    {0:"tommorow", 1:"tomorow", 2:"tomorrow", 3:"tommorrow", answer:2},
    {0:"accomodate", 1:"accommodate", 2:"acommodate", 3:"acomodate", answer:1},
    {0:"wierd", 3:"weird", 2:"weerd", 1:"weired", answer:3},
    {1:"occurence", 0:"occurrence", 2:"ocurrance", 3:"occurance", answer:0},
    {1:"embarass", 0:"embarrass", 2:"embarras", 3:"embarass", answer:0},
    {0:"calender", 3:"calendar", 2:"calander", 1:"calandar", answer:3},
    {0:"neccessary", 3:"necessary", 2:"necesary", 1:"nesessary", answer:3},
    {1:"buisness", 0:"business", 2:"busines", 3:"bussiness", answer:0},
    {0:"wich", 1:"wiche", 2:"which", 3:"whitch", answer:2},
    {0:"occured", 1:"occurred", 2:"ocurred", 3:"ocured", answer:1},
    {0:"suprise", 1:"surprise", 2:"suprize", 3:"surprize", answer:1},
    {1:"dissapear", 0:"disappear", 2:"disapear", 3:"dissappear", answer:0},
    {0:"priviledge", 2:"privilege", 1:"privilage", 3:"privledge", answer:2},
    {0:"maintainance", 2:"maintenance", 1:"maintainence", 3:"maintaince", answer:2},
    {0:"pronounciation", 1:"pronunciation", 2:"pronunciacion", 3:"pronounciacion", answer:1},
    {0:"rythm", 3:"rhythm", 2:"rythem", 1:"rhythem", answer:3},
    {1:"vaccuum", 0:"vacuum", 2:"vacume", 3:"vacum", answer:0},
    {0:"fourty", 2:"forty", 1:"fortey", 3:"fortie", answer:2},
    {0:"accidently", 2:"accidentally", 1:"accidentaly", 3:"accidantly", answer:2},
    {0:"beleive", 1:"believe", 2:"belive", 3:"beleive", answer:1},
    {0:"independant", 3:"independent", 2:"independet", 1:"independant", answer:3},
    {0:"humerous", 1:"humorous", 2:"humorus", 3:"humouros", answer:1},
    {1:"refered", 0:"referred", 2:"referredd", 3:"refferd", answer:0},
    {0:"seige", 3:"siege", 2:"seege", 1:"sieege", answer:3},
    {0:"consious", 2:"conscious", 1:"conscous", 3:"conscius", answer:2}]
  }
  
  variables.buttons.push(new button(width/2-200/2,height/2-50/2,200,50,"Play",true,() => {
    variables.state = "game";
    variables.timeLeftMillis = millis();
  }));
  variables.hostImg = loadImage("img/pandaSpellLord.png");
  variables.pencilImg = loadImage("img/pencilText.png");
}

function draw() {
  background(255,100,255);
  
  let pad = 20;
  fill(205,250,250); strokeWeight(7);
  rect(0+pad,0+pad,width-pad*2,height-pad*2,3);
  
  if(variables.state == "menu") {
    image(variables.hostImg,-300,-100);
    
    textSize(70); strokeWeight(8); fill(205,250,250);
    textCentered("Spell Check",0,0,width,height,0,4-150);
    
    for(let i=0; i<variables.buttons.length;i++) {
      variables.buttons[i].draw();
      if(variables.buttons[i].hovering()) {
        if(!variables.buttons[i].hovered) {
          variables.buttons[i].hoveredState(true);
          variables.buttons[i].hovered = true;
        }
      }
      else {
        if(variables.buttons[i].hovered) {
          variables.buttons[i].hoveredState(false);
          variables.buttons[i].hovered = false;
        }
      }
    }
  }
  else if(variables.state == "game") {
    variables.timeRemaining = ((variables.timeLimit-(millis() - variables.timeLeftMillis)/1000)).toFixed(1);
    
    if(variables.timeRemaining <= 0) {
      variables.state = "end";
    }

    variables.hostImg.resize(300,300);
    image(variables.hostImg,-30,20);

    textBubble(width/2-100,height/2-200+35,233,100,233,117,214,116);
    
    textSize(25); strokeWeight(4); fill(variables.textColor.r,variables.textColor.g,variables.textColor.b);
    if(variables.hostState == "normal") {
      textCentered("Choose the word",0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200);
      textCentered("with the correct spelling",0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200+30);
    }
    else if(variables.hostState == "wrong") {
      textCentered(variables.wrongText[variables.wrongI],0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200+15);
    }
    else if(variables.hostState == "correct") {
      textCentered(variables.correctText[variables.correctI],0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200+15);
    }
    
    fill(255,153,204); strokeWeight(3);
    rect(width-200-pad,75-pad*2,185,60,10);
    textSize(27); strokeWeight(4); fill(205,250,250);
    textCentered("Question "+variables.question,width-200-pad,75-pad*2,185,60,0,7);
    
    fill(variables.timeColor.r,variables.timeColor.g,variables.timeColor.b); strokeWeight(3);
    rect(width-200-pad,75-pad*2+75,185,60,10);
    textSize(25); strokeWeight(4); fill(205,250,250);
    textCentered("Time: "+variables.timeRemaining+" s",width-200-pad,75-pad*2+75,185,60,0,7);
    
    for(let i=0;i<variables.textBox.length;i++) {
      fill(250,250,250,100); strokeWeight(3);
    rect(variables.textBox[i].x,variables.textBox[i].y,variables.textBox[i].w,variables.textBox[i].h,15);
      
      let w,h;
      
      if(i==0) {
        w = width/2-300; h = height/2-70;
      }
      else if(i==1) {
        w = width/2+50; h = height/2-70;
      }
      else if(i==2) {
        w = width/2-300; h = height/2+50;
      }
      else if(i==3) {
        w = width/2+50; h = height/2+50;
      }
      
      image(variables.pencilImg,w,h);
      
      textSize(25); strokeWeight(4); fill(205,250,250);
      textCentered(variables.words[variables.question-1][i],variables.textBox[i].x,variables.textBox[i].y,variables.textBox[i].w,variables.textBox[i].h,0,0);
    }
  }
  else{
    variables.hostImg.resize(500,500);
    image(variables.hostImg,-30,100);
    let offset = {x:150,y:180};
    textBubble(width/2-100+offset.x,height/2-200+35+offset.y,233+offset.x,100+offset.y,233+offset.x,117+offset.y,214+offset.x,116+offset.y);
    textSize(25); strokeWeight(4); fill(205,250,250);
    if(variables.points < 5) {
      textCentered("You can do better!",0+variables.offset.x,0+variables.offset.y,width,height,-100+offset.x,-200+35+offset.y);
    }
    else if(variables.points >= 5 && variables.points < 10) {
      textCentered("You have huge potential!",0+variables.offset.x,0+variables.offset.y,width,height,-100+offset.x,-200+35+offset.y);
    }
    else if(variables.points >= 10 && variables.points < 15) {
      textCentered("Amazing job!",0+variables.offset.x,0+variables.offset.y,width,height,-100+offset.x,-200+35+offset.y);
    }
    else if(variables.points >= 15 && variables.points < 20) {
      textCentered("Near perfect!",0+variables.offset.x,0+variables.offset.y,width,height,-100+offset.x,-200+35+offset.y);
    }
    else {
      textCentered("Congratulations! A+",0+variables.offset.x,0,width,height,-100+offset.x,-200+35+offset.y);
    }
    
    textSize(70); strokeWeight(8); fill(255,153,204);
    textCentered("Your points: "+variables.points,0,0,width,height,0,4-150);
  }
}

function mousePressed() {
  if(variables.state == "menu") {
    for(let i=0;i<variables.buttons.length;i++){
      variables.buttons[i].mousePressed();
    }
  }
  else if(variables.state == "game") {
    for(let i=0;i<variables.textBox.length;i++) {
      if(mouseOverRect(variables.textBox[i].x,variables.textBox[i].y,variables.textBox[i].w,variables.textBox[i].h)) {
        if(i == variables.words[variables.question-1].answer) {
          console.log("Correct answer!")
          variables.hostState = "correct";
          variables.question ++;
          variables.points++;
          if(variables.hostState == "correct") {
            if(variables.correctI < variables.correctText.length-1) {
              variables.correctI ++;
            }
            else {
              variables.correctI = 0;
            }
          }
          variables.textColor.r = 205;
          variables.textColor.g = 250;
          variables.textColor.b = 250;
        }
        else{
          console.log("Wrong answer!")
          variables.hostState = "wrong";
          variables.timeLimit -= 3;
          if(variables.hostState == "wrong") {
            if(variables.wrongI < variables.wrongText.length-1) {
              variables.wrongI ++;
            }
            else {
              variables.wrongI = 0;
            }
          }
          variables.textColor.r = 250;
          variables.textColor.g = 120;
          variables.textColor.b = 120;
          //r:205,g:250,b:250
        }
      }
    }
  }
}

class button {
  constructor(x,y,w,h,buttonText,visible,func) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.buttonText = buttonText;
    this.visible = visible;
    this.func = func;
    this.hovered = false;
    this.tSize = 25;
    this.rSize = 5;
    this.sSize = 5;
  }
  
  draw() {
    if(this.visible){
      fill(255,153,204); stroke(0); strokeWeight(this.sSize);
      rect(this.x,this.y,this.w,this.h,this.rSize);
      textSize(this.tSize); fill(205,250,250); strokeWeight(this.sSize);
      textCentered(this.buttonText,this.x,this.y,this.w,this.h,0,6);
    }
  }
  
  mousePressed() {
    if(this.hovering()) {
       this.click();
    }   
  }
  
  hovering() {
    if(this.visible) {
      if(mouseOverRect(this.x,this.y,this.w,this.h)) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  
  click() {
    if(this.visible) {
      this.func();
    }
  }
  
  hoveredState(hover) {
    let sign;
    if(hover) {
      sign = 1;
    }
    else {
      sign = -1;
    }
    this.x -= 10 * sign;
    this.y -= 10 * sign;
    this.w += 20 * sign;
    this.h += 20 * sign;
    this.tSize += 10 * sign;
    this.rSize += 1 * sign;
    this.sSize += 1 * sign;
  }
}

function textBubble(ellX,ellY,tri1X,tri1Y,tri2X,tri2Y,tri3X,tri3Y) {
    fill(255,153,204); strokeWeight(3);
    ellipse(ellX+variables.offset.x,ellY+variables.offset.y,300,200);
    
    let tri = {one:{x:tri1X,y:tri1Y},two:{x:tri2X,y:tri2Y},three:{x:tri3X,y:tri3Y}};
    //triangle
    noStroke();
    fill(255,153,204);
    beginShape();
    vertex(tri.one.x, tri.one.y);
    vertex(tri.two.x, tri.two.y);
    vertex(tri.three.x, tri.three.y);
    endShape(CLOSE);

    //triangle stroke
    stroke(0); strokeWeight(3);
    line(tri.one.x, tri.one.y, tri.three.x,tri.three.y);
    line(tri.two.x,  tri.two.y, tri.three.x, tri.three.y);
}

function textCentered(textText,x,y,w,h,offsetX,offsetY) {
  let textW = textWidth(textText);

  let centeredX = x + (w - textW) / 2;
  let centeredY = y + h / 2;

  text(textText, centeredX+offsetX, centeredY+offsetY);
}

function mouseOverRect(x,y,w,h) {
    return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}