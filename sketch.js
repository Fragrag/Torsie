var quads;
var rows = 24;
var columns = 36;
var quadHeight = 25;
var quadWidth = 25;

function setup() {
	
	background(128);
	
	createCanvas(750, 750);
	
	
	
	quads = new QuadArray(rows, columns, quadHeight, quadWidth);
	quads.SetArray();
	
}

function draw() {
	translate(-quadWidth, 0);
	quads.DrawArray();
	
	
	quads.SetPatternABBC(255, 255, 255, 120, 120, 120, 200, 200, 200);
	// quads.SetSingleColor(128, 64, 64);
	// quads.SetPatternAB(0, 0, 0, 128, 0, 0);
	// quads.SetPatternAlternatingRows(20, 20, 20, 120, 120, 120);
	// quads.SetPatternAlternatingColumns(20, 20, 20, 120, 120, 120);
}
