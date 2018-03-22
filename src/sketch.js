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
	var color;
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
		
		color = hex.substring(1).split('');
		
		if(color.length== 3){
			color = [color[0], color[0], color[1], color[1], color[2], color[2]];
		}
		
		color = '0x'+color.join('');
	
		return {r: (color>>16) & 255, 
				g: (color>>8) & 255, 
				b: color & 255
				};
	}
	throw new Error('Bad Hex');
}