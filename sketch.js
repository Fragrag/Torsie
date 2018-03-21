/*

*/

/* Pseudocoding and structuring the second attempt at interactivity.

With the slider the user gets to choose how many active colors
At the moment, six colors can be chosen by the user using a slider

Depending on the amount of active colors, we choose a pattern to display
The colors are chosen by the sliders
*/

var quads;
var rows = 18;
var columns = 24;
var quadHeight = 40;
var quadWidth = 40;
var canvasHeight = 720
var canvasWidth = 720

function setup() {
	background(128);
	createCanvas(canvasWidth, canvasHeight);
	
	quads = new QuadArray(rows, columns, quadHeight, quadWidth);
	quads.SetupQuadArray();
	
	// Create sliders
	
	ActiveColorSlider = createSlider(0, 5, 6);
	ActiveColorSlider.position(canvasWidth + 20, 20);
	
	color1RSlider = createSlider(0, 255, 100);
	color1RSlider.position(canvasWidth + 20, 50);
	color1GSlider = createSlider(0, 255, 100);
	color1GSlider.position(canvasWidth + 20, 80);
	color1BSlider = createSlider(0, 255, 100);
	color1BSlider.position(canvasWidth + 20, 110);
	
	
}

function draw() {
	translate(-quadWidth, 0);
	quads.DrawArray();
	
	var r1 = color1RSlider.value();
	var g1 = color1GSlider.value();
	var b1 = color1BSlider.value();
	// quads.SetPatternAB(220, 220, 220, 120, 120, 120);
	// quads.SetPatternABBC(250, 250, 250, 150, 90, 90, 30, 120, 120);
	quads.SetPatternCABDEF(	r1, g1, b1,
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




