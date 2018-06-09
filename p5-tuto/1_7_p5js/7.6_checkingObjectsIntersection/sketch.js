// + 7.7: Checking Objects Intersection Part II - p5.js Tutorial

var bubbles = [];

function setup() {
	createCanvas(600, 400);
	for( var i = 0; i < 5; i++) {
		bubbles[i] = new Bubble(random(width),random(height));
	}
}

function draw() {
	background(0);

	for ( var i = 0; i < bubbles.length; i++) {
		bubbles[i].update();
		bubbles[i].show();

		for ( var j = 0; j < bubbles.length; j++) {
			if(bubbles[i].intersects(bubbles[j]) && i !== j) {
				bubbles[i].changeColor();
				bubbles[j].changeColor();

			}
		}
	}
}