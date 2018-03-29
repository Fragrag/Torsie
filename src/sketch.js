/*
Sketch

will be the staging area of the different classes. Aside setting up the canvas 
and several global variables, the sketch will not have any further functionality. 
*/

/*//////////////////////////////////
GLOBAL VARIABLES
//////////////////////////////////*/

// GLOBAL TORSIE CANVAS SETTINGS
let rows = 63;
let columns = 63;
let quadHeight = 15;
let quadWidth = 15;
let canvasHeight = 240
let canvasWidth = 240;
let canvasColor = 78;

let canvasCentralPosX = ($(window).width()/2) - (canvasWidth/2);
let canvasLeftPosX = ($(window).width()/2) - (canvasWidth*2);
let canvasRightPosX = ($(window).width()/2) + (canvasWidth);

let canvasCentralPosY = ($(window).height()/2) - (canvasHeight/2);
let canvasTopPosY = ($(window).height()/2) - (canvasHeight*1.25);
let canvasBottomPosY = ($(window).height()/2) + (canvasHeight/4);

// GLOBAL COLOUR SETTINGS
let QAC;

let colors = {
	color0: [ 25, 65, 56 ],
	color1: [ 76, 24, 95 ],
	color2: [ 54, 65, 98 ],
	color3: [ 23, 54, 27 ],
	color4: [ 54, 23, 76 ],
	color5: [ 87, 50, 76 ],
};

let gui;
let c0controller, c1controller, c2controller, c3controller, c4controller, c5controller;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(canvasColor);
	
	gui = new dat.GUI();
	c0controller = gui.addColor(colors, 'color0');
	c1controller = gui.addColor(colors, 'color1');
	c2controller = gui.addColor(colors, 'color2');
	c3controller = gui.addColor(colors, 'color3');
	c4controller = gui.addColor(colors, 'color4');
	c5controller = gui.addColor(colors, 'color5');
}

function draw() {

}

// This function sets up and returns a new Canvas object for a TorsieArray
function TorsieInstance(InstanceName, CanvasPosX, CanvasPosY) {
	
	let CanvasSetup = function(sketch) {
		
		sketch.setup = function() {
			var cnv = sketch.createCanvas(canvasWidth, canvasHeight);
			cnv.position(CanvasPosX, CanvasPosY);
			
			sketch.translate(-quadWidth*4, 0);
			
			sketch.background(canvasColor);
			sketch.quads = new QuadArray(rows, columns, quadHeight, quadWidth, sketch);
			sketch.quads.SetupQuadArray();
			sketch.quads.DrawQuadArray();
			
			c0controller.onFinishChange(function() {sketch.translate(-quadWidth*4, 0); sketch.SetPattern(); sketch.quads.DrawQuadArray(); });
			c1controller.onFinishChange(function() {sketch.translate(-quadWidth*4, 0); sketch.SetPattern(); sketch.quads.DrawQuadArray(); });
			c2controller.onFinishChange(function() {sketch.translate(-quadWidth*4, 0); sketch.SetPattern(); sketch.quads.DrawQuadArray(); });
			c3controller.onFinishChange(function() {sketch.translate(-quadWidth*4, 0); sketch.SetPattern(); sketch.quads.DrawQuadArray(); });
			c4controller.onFinishChange(function() {sketch.translate(-quadWidth*4, 0); sketch.SetPattern(); sketch.quads.DrawQuadArray(); });
			c5controller.onFinishChange(function() {sketch.translate(-quadWidth*4, 0); sketch.SetPattern(); sketch.quads.DrawQuadArray(); });
		}

		sketch.draw = function() {
		}
		
		sketch.SetPattern = function() {
			if (InstanceName == "PatternAB") {
				return sketch.quads.SetPatternAB(colors.color0[0], colors.color0[1], colors.color0[2],
											     colors.color1[0], colors.color1[1], colors.color1[2]);
			}
			else if (InstanceName == "PatternABBC") {
				return sketch.quads.SetPatternABBC(colors.color0[0], colors.color0[1], colors.color0[2],
											       colors.color1[0], colors.color1[1], colors.color1[2],
												   colors.color2[0], colors.color2[1], colors.color2[2]);
			}
			else if (InstanceName == "PatternADBC") {
				return sketch.quads.SetPatternADBC(colors.color0[0], colors.color0[1], colors.color0[2],
												   colors.color1[0], colors.color1[1], colors.color1[2],
												   colors.color2[0], colors.color2[1], colors.color2[2],
												   colors.color3[0], colors.color3[1], colors.color3[2]);
				
			}
			else if (InstanceName == "PatternCAB") {
				return sketch.quads.SetPatternCAB(colors.color0[0], colors.color0[1], colors.color0[2],
												  colors.color1[0], colors.color1[1], colors.color1[2],
												  colors.color2[0], colors.color2[1], colors.color2[2]);
			}
			else if (InstanceName == "PatternCABDAB") {
				return sketch.quads.SetPatternCABDAB(colors.color0[0], colors.color0[1], colors.color0[2],
													 colors.color1[0], colors.color1[1], colors.color1[2],
													 colors.color2[0], colors.color2[1], colors.color2[2],
													 colors.color3[0], colors.color3[1], colors.color3[2]);
			}
			else if (InstanceName == "PatternCABDEB") {
				return sketch.quads.SetPatternCABDEB(colors.color0[0], colors.color0[1], colors.color0[2],
													 colors.color1[0], colors.color1[1], colors.color1[2],
													 colors.color2[0], colors.color2[1], colors.color2[2],
													 colors.color3[0], colors.color3[1], colors.color3[2],
													 colors.color4[0], colors.color4[1], colors.color4[2]);
			}
			else if (InstanceName == "PatternCABDEF") {
				return sketch.quads.SetPatternCABDEF(colors.color0[0], colors.color0[1], colors.color0[2],
													 colors.color1[0], colors.color1[1], colors.color1[2],
													 colors.color2[0], colors.color2[1], colors.color2[2],
													 colors.color3[0], colors.color3[1], colors.color3[2],
													 colors.color4[0], colors.color4[1], colors.color4[2],
													 colors.color5[0], colors.color5[1], colors.color5[2]);
			}
		}
	}
	
	return new p5(CanvasSetup, InstanceName);
}

/*//////////////////////////////////
SPAWNING INSTANCES
//////////////////////////////////*/

// Central column
let CanvasInstanceAB = TorsieInstance("PatternAB", 25, canvasCentralPosY);


// Left column
let CanvasInstanceABBC = TorsieInstance("PatternABBC", (canvasWidth+100), canvasTopPosY);

let CanvasInstanceADBC = TorsieInstance("PatternADBC", (canvasWidth*2+150), canvasTopPosY);

// Right column
let CanvasInstanceCAB = TorsieInstance("PatternCAB", (canvasWidth+100), canvasBottomPosY);

let CanvasInstanceCABDAB = TorsieInstance("PatternCABDAB", (canvasWidth*2+150), canvasBottomPosY);

let CanvasInstanceCABDEB = TorsieInstance("PatternCABDEB",(canvasWidth*3+200), canvasBottomPosY);

let CanvasInstanceCABDEF = TorsieInstance("PatternCABDEF", (canvasWidth*4+250), canvasBottomPosY);