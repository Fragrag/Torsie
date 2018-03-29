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
let canvasColor = 255;

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


// This function sets up and returns a new Canvas object for a TorsieArray
function TorsieInstance(InstanceName, CanvasPosX, CanvasPosY, CanvasPattern) {
	
	let CanvasSetup = function(sketch) {
		
		let color1 = 0;
		
		sketch.setup = function() {
			var cnv = sketch.createCanvas(canvasWidth, canvasHeight);
			cnv.position(CanvasPosX, CanvasPosY);
			
			sketch.background(canvasColor);
			sketch.quads = new QuadArray(rows, columns, quadHeight, quadWidth, sketch);
			sketch.quads.SetupQuadArray();
		}

		sketch.draw = function() {
			
			sketch.translate(-quadWidth*4, 0);
			sketch.quads.DrawQuadArray();
			CanvasPattern();
		}
	}
	
	return new p5(CanvasSetup, InstanceName);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(canvasColor);
	
	var gui = new dat.GUI();
	
	gui.addColor(colors, 'color0');
	gui.addColor(colors, 'color1');
	gui.addColor(colors, 'color2');
	gui.addColor(colors, 'color3');
	gui.addColor(colors, 'color4');
	gui.addColor(colors, 'color5');
}

function draw() {

}

/*//////////////////////////////////
SPAWNING INSTANCES
//////////////////////////////////*/

// Central column
let CanvasInstanceAB = TorsieInstance("PatternAB", 25, canvasCentralPosY, 
									function(){CanvasInstanceAB.quads.SetPatternAB(colors.color0[0], colors.color0[1], colors.color0[2],
																				  colors.color1[0], colors.color1[1], colors.color1[2])});


// Left column
let CanvasInstanceABBC = TorsieInstance("PatternABBC", (canvasWidth+100), canvasTopPosY,  
									function(){CanvasInstanceABBC.quads.SetPatternABBC(colors.color0[0], colors.color0[1], colors.color0[2],
																					colors.color1[0], colors.color1[1], colors.color1[2],
																					colors.color2[0], colors.color2[1], colors.color2[2])});

let CanvasInstanceADBC = TorsieInstance("PatternADBC", (canvasWidth*2+150), canvasTopPosY,  
									function(){CanvasInstanceADBC.quads.SetPatternADBC(colors.color0[0], colors.color0[1], colors.color0[2],
																					colors.color1[0], colors.color1[1], colors.color1[2],
																					colors.color2[0], colors.color2[1], colors.color2[2],
																					colors.color3[0], colors.color3[1], colors.color3[2])});

// Right column
let CanvasInstanceCAB = TorsieInstance("PatternCAB", (canvasWidth+100), canvasBottomPosY,  
									function(){CanvasInstanceCAB.quads.SetPatternCAB(colors.color0[0], colors.color0[1], colors.color0[2],
																					colors.color1[0], colors.color1[1], colors.color1[2],
																					colors.color2[0], colors.color2[1], colors.color2[2])});

let CanvasInstanceCABDAB = TorsieInstance("PatternCABDAB", (canvasWidth*2+150), canvasBottomPosY,
									function(){CanvasInstanceCABDAB.quads.SetPatternCAB(colors.color0[0], colors.color0[1], colors.color0[2],
																						colors.color1[0], colors.color1[1], colors.color1[2],
																						colors.color2[0], colors.color2[1], colors.color2[2],
																						colors.color3[0], colors.color3[1], colors.color3[2])});

let CanvasInstanceCABDEB = TorsieInstance("PatternCABDEB",(canvasWidth*3+200), canvasBottomPosY, 
									function(){CanvasInstanceCABDEB.quads.SetPatternCABDEB(colors.color0[0], colors.color0[1], colors.color0[2],
																						   colors.color1[0], colors.color1[1], colors.color1[2],
																						   colors.color2[0], colors.color2[1], colors.color2[2],
																						   colors.color3[0], colors.color3[1], colors.color3[2],
																						   colors.color4[0], colors.color4[1], colors.color4[2])});

let CanvasInstanceCABDEF = TorsieInstance("PatternCABDEB", (canvasWidth*4+250), canvasBottomPosY, 
									function(){CanvasInstanceCABDEF.quads.SetPatternCABDEF(colors.color0[0], colors.color0[1], colors.color0[2],
																						   colors.color1[0], colors.color1[1], colors.color1[2],
																						   colors.color2[0], colors.color2[1], colors.color2[2],
																						   colors.color3[0], colors.color3[1], colors.color3[2],
																						   colors.color4[0], colors.color4[1], colors.color4[2],
																						   colors.color5[0], colors.color5[1], colors.color5[2])});