/*
Sketch

will be the staging area of the different classes. Aside setting up the canvas 
and several global variables, the sketch will not have any further functionality. 
*/

/*//////////////////////////////////
GLOBAL VARIABLES
//////////////////////////////////*/

// GLOBAL QUADARRAY SETTINGS
let rows = 13;
let columns = 13;
let quadHeight = 30;
let quadWidth = 30;

// GLOBAL TORSIE CANVAS SETTINGS
let canvasHeight = 240;
let canvasWidth = 240;
let canvasColor = 255;

let rowXOffset = 5;
let sketchXOffset = 60;
let sketchYOffset = 66;

// let canvasCentralPosX = ($(window).width()/2) - (canvasWidth/2);
// let canvasLeftPosX = ($(window).width()/2) - (canvasWidth*2);
// let canvasRightPosX = ($(window).width()/2) + (canvasWidth);

// let canvasCentralPosY = ($(window).height()/2) - (canvasHeight/2) + sketchYOffset;
// let canvasTopPosY = ($(window).height()/2) - (canvasHeight*1.25) + sketchYOffset;
// let canvasBottomPosY = ($(window).height()/2) + (canvasHeight/4) + sketchYOffset;

// GLOBAL COLOUR SETTINGS
let QAC;
let colors = {
	color0: [ 247, 190, 78 ],
	color1: [ 214, 149, 68 ],
	color2: [ 237, 148, 87 ],
	color3: [ 214, 106, 68 ],
	color4: [ 247, 98, 78 ],
	color5: [ 247, 97, 134 ],
};


// This function sets up and returns a new Canvas object for a TorsieArray
function TorsieInstance(InstanceName, CanvasPosX, CanvasPosY, CanvasPattern, SketchStroke) {
	
	let CanvasSetup = function(sketch) {
		
		let color1 = 0;
		
		sketch.setup = function() {
			var cnv = sketch.createCanvas(canvasWidth, canvasHeight);
			cnv.position(CanvasPosX, CanvasPosY);
			
			sketch.background(canvasColor);
			sketch.quads = new QuadArray(rows, columns, quadHeight, quadWidth, sketch);
			sketch.quads.SetupQuadArray();
			sketch.quads.DrawQuadArray();
		}

		sketch.draw = function() {
			
			sketch.translate(-quadWidth*4, 0);
			sketch.quads.DrawQuadArray();
			CanvasPattern();
		}
		
	}
	
	return new p5(CanvasSetup, InstanceName);
}


// Set up global sketch instance
function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(canvasColor);
	
	var gui = new dat.GUI({ autoplace: false });
	gui.domElement.id = 'gui';
	
	gui.addColor(colors, 'color0');
	gui.addColor(colors, 'color1');
	gui.addColor(colors, 'color2');
	gui.addColor(colors, 'color3');
	gui.addColor(colors, 'color4');
	gui.addColor(colors, 'color5');
	
	// Draw lines between sketch instances
	strokeWeight(3.33);
	color(255,255,255);
	line(sketchCentralPos(0,1)[0], sketchCentralPos(0,1)[1],
		sketchCentralPos(0,0)[0], sketchCentralPos(0,0)[1]);
	line(sketchCentralPos(0,0)[0], sketchCentralPos(0,0)[1],
		sketchCentralPos(1,0)[0], sketchCentralPos(1,0)[1]);
		
	line(sketchCentralPos(1,0)[0], sketchCentralPos(1,0)[1],
		sketchCentralPos(2,0)[0], sketchCentralPos(2,0)[1]);
		
	line(sketchCentralPos(0,1)[0], sketchCentralPos(0,1)[1],
		sketchCentralPos(0,2)[0], sketchCentralPos(0,2)[1]);
	line(sketchCentralPos(0,2)[0], sketchCentralPos(0,2)[1],
		sketchCentralPos(1,2)[0], sketchCentralPos(1,2)[1]);
		
	line(sketchCentralPos(1,2)[0], sketchCentralPos(1,2)[1],
		sketchCentralPos(2,2)[0], sketchCentralPos(2,2)[1]);

	line(sketchCentralPos(2,2)[0], sketchCentralPos(2,2)[1],
		sketchCentralPos(3,2)[0], sketchCentralPos(3,2)[1]);
		
	line(sketchCentralPos(3,2)[0], sketchCentralPos(3,2)[1],
		sketchCentralPos(4,2)[0], sketchCentralPos(4,2)[1]);
}

function draw() {
	// console.log(frameRate())

}

/*//////////////////////////////////
SKETCH INSTANCES
//////////////////////////////////*/
// Canvas instance parameters
function SketchXPos(col) {
	let XPos = sketchXOffset + (canvasWidth*col) + (sketchXOffset*col);
	return XPos;
}

function SketchYPos(row) {
	let YPos = sketchYOffset + ((canvasHeight/1.5)*row) + (sketchYOffset*row);
	return YPos;
}

function sketchCentralPos(col, row) {
	let XPos;
	let YPos;
	
	XPos = SketchXPos(col) + (canvasWidth/2);
	YPos = SketchYPos(row) + (canvasHeight/2);
	
	return [XPos, YPos];
}

// Spawning instances
// Central column
let CanvasInstanceAB = TorsieInstance("PatternAB", SketchXPos(0), SketchYPos(1), 
									function(){CanvasInstanceAB.quads.SetPatternAB(colors.color0[0], colors.color0[1], colors.color0[2],
																				   colors.color1[0], colors.color1[1], colors.color1[2])});


// Left column
let CanvasInstanceABBC = TorsieInstance("PatternABBC", SketchXPos(1), SketchYPos(0),  
									function(){CanvasInstanceABBC.quads.SetPatternABBC(colors.color0[0], colors.color0[1], colors.color0[2],
																					   colors.color1[0], colors.color1[1], colors.color1[2],
																					   colors.color2[0], colors.color2[1], colors.color2[2])});

let CanvasInstanceADBC = TorsieInstance("PatternADBC", SketchXPos(2), SketchYPos(0),  
									function(){CanvasInstanceADBC.quads.SetPatternADBC(colors.color0[0], colors.color0[1], colors.color0[2],
																					 colors.color1[0], colors.color1[1], colors.color1[2],
																					 colors.color2[0], colors.color2[1], colors.color2[2],
																					 colors.color3[0], colors.color3[1], colors.color3[2])});

// Right column
let CanvasInstanceCAB = TorsieInstance("PatternCAB", SketchXPos(1), SketchYPos(2),  
									function(){CanvasInstanceCAB.quads.SetPatternCAB(colors.color0[0], colors.color0[1], colors.color0[2],
																					 colors.color1[0], colors.color1[1], colors.color1[2],
																					 colors.color2[0], colors.color2[1], colors.color2[2])});

let CanvasInstanceCABDAB = TorsieInstance("PatternCABDAB", SketchXPos(2), SketchYPos(2),
									function(){CanvasInstanceCABDAB.quads.SetPatternCABDAB(colors.color0[0], colors.color0[1], colors.color0[2],
																						   colors.color1[0], colors.color1[1], colors.color1[2],
																						   colors.color2[0], colors.color2[1], colors.color2[2],
																						   colors.color3[0], colors.color3[1], colors.color3[2])});

let CanvasInstanceCABDEB = TorsieInstance("PatternCABDEB",SketchXPos(3), SketchYPos(2), 
									function(){CanvasInstanceCABDEB.quads.SetPatternCABDEB(colors.color0[0], colors.color0[1], colors.color0[2],
																						   colors.color1[0], colors.color1[1], colors.color1[2],
																						   colors.color2[0], colors.color2[1], colors.color2[2],
																						   colors.color3[0], colors.color3[1], colors.color3[2],
																						   colors.color4[0], colors.color4[1], colors.color4[2])});

let CanvasInstanceCABDEF = TorsieInstance("PatternCABDEB", SketchXPos(4), SketchYPos(2), 
									function(){CanvasInstanceCABDEF.quads.SetPatternCABDEF(colors.color0[0], colors.color0[1], colors.color0[2],
																						   colors.color1[0], colors.color1[1], colors.color1[2],
																						   colors.color2[0], colors.color2[1], colors.color2[2],
																						   colors.color3[0], colors.color3[1], colors.color3[2],
																						   colors.color4[0], colors.color4[1], colors.color4[2],
																						   colors.color5[0], colors.color5[1], colors.color5[2])});