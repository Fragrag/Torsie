var quads;
var rows = 18;
var columns = 18;
var quadHeight = 30;
var quadWidth = 30;

function setup() {
	
	background(128);
	createCanvas(1000, 1000);
	
	//translate(-(quadWidth*2), 0);
	
	quads = new QuadArray(rows, columns, quadHeight, quadWidth);
	quads.SetArray();
	
}

function draw() {
	quads.DrawArray();
	// quads.SetArraySingleColor(128, 64, 64);
	// quads.SetArraySingleColor(128, 64, 128);
	quads.SetArrayABPattern(128, 0, 0);
}





