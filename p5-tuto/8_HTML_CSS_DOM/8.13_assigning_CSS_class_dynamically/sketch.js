function setup() {
	for(var i = 0; i < 10; i++) {
		var p = createP('surfboard');
		var x = floor(random(windowWidth));
		var y = floor(random(windowHeight));
		p.position(x,y);
		p.class('surf');
		p.mousePressed(becomeMiam);
	}


	for(var i = 0; i < 10; i++) {
		var p = createP('chocolate');
		var x = floor(random(windowWidth));
		var y = floor(random(windowHeight));
		p.position(x,y);
		p.class('miam');
		p.mousePressed(becomeSurf);
	}

}

function becomeSurf() {
	this.class('surf'); // also became a memeber of the class surf en plus de sa propre calss de base
	this.removeClass('miam'); // that's why we need to remove the first class to do so
}

function becomeMiam() {
	this.class('miam'); // also became a memeber of the class surf en plus de sa propre calss de base
	this.removeClass('surf'); // that's why we need to remove the first class to do so
}

