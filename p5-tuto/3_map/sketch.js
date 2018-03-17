var col = 0;
var r = 0;
var b = 255;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	//background
	r = map(mouseX,0,600,0,255);
	b = map(mouseX,0,600,255,0);

	background(r,0,b);
	//ellipse
	fill(250,118,222);
	ellipse(mouseX,200,64,64);

	line(100,100,50,50);
	// value has : min max range and I want to map it to : min max

}