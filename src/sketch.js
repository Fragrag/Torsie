/*

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
	
	QAC = new QuadArrayController(quads);
}

function draw() {
	translate(-quadWidth, 0);
	quads.DrawArray();
	
	QAC.SetArrayPattern(QAC.AmountOfColors.value());
}

// HexToRgbA converter from https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
// returns {r: , g: , b: }
function HexToRGB(hex) {
	var c;
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
		
		c= hex.substring(1).split('');
		
		if(c.length== 3){
			c= [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		
		c= '0x'+c.join('');
	
		return {r: (c>>16)&255, 
				g: (c>>8)&255, 
				b: c&255
				};
	}
	throw new Error('Bad Hex');
}