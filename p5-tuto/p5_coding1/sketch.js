function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(250,250,0);
	ellipseMode(CENTER);
	rectMode(CENTER);

	//Body 
	fill(255,0,0)
	// red, green, blue, opacity
	rect(240, 145, 20, 100);
	// x,y,width,height

	//Head
	ellipse(240,115,60,60);

	//Eyes
	fill(0,255,0)
	ellipse(221,115,16,32);
	ellipse(259,115,16,32);

	//legs
	line(230,195,220,205)
	line(250,195,260,205)



}