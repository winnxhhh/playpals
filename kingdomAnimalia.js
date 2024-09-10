let variables;

//cartoon char img
//<a href="https://www.freepik.com/free-vector/cute-woman-teacher-government-uniform-welcoming-posture-character-cartoon-art-illustration_18059679.htm#fromView=search&page=1&position=52&uuid=a519a6ea-ac2b-4d13-ac5b-d7a7b291404e">Image by mamewmy on Freepik</a>

//img 2

//https://www.freepik.com/free-vector/cute-woman-teacher-government-uniform-welcoming-posture-character-cartoon-art-illustration_18059679.htm#fromView=search&page=1&position=52&uuid=02dedf09-cb6f-462b-87d6-60c35e509c5a

//img 3
//https://img.freepik.com/free-vector/cute-woman-teacher-government-uniform-greeting-with-hand-character-cartoon-art-illustration_56104-822.jpg?t=st=1723961541~exp=1723965141~hmac=dcf1a6dd98f845ea443ebb599c5334412aa9566042474100a1349c835572b373&w=1380

//tiger
//<a href="https://www.freepik.com/free-vector/cute-tiger-standing-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_34358343.htm#fromView=search&page=1&position=21&uuid=22ec28c6-89f7-4a8c-ba5d-5a371fa96640">Image by catalyststuff on Freepik</a>

//frog silouhette
//<a href="https://www.freepik.com/free-vector/hand-drawn-frog-silhouette_49272385.htm#fromView=search&page=1&position=1&uuid=44de2d18-9ab1-48c3-a06f-dd771af40d0e">Image by freepik</a>

//cat sil
//https://www.freepik.com/free-vector/flat-design-dog-cat-silhouette-illustration_41883276.htm#fromView=search&page=1&position=6&uuid=6397f28d-38dd-4b85-981c-cc149b1a849c

//bird sil
//https://www.freepik.com/free-vector/birds-silhouettes-collection_907524.htm#fromView=search&page=1&position=2&uuid=e1a5db41-7c16-4d30-a7a7-cb595aa94331

//reptile sil
//https://www.freepik.com/free-vector/flat-design-animal-silhouette-set_29628876.htm#fromView=search&page=1&position=0&uuid=eed93901-287d-4b4d-bc7a-b8d4085c9c35

//insect sil
//https://www.freepik.com/free-vector/flat-insect-silhouettes-collection_4067617.htm#fromView=search&page=1&position=2&uuid=60b5169a-5845-42de-8826-2867dd0c7bd4

//fish sil
//https://www.freepik.com/free-vector/fish-silhouettes-black-white-set-marine-animals-monochrome-style-illustration_13031932.htm#fromView=search&page=1&position=1&uuid=1cb9f74f-6e05-44c2-b56f-e9526e963ab4

//frog
//https://img.freepik.com/free-vector/cartoon-cute-frog-illustration_23-2148962887.jpg?t=st=1723962144~exp=1723965744~hmac=7214bd081133e8e46e2682025793075b186f8c033d8b7ee15a9b7e4fec043d8e&w=1060

//toad
//https://www.freepik.com/free-vector/hand-drawn-cartoon-toad-illustration_43467940.htm#fromView=search&page=1&position=24&uuid=b1d6419d-64d4-47b0-9b4c-e1cbb8e62c84

//elephant
//https://www.freepik.com/free-vector/cute-elephant-flat-cartoon-style_28767535.htm#fromView=search&page=1&position=16&uuid=d59dced8-8bd3-4327-9376-a02e4b661943

//eagle
//https://www.freepik.com/free-vector/cute-eagle-bird-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector_36533291.htm#fromView=search&page=1&position=1&uuid=d59dced8-8bd3-4327-9376-a02e4b661943

//penguin
//https://www.freepik.com/free-vector/cute-penguin-standing-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_25654227.htm#fromView=search&page=1&position=3&uuid=ddb584a3-034a-4a17-a185-fa47c849476c

//croco
//https://www.freepik.com/free-vector/cute-crocodile-sitting-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat-vector_262901450.htm#fromView=search&page=1&position=0&uuid=4f04fac7-32a7-47db-a627-d6983ddb3c2c

//snake
//https://www.freepik.com/free-vector/cute-green-snake-character-with-tongue-vector_183405273.htm#fromView=search&page=1&position=12&uuid=6040864d-bcc6-464e-aa18-2ef1eaec5db4

//turtle
//https://www.freepik.com/free-vector/cute-happy-turtle-swimming-cartoon-animal-sporty-icon-concept-isolated-flat-cartoon-style_10920761.htm#fromView=search&page=1&position=7&uuid=d9920ba0-39f8-48b5-b98b-44a25b1c12fa

//butterfly
//https://www.freepik.com/free-vector/isolated-picture-butterflies_6703310.htm#fromView=search&page=1&position=29&uuid=8fb3c720-1d4d-4161-9d30-224ad4378eb5

//beetle
//https://www.freepik.com/free-vector/external-anatomy-beetle-worksheet_18687388.htm#fromView=search&page=1&position=40&uuid=44200cd5-9b22-4812-81fc-34f4f0d0f257

//shark
//https://www.freepik.com/free-vector/cute-shark-swimming-cartoon-icon-illustration_11167770.htm#fromView=search&page=1&position=8&uuid=d969db2e-d8f7-47cb-afc5-b6803d10e055

//whale
//https://www.freepik.com/free-vector/cute-whale-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_18537661.htm#fromView=search&page=1&position=1&uuid=0ac91503-9d4d-4a32-bc63-5e5495929bef

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
    hostCorrectImg:null,
    hostCorrect2Img:null,
    pencilImg:null,
    hostState:"normal",
    newTextColor:{r:255,g:204,b:153},
    newRectColor:{r:0,g:173,b:152},
    question:1,
    offset:{x:-55,y:-30},
    score:0,
    gameId:5,
    animals: [
  { name: "tiger", type: "Mammal", img: null, rX: 250, rY: 250, x: 300, y: 190, habitat: "land", body: "fur", reproduction: "give birth" },
  { name: "shark", type: "Fish", img: null, rX: 765/3, rY: 560/3, x: 300, y: 220, habitat: "water", body: "scales", reproduction: "lay eggs" },
  { name: "butterfly", type: "Insect", img: null, rX: 459/2.2, rY: 419/2.2, x: 300, y: 210, habitat: "land", body: "exoskeleton", reproduction: "lay eggs" },
  { name: "crocodile", type: "Reptile", img: null, rX: 872/3, rY: 503/3, x: 290, y: 240, habitat: "water and land", body: "scales", reproduction: "lay eggs" },
  { name: "snake", type: "Reptile", img: null, rX: 240, rY: 169, x: 280, y: 220, habitat: "land", body: "scales", reproduction: "lay eggs" },
  { name: "frog", type: "Amphibian", img: null, rX: 810/4.3, rY: 770/4.3, x: 320, y: 220, habitat: "water and land", body: "skin", reproduction: "lay eggs" },
  { name: "lion", type: "Mammal", img: null, rX: 661/3.5, rY: 773/3.5, x: 330, y: 200, habitat: "land", body: "fur", reproduction: "give birth" },
  { name: "toad", type: "Amphibian", img: null, rX: 660/3, rY: 574/3, x: 300, y: 210, habitat: "water and land", body: "skin", reproduction: "lay eggs" },
  { name: "whale", type: "Mammal", img: null, rX: 754/3.5, rY: 712/3.5, x: 300, y: 210, habitat: "water", body: "skin", reproduction: "give birth" },
  { name: "elephant", type: "Mammal", img: null, rX: 945/4, rY: 681/4, x: 290, y: 220, habitat: "land", body: "skin", reproduction: "give birth" },
  { name: "penguin", type: "Bird", img: null, rX: 611/3.5, rY: 758/3.5, x: 330, y: 200, habitat: "water and land", body: "feathers", reproduction: "lay eggs" },
  { name: "beetle", type: "Insect", img: null, rX: 449/2.2, rY: 494/2.2, x: 300, y: 190, habitat: "land", body: "exoskeleton", reproduction: "lay eggs" },
  { name: "eagle", type: "Bird", img: null, rX: 734/3.5, rY: 747/3.5, x: 320, y: 210, habitat: "air and land", body: "feathers", reproduction: "lay eggs" },
  { name: "turtle", type: "Reptile", img: null, rX: 785/3, rY: 647/3, x: 270, y: 190, habitat: "water and land", body: "scales", reproduction: "lay eggs" }
],
    
    optionImg:{amphibian:null,mammal:null,bird:null,reptile:null,insect:null,fish:null},
    optionPos:{Amphibian:{x:170,y:330},Mammal:{x:220,y:440},Bird:{x:410,y:480},Reptile:{x:640,y:445},Insect:{x:695,y:335},Fish:{x:600,y:220}},
    hostText:{one:null,two:null},
    clickedOption:null,
    hintState:false
  }
  
  for(let i=0;i<variables.animals.length;i++) {
    variables.animals[i].img = loadImage("img/"+variables.animals[i].name+".png");
  }
  
  variables.optionImg.amphibian = loadImage("img/silFrog.png");
  variables.optionImg.mammal = loadImage("img/silCat.png");
  variables.optionImg.bird = loadImage("img/silBird.png");
  variables.optionImg.reptile = loadImage("img/silReptile.png");
  variables.optionImg.insect = loadImage("img/silInsect.png");
  variables.optionImg.fish = loadImage("img/silFish.png");
  
  variables.buttons.push(new button(width/2-200/2,height/2-50/2,200,50,"Play",true,() => {
    variables.state = "game";
    variables.buttons.splice(0,1); //remove itself
    variables.buttons.push(new button(width-250,0+50,200,50,"Hint?",true,() => {
      variables.hintState = true;
    }));
  }));
  variables.hostImg = loadImage("img/teacher.png");
  variables.hostCorrectImg = loadImage("img/teacherCorrect.png");
  variables.hostCorrect2Img = loadImage("img/teacherCorrect2.png");
  variables.pencilImg = loadImage("img/pencilText.png");
}

function draw() {
  background(0,120,102);
  
  let pad = 20;
  fill(variables.newTextColor.r,variables.newTextColor.g,variables.newTextColor.b); strokeWeight(7);
  rect(0+pad,0+pad,width-pad*2,height-pad*2,3);
  
  if(variables.state == "menu") {
    variables.hostImg.resize(600,480); //2000x1600 ori size
    image(variables.hostImg,-150,100);
    
    textSize(70); strokeWeight(8); fill(variables.newTextColor.r+50,variables.newTextColor.g+50,variables.newTextColor.b+50);
    textCentered("Kingdom Animalia",0,0,width,height,0,4-150);
    
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

    if(variables.hostState == "correct") {
      if(variables.question%2==0) {
      variables.hostCorrectImg.resize(600*0.6,480*0.6);
      image(variables.hostCorrectImg,-80,20); //2000x1600 ori size  
      }
      else {
      variables.hostCorrect2Img.resize(600*0.6,480*0.6);
      image(variables.hostCorrect2Img,-80,20); //2000x1600 ori size         
      }
    }
    else {
      variables.hostImg.resize(600*0.6,480*0.6);
      image(variables.hostImg,-80,20); //2000x1600 ori size
    }

    textBubble(width/2-100,height/2-200+35,233,100,233,117,214,116);
    
    textSize(25); strokeWeight(4); fill(variables.newTextColor.r+50,variables.newTextColor.g+50,variables.newTextColor.b+50);
    if(variables.hostState == "normal") {
      variables.hostText.one = "This is a "+variables.animals[variables.question-1].name+",";
      variables.hostText.two = "which group is it from?";
      textCentered(variables.hostText.one,0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200);
      textCentered(variables.hostText.two,0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200+30);
    }
    else if(variables.hostState == "wrong") {
      // textCentered(variables.wrongText[variables.wrongI],0,35/2,width,height,-100,4-200+15);
      variables.hostText.one = variables.clickedOption+"?";
      variables.hostText.two = "Slightly incorrect";
      textCentered(variables.hostText.one,0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200);
      textCentered(variables.hostText.two,0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200+30);
    }
    else if(variables.hostState == "correct") {
      let aaa;
      if(variables.animals[variables.question-1].name == "elephant" || variables.animals[variables.question-1].name == "eagle") {
        aaa = "an"
      }
      else {
        aaa = "a"
      }

      variables.hostText.one = "This is "+aaa+" "+variables.animals[variables.question-1].name+",";
      variables.hostText.two = "which group is it from?";
      textCentered(variables.hostText.one,0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200);
      textCentered(variables.hostText.two,0+variables.offset.x,35/2+variables.offset.y,width,height,-100,4-200+30);
    }
    
    variables.animals[variables.question-1].img.resize(variables.animals[variables.question-1].rX,variables.animals[variables.question-1].rY);
    image(variables.animals[variables.question-1].img,variables.animals[variables.question-1].x,variables.animals[variables.question-1].y);
    variables.optionImg.amphibian.resize(150,100); //300x200 ori
    variables.optionImg.mammal.resize(300*0.7,200*0.7);
    variables.optionImg.bird.resize(300*0.7,200*0.7);
    variables.optionImg.reptile.resize(300*0.7,200*0.7);
    variables.optionImg.insect.resize(300*0.7,200*0.7);
    variables.optionImg.fish.resize(300*0.7,200*0.7);
    tint(250,250,250,175);
    image(variables.optionImg.amphibian,100,280);
    image(variables.optionImg.mammal,100,370);
    image(variables.optionImg.bird,300,390);
    image(variables.optionImg.reptile,540,360);
    image(variables.optionImg.insect,590,260);
    image(variables.optionImg.fish,520,140);
    noTint();
        textSize(25); strokeWeight(4); fill(variables.newTextColor.r+50,variables.newTextColor.g+50,variables.newTextColor.b+50);
    text("Amphibian",110,330);
    text("Mammal",170,440);
    text("Bird",390,487);
    text("Reptile",600,445);
    text("Insect",660,340);
    text("Fish",575,225);
    
    if(variables.hintState) {
      strokeWeight(1.5); fill(variables.newRectColor.r,variables.newRectColor.g,variables.newRectColor.b,100);
      rect(width-250-27,0+50+70,200+27*2,135,5);
      textSize(20);
      fill(variables.newTextColor.r+50,variables.newTextColor.g+50,variables.newTextColor.b+50);
      strokeWeight(3); 
      textCentered("They live on "+variables.animals[variables.question-1].habitat,width-250,0+50+70,200,200,0,-60);
      textCentered("They have "+variables.animals[variables.question-1].body,width-250,0+50+70,200,200,0,-30);
      textCentered("They "+variables.animals[variables.question-1].reproduction,width-250,0+50+70,200,200,0,0);
    }
  }
  else{
    variables.hostImg.resize(600*0.8,480*0.8);
    image(variables.hostImg,-30,100);
    let offset = {x:150,y:180};
    textBubble(width/2-100+offset.x,height/2-200+35+offset.y,233+offset.x,100+offset.y,233+offset.x,117+offset.y,214+offset.x,116+offset.y);
    textSize(25); strokeWeight(4); fill(variables.newTextColor.r+50,variables.newTextColor.g+50,variables.newTextColor.b+50);
    textCentered("Congratulations!",0+variables.offset.x,-20+variables.offset.y,width,height,-100+offset.x,-200+35+offset.y);
    textCentered("You aced it!",0+variables.offset.x,20+variables.offset.y,width,height,-100+offset.x,-200+35+offset.y);
  }
}

function mousePressed() {
  for(let i=0;i<variables.buttons.length;i++){
    variables.buttons[i].mousePressed();
  }
  
  if(variables.state == "game") {
    for(let group in variables.optionPos) {
      let pos = variables.optionPos[group];
      let d = dist(mouseX, mouseY, pos.x, pos.y);
      if(d <= 100/2) {
        //console.log(group);
        if(group == variables.animals[variables.question-1].type) {
          console.log("Correct");
          variables.score ++;
          variables.hostState = "correct";
          variables.hintState = false;
          if(variables.question < variables.animals.length) {
            variables.question ++;
          }
          else {
            variables.state = "end";
          }
        }
        else {
          console.log("Wrong");
          variables.clickedOption = group;
          variables.hostState = "wrong";
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
    this.sSize = 3;
  }
  
  draw() {
    if(this.visible){
      fill(variables.newRectColor.r,variables.newRectColor.g,variables.newRectColor.b); stroke(0); strokeWeight(this.sSize);
      rect(this.x,this.y,this.w,this.h,this.rSize);
      textSize(this.tSize); fill(variables.newTextColor.r+50,variables.newTextColor.g+50,variables.newTextColor.b+50); strokeWeight(this.sSize);
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
    fill(variables.newRectColor.r,variables.newRectColor.g,variables.newRectColor.b); strokeWeight(3);
    ellipse(ellX+variables.offset.x,ellY+variables.offset.y,300,200);
    
    let tri = {one:{x:tri1X,y:tri1Y},two:{x:tri2X,y:tri2Y},three:{x:tri3X,y:tri3Y}};
    //triangle
    noStroke();
    fill(variables.newRectColor.r,variables.newRectColor.g,variables.newRectColor.b);
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
