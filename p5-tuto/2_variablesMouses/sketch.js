
// assignement opération
var circle = {
	x : 0,
	y : 200,
	diameter : 50
};

var r = 218;
var g = 160;
var b = 221;

// those functiuon control de flow
// executes ONCE
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250,250,200);
}

// draw function is a loop that executes itself everytime
function draw() {

	//background(r,g,b);

	//ellipse
	noStroke();
	fill(250,200,200);
	ellipse(circle.x,circle.y,circle.diameter,circle.diameter);

	//rectangle
	fill(200,250,200);
	rect(400,100,50,50);

	circle.x = circle.x + 1;
	//y = y + 1;
	//diameter = diameter + 1
	//r++;
	//g++;
	//b++;
}

// waiting only once : EVENT
function mousePressed(){
		background(250,250,200);
		circle.x = 0;
		//diameter = 0;
}