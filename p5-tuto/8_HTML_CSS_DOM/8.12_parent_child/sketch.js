
var happy = ['surf', 'chocolate','friends'];

// function setup() {
// 	var canvas = createCanvas(100, 100);
// 	canvas.parent('canvasp');
// }

// function draw() {
// 	background(0);
// 	ellipse(50,50,random(100), random(100));
// }

function setup() {
	noCanvas();

	var button = select('#button');
	button.mousePressed(addItem);
}

function addItem() {
	var r = floor(random(0,happy.length));
	print(r);
	//createP(happy[r]);
	var li = createElement('li', happy[r]);
	li.parent(happylist);
}