
var sliders = [];

var angle = 0;

function setup() {
  noCanvas();
  // Make a whole bunch of sliders and fill an array
  for (var i = 0; i < 5; i++) {
    sliders[i] = createSlider(0, 255, 50);
  }

  sliders[0].input(adjustSliders);
}

// function draw() {
// 	var offset = 0;
// 	for(let i = 0; i < sliders.length; i++) {
// 		var x = map(sin(angle+offset), -1, 1, 0, 255);
// 		sliders[i].value(x);
// 		offset += 0.25;
// 	}
// 	angle += 0.1;
// }

function adjustSliders() {
	for (var i = 0; i< sliders.length; i++) {
		sliders[i].value(sliders[0].value());
	}
}

