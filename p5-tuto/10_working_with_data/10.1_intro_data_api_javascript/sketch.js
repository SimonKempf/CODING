var flower 

function setup() {
	flower = loadJSON("flower.json");
}

function draw() {
	background(0);

	fill(flower.r, flower.g, flower.b);
	text(flower.name, 10, 50);

}