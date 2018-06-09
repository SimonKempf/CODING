var p;
var images = [];
function setup() {
	noCanvas();


		for(var i = 0; i< 5; i++) {
			p = createP('This is a link: ');
			p.style('background-color', '#CCC');
			p.style('padding', '24px');

			var a = createA('#', 'pineapple');
			a.mousePressed(addPhoto);
			a.parent(p);

		}

	var button = select('#clear');
	button.mousePressed(clearStuff);
}

function clearStuff() {
	for (var i= 0; i < images.length; i++) {
		images[i].remove();
	}
	images = [];
}

function addPhoto() {
	var img = createImg('pineapple.jpeg');
	images.push(img);
	img.size(100,200); 

	var paragraphe = this.parent();   // who is the parent of this, we put it in paragraphe
	img.parent(this); // ici le this fait référence à var a qui a pour parent var p et npus on veut p
	img.parent(paragraphe);  // I want img to be parented by the paragraphe
	// p.child(img); // I want the paragraphe to have img as a child
}

// a.parent(b); // ==> assigne a element parnent to b element
// parent(); // ==> asking which is the current parent