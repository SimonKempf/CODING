// https://vimeo.com/channels/learningp5js/143374880
// p5 DOM reference: p5js.org/reference/#/libraries/p5.dom

var textbox;
var slider;
var paragraph;

function setup() {
  noCanvas();
  textbox = createInput('enter text');
   slider = createSlider(10, 64, 16);
   paragraph = createP("starting text");


  textbox.input(updateText);
  //input event : every time the texbox input change
  slider.input(updateSize);
}

function updateSize() {
	//paragraph.html(textbox.value()); // change the text as you type in
	paragraph.style("font-size", slider.value() + "pt");  // pt is for the type of the value
}

function updateText() {
	paragraph.html(textbox.value());
}

