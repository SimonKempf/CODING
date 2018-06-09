let bubbles = [];
let kittens = [];

//load files

let flower;
function preload() {
	for (let i = 0; i < 3; i++) {
		// kittens[i] = loadImage('kittens/k' + i +'.jpeg');
		kittens[i] = loadImage(`kittens/k${i}.jpeg`);

	}
}

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 10; i++) {
  	let x = random(width);
  	let y = random(height);
  	let r = random(50,150);
  	let kitten = random(kittens);
  	bubbles[i] = new Bubble(x, y, r, kitten);
  }

}

function draw() {
	background(0);

	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}

function mousePressed() {
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].clicked(mouseX, mouseY);
	}
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.kitten = img;
  }

 clicked(px, py) {
	if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
		this.kitten = new random(kittens);
	}
 }


  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
  	image(this.kitten, this.x, this.y, this.r, this.r);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}