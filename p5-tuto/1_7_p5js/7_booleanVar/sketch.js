var on = false;
var w = 100;
var h = 100;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);

	if(on) {
		background(0,255,0);
	} else {
		background(0);
	}

	stroke(255);
	strokeWeight(4);
	noFill();

	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
		fill(255,0,200);
	}


	

	rectMode(CENTER);
	rect(300,200,w,h);
}

function mousePressed() {
	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
		// if(on) {
		// 	on = false;
		// } else {
		// 	on = true
		// }
		on = !on;
		h++;
		w++;

	}
}


	// 