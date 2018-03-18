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
	
	// quads.SetPatternAB(220, 220, 220, 120, 120, 120);
	// quads.SetPatternABBC(220, 220, 220, 120, 120, 120, 60, 60, 60);
	quads.SetPatternADBC(220, 220, 220, 120, 120, 120, 60, 60, 60, 20, 20, 20);
	// quads.SetSingleColor(128, 64, 64);
	// quads.SetPatternAlternatingRows(20, 20, 20, 120, 120, 120);
	// quads.SetPatternAlternatingColumns(20, 20, 20, 120, 120, 120);
}
