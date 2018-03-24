/*

*/
let quads;
let rows = 63;
let columns = 63;
let quadHeight = 40;
let quadWidth = 40;
let canvasHeight = 720;
let canvasWidth = 720;

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

