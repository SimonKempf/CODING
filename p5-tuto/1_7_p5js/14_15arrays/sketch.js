var nums = [100, 25, 46, 72];
var num = 23;

var words = ["rainbom", "hello", "bonjour"];
var index = 0;
var word = "";

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);

	for( var i = 0; i< nums.length; i++) {
		stroke(255);
		fill(51);
		ellipse(i * 100 + 100, 200, nums[i], nums[i]);
	}


	fill(255);
	textSize(32);
	text(words[index], 12, 20);

	fill(255);
	textSize(32);
	text(word,12,50);
}
function mousePressed() {	
	index = index + 1;

	if(index >= words.length) {
		index = 0;
	}

	word = random(words);
}