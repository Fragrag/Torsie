var quadArray = [];
var rows = 10;
var columns = 12;

function setup() {
	var quadHeight = 50;
	var quadWidth = 25;
	
	background(128);
	createCanvas(500, 500);
	translate(-(quadWidth/2), 0);
	
	FillQuadArray(rows, columns, quadHeight, quadWidth, quadArray);
	// ColorABQuadArray(quadArray);
	DrawQuadArray(quadArray);	
	
}

// Fill an initiated array with QuadElements 
function FillQuadArray(_rows, _columns, _quadHeight, _quadWidth, _arrayVariable) {
	
	for (var i = 0; i < _rows; i++) {
		_arrayVariable.push([0]);
		for (var j = 0; j < _columns; j++) {
			_arrayVariable[i][j] = new QuadElement(_quadHeight, _quadWidth, i, j);	
		}
	}
	
}

// Iterate through each element in QuadArray and call DrawQuad function
function DrawQuadArray(_arrayVariable) {
	
	for(var i = 0; i < _arrayVariable.length; i++){
		for (var j = 0; j < _arrayVariable[i].length; j++){
			_arrayVariable[i][j].DrawQuad();
		}
	}
	
}

function ColorABQuadArray(_arrayVariable) {
	
	for(var i = 0; i < _arrayVariable.length; i++){
		for (var j = 0+i; j < _arrayVariable[i].length; j+2) {
			_arrayVariable[i][j].SetColor(128, 64, 64);
		}
	}
	
}

// function draw() {
	
	
// }


