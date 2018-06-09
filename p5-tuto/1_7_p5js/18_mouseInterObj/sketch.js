let bubbles = [];

function setup() {
	createCanvas(600,400);
	for (let i = 0; i < 10; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(10,40);
		let b = new Bubble(x, y, r);
		bubbles.push(b);	
	}
}

function draw() {
	background(0);


	for (let bubble of bubbles) {
		if (bubble.rollover(mouseX,mouseY)) {
			bubble.changeColor();
		}

		bubble.show();
		bubble.move();
		bubble.bounce();
	}

	// only allowed to have no more than 15 bubbles object
	if(bubbles.length > 15) {
		bubbles.splice(0,1);
	}
}

// CREATE
function mouseDragged() {
	let r = random(10,50);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
}

// DELETE
function mousePressed() {
	for (let i = bubbles.length -1; i >= 0 ; i--) {
		if( bubbles[i].rollover(mouseX,mouseY) ) {
			bubbles.splice(i,1);
		}
	}
}



class Bubble {
	constructor(_x, _y, _r) {
		this.x = _x;
		this.y = _y;
		this.r = _r;
		this.xspeed = 2;
		this.yspeed = -2;
		this.brightness = 0;
	}

	move() { 
		// Inside of the class/template, I'm refering to the var/data that are part of a bubble object
		// I need to refere to it with THIS.
		this.x = this.x + random(-5,5);
	 	this.y = this.y + random(-5,5);
	}

	bounce() {
		if (this.x > width || this.x < 0) {
			this.xspeed = this.xspeed * -1;
		}

		if(this.y > height || this.y < 0) {
			this.yspeed = this.yspeed * -1;
		}
	}

	rollover(x, y) {
		let d = dist(x, y, this.x, this.y);  // this are the property of the object
		if (d < this.r) {
			return true;
		} else {
			return false;
		}
	}

	changeColor() {
		this.brightness = 255;
		console.log('CLICKED ON BUBBLE');
	}

	show() {
		stroke(255);
		strokeWeight(4);
		// noFill();
		// noStroke();
		fill(this.brightness, 100);
		ellipse(this.x, this.y, this.r * 2);
	}
}