/*
Sketch

will be the staging area of the different classes. Aside setting up the canvas 
and several global variables, the sketch will not have any further functionality. 
*/

// Setting up global variables
let quads;
let rows = 63;
let columns = 63;
let quadHeight = 40;
let quadWidth = 40;
let canvasHeight = 240;
let canvasWidth = 240;
let canvasColor = 200;

let CanvasSetup = function(sketch) {
	
	sketch.setup = function() {
		sketch.createCanvas(canvasWidth, canvasHeight);
		
		sketch.quads = new QuadArray(rows, columns, quadHeight, quadWidth, sketch);
		sketch.quads.SetupQuadArray();
	}

	sketch.draw = function() {
		sketch.translate(-quadWidth*4, 0);
		sketch.background(canvasColor);
		sketch.quads.DrawQuadArray();
		// sketch.quads.SetPatternAB(128, 128, 128, 172, 172, 172);
	}
}

let CanvasInstance = new p5(CanvasSetup);
let CanvasInstance2 = new p5(CanvasSetup);

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	
	quads = new QuadArray(rows, columns, quadHeight, quadWidth, null);
	quads.SetupQuadArray();
}

function draw() {
	translate(-quadWidth*4, 0);
	background(canvasColor);
}
