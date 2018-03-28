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

function NewCanvasInstance(CanvasPosX, CanvasPosY, CanvasPattern) {
	
	let CanvasSetup = function(sketch) {
		
		sketch.setup = function() {
			let cnv = sketch.createCanvas(canvasWidth, canvasHeight);
			cnv.position(CanvasPosX, CanvasPosY);
			sketch.quads = new QuadArray(rows, columns, quadHeight, quadWidth, sketch);
			sketch.quads.SetupQuadArray();
		}

		sketch.draw = function() {
			sketch.translate(-quadWidth*4, 0);
			sketch.background(canvasColor);
			sketch.quads.DrawQuadArray();
			sketch.quads.SetPatternAB(64, 64, 64, 172, 172, 172);
		}
	}
	
	return new p5(CanvasSetup);
}


// function setup() {
	// createCanvas(canvasWidth, canvasHeight);
	
	// quads = new QuadArray(rows, columns, quadHeight, quadWidth, null);
	// quads.SetupQuadArray();
// }

// function draw() {
	// translate(-quadWidth*4, 0);
	// background(canvasColor);
// }


let CanvasInstance = NewCanvasInstance(0, 0);
let CanvasInstance2 = NewCanvasInstance(300, 300);