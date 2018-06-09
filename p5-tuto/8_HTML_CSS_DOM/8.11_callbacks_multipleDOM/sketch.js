/*
All examples: github.com/shiffman/Video-Lesson-Materials
*/
var paragraphs;
var paragraph;

function setup() {
  createCanvas(100, 100);
  background(0);
  // createP("This is a random number " + random(100));

  paragraph = select('#unicorn');
  
  // for (var i = 0; i < 100; i++) {
  //   var par = createP('rainbow');
  //   par.position(random(500), random(500));
  // }
  paragraphs = selectAll('p');
  // paragraphs = selectAll('.rainbow');
  
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
  }
  
  // paragraph = select('#unicorn');
  // paragraph.mouseOver(highlight);
  // paragraph.mouseOut(unhighlight);
}
// this refers to the DOM element that the event is attached to 
function highlight() {
  this.style('padding', '16pt');
  this.style('background-color', '#F0F');
}

function unhighlight() {
  this.style('padding', '0pt');
  this.style('background-color', '#FFF');
}