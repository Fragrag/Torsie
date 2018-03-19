/*

*/

var quads;
var rows = 18;
var columns = 24;
var quadHeight = 40;
var quadWidth = 40

function setup() {
	
	background(128);
	createCanvas(750, 750);
	
	quads = new QuadArray(rows, columns, quadHeight, quadWidth);
	quads.SetupQuadArray();
	
}

function draw() {
	translate(-quadWidth, 0);
	quads.DrawArray();
	
	// quads.SetPatternAB(220, 220, 220, 120, 120, 120);
	// quads.SetPatternABBC(250, 250, 250, 150, 90, 90, 30, 120, 120);
	quads.SetPatternCABDEF(	250, 250, 250, 
							150, 90, 90, 
							30, 120, 120,
							60, 90, 150,
							20, 20, 150,
							180, 60, 20);
	// quads.SetPatternADBC(220, 220, 220, 120, 120, 120, 60, 60, 60, 20, 20, 20);
	// quads.SetSingleColor(128, 64, 64);
	// quads.SetPatternAlternatingRows(20, 20, 20, 120, 120, 120);
	// quads.SetPatternAlternatingColumns(20, 20, 20, 120, 120, 120);
}
