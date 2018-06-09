var x = 0;
var speed = 3;
var fast = 2;


function setup() {
	createCanvas(600, 400);
}

function draw() {

	background(0);

	stroke(255);
	strokeWeight(4);
	noFill();
	// fill the ellipse
	if (mouseX > 250) {
		ellipse(300,200,100,100);
	} else if (mouseX > 100) {
		rect(300,200,100,100);
	} else if (mouseX > 50) {
		line(0,0,width,height); 
	} else {
		point(300,200);
	}

	if(mouseX > 50 && mouseX <100) {
		background(200,0,150);
	}

	if(mouseX > 300 && mouseX < 400) {
		fill(255,0,200);
	}

	rect(300,200,100,100);


}

