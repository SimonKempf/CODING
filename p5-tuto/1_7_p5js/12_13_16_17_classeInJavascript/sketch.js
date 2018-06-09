// var bubble = {
// 	x: 300,
// 	y: 200
// }


// function setup() {
// 	createCanvas(600, 400);
// }

// function draw() {
// 	background(0);
// 	move();
// 	show();
// }

// function show() {
// 	stroke(255);
// 	strokeWeight(4);
// 	noFill();
// 	ellipse(bubble.x, bubble.y, 24,24);
// }

// function move() {
// 	bubble.x = bubble.x + random(-5,5);
// 	bubble.y = bubble.y + random(-5,5);
// }

let bubbles = [];

function setup() {
	createCanvas(600,400);
	for (let i = 0; i < 10; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(10,40);
		bubbles[i] = new Bubble(x, y, r);
	}
	// print(bubbles[0].x, bubbles[0].y);
}

function draw() {
	background(0);

	for (let bubble of bubbles) {
		bubble.show();
		bubble.move();
		bubble.bounce();
	}

	// for (let i = 0; i < bubbles.length; i++) {
	// 	bubbles[i].show();
	// 	bubbles[i].move();
	// 	bubbles[i].bounce();
	// }
}

function mousePressed() {
	let r = random(10,50);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
}



class Bubble {
	constructor(_x, _y, _r) {
		this.x = _x;
		this.y = _y;
		this.r = _r;
		this.xspeed = 2;
		this.yspeed = -2;
	}

	move() { 
		// Inside of the class/template, I'm refering to the var/data that are part of a bubble object
		// I need to refere to it with THIS.
		this.x = this.x + this.xspeed; //random(-20,20);
	 	this.y = this.y + this.yspeed; //random(-20,20);
	}

	bounce() {
		if (this.x > width || this.x < 0) {
			this.xspeed = this.xspeed * -1;
		}

		if(this.y > height || this.y < 0) {
			this.yspeed = this.yspeed * -1;
		}
	}


	show() {
		// stroke(255);
		// strokeWeight(4);
		noStroke();
		fill(255,10);
		ellipse(this.x, this.y, this.r * 2);
	}
}













