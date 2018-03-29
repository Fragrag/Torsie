/*
Sketch

will be the staging area of the different classes. Aside setting up the canvas 
and several global variables, the sketch will not have any further functionality. 
*/

// GLOBAL VARIABLES
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

// GLOBAL COLOUR SETTINGS
let QAC;
let color1;
let color2;
let color3;
let color4;
let color5;
let color6;

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
	QAC = new QuadArrayController(null, 600);
	createCanvas(windowWidth, windowHeight);
	background(canvasColor);
	
}

function draw() {
	//translate(-quadWidth*4, 0);
	
	color1 = QAC.GetRGB(QAC.Color1.value());
	color2 = QAC.GetRGB(QAC.Color2.value());
	color3 = QAC.GetRGB(QAC.Color3.value());
	color4 = QAC.GetRGB(QAC.Color4.value());
	color5 = QAC.GetRGB(QAC.Color5.value());
	color6 = QAC.GetRGB(QAC.Color6.value());
}



// Central column
let CanvasInstanceAB = TorsieInstance("PatternAB", canvasCentralPosX, 25, 
									function(){CanvasInstanceAB.quads.SetPatternAB(color1.r, color1.g, color1.b,
																				  color2.r, color2.g, color2.b)});


// Left column
let CanvasInstanceABBC = TorsieInstance("PatternABBC", canvasLeftPosX, (canvasHeight+100), 
									function(){CanvasInstanceABBC.quads.SetPatternABBC(color1.r, color1.g, color1.b,
																					color2.r, color2.g, color2.b,
																					color3.r, color3.g, color3.b)});

let CanvasInstanceADBC = TorsieInstance("PatternADBC", canvasLeftPosX, (canvasHeight*2+150), 
									function(){CanvasInstanceADBC.quads.SetPatternADBC(color1.r, color1.g, color1.b,
																					color2.r, color2.g, color2.b,
																					color3.r, color3.g, color3.b,
																					color4.r, color4.g, color4.b)});

// Right column
let CanvasInstanceCAB = TorsieInstance("PatternCAB", canvasRightPosX, (canvasHeight+100), 
									function(){CanvasInstanceCAB.quads.SetPatternCAB(color1.r, color1.g, color1.b,
																					color2.r, color2.g, color2.b,
																					color3.r, color3.g, color3.b)});

let CanvasInstanceCABDAB = TorsieInstance("PatternCABDAB", canvasRightPosX, (canvasHeight*2+150), 
									function(){CanvasInstanceCABDAB.quads.SetPatternCAB(color1.r, color1.g, color1.b,
																						color2.r, color2.g, color2.b,
																						color3.r, color3.g, color3.b,
																						color4.r, color4.g, color4.b)});

let CanvasInstanceCABDEB = TorsieInstance("PatternCABDEB", canvasRightPosX, (canvasHeight*3+200), 
									function(){CanvasInstanceCABDEB.quads.SetPatternCABDEB(color1.r, color1.g, color1.b,
																						   color2.r, color2.g, color2.b,
																						   color3.r, color3.g, color3.b,
																						   color4.r, color4.g, color4.b,
																						   color5.r, color5.g, color5.b)});

let CanvasInstanceCABDEF = TorsieInstance("PatternCABDEB", canvasRightPosX, (canvasHeight*4+250), 
									function(){CanvasInstanceCABDEF.quads.SetPatternCABDEF(color1.r, color1.g, color1.b,
																						   color2.r, color2.g, color2.b,
																						   color3.r, color3.g, color3.b,
																						   color4.r, color4.g, color4.b,
																						   color5.r, color5.g, color5.b,
																						   color6.r, color6.g, color6.b)});