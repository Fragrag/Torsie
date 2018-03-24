/*

*/
var quads;
var rows = 63;
var columns = 63;
var quadHeight = 40;
var quadWidth = 40;
var canvasHeight = 720;
var canvasWidth = 720;

function setup() {
	background(128);
	createCanvas(canvasWidth, canvasHeight);
	
	quads = new QuadArray(rows, columns, quadHeight, quadWidth);
	quads.SetupQuadArray();
	
	QAC = new QuadArrayController(quads);
}

function draw() {
	translate(-quadWidth, 0);
	QAC.SetArrayPattern(QAC.AmountOfColors.value());
	QAC.SetQuadTorsionType(QAC.TorsionType.value());
}

