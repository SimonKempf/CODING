
function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	strokeWeight(4);
	stroke(255);

	var x = 0; // local variable

	while(x < width) {
		fill(0,200,255);
		ellipse(x, 200,25,25);
		x = x + 50;
	}	
	
	for (var l = 0; l <= mouseX; l += 50) {
		for (var y = 0; y <= height; y+= 50){
			fill(random(255),0,random(255));
			ellipse(l, y,25,25);
		}

	}

}