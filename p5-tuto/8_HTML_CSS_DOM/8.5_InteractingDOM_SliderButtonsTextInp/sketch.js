var bgcolor;
var button;
var slider;

function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  nameP = createP('Your name!');

  txt = createP("some texte");

  button = createButton("go");
  //attached a function to that button 
  button.mousePressed(changeColor);
  button.mousePressed(changeStyle);


  slider = createSlider(0, 100, 50);
  nameInput = createInput("type your name");

   nameP.mouseOver(ouverpara);
   nameP.mouseOut(outpara);

   nameInput.changed(updateText);
}

function changeColor() {
  bgcolor = color(random(255))
}

function changeStyle() {
	txt.style("background-color", "pink")
}

function ouverpara() {
	nameP.html('your mouse is over me!');
}

function outpara() {
	nameP.html('your mouse is out');
}

function updateText() {
	nameP.html(nameInput.value());
}

// function mousePressed() {
//   changeColor();
// }
function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100, 100, slider.value(), slider.value());
  //nameP.html(input.value());

  text(nameInput.value(), 10, 20);

}