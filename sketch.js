var quads;
var rows = 12;
var columns = 6;
var quadHeight = 50;
var quadWidth = 25;

function setup() {
	
	background(128);
	createCanvas(1000, 1000);
	
	//translate(-(quadWidth*2), 0);
	
	quads = new QuadArray(rows, columns, quadHeight, quadWidth);
	quads.SetArray();
	
}

function draw() {
	quads.DrawArray();
	quads.SetArraySingleColor(128, 64, 64);
	quads.SetArrayABPattern(128, 0, 0);
}





