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
	if (mouseX > 300) {
		fill(255,0,200);
	}

	// if(x > width){
	// 	speed = -3 - fast;
	// 	fast++;
	// }
	// if(x < 0){
	// 	speed = fast + 3;
	// 	fast++;
	// }
	// idea
	if(x > width || x < 0) {
		speed = speed * -1;
	}
	console.log(fast);
	if(fast == 300){
		fast = 1;
	}

	ellipse(x,200,100,100);

	x = x + speed;

}

