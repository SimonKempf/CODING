var dropzone;

function setup() {
	var canvas = createCanvas(200, 200);
	background(0);

	dropzone = select('#dropzone');
	dropzone.dragOver(highlight);
	dropzone.dragLeave(unhighlight);
	dropzone.drop(gotFile, unhighlight); // callback : fisrt argument handel the file / callbakc to handle the dropping event 

	canvas.drop(gotFile);
}


function gotFile(file) {
	createP(file.name + " " + file.size);
	var img = createImg(file.data);
	img.size(100,100); // making a DOM element image

	image(img, 0, 0, 200, 200); //drawing an image into a canvas
}

function highlight() {
	dropzone.style('background-color', '#ccc');
}

function unhighlight() {
	dropzone.style('background-color', '#fff');
}


