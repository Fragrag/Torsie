var quadArray = [];
var rows = 12;
var columns = 12;
var quadHeight = 50;
var quadWidth = 25;

function setup() {
	
	background(128);
	createCanvas(1000, 1000);
	
	//translate(-(quadWidth*2), 0);
	
	FillQuadArray(rows, columns, quadHeight, quadWidth, quadArray);

	DrawQuadArray(quadArray);
	
}

function draw() {

	ColorABQuadArray(quadArray);
}

// Fill an initiated array with QuadElements 
function FillQuadArray(_rows, _columns, _quadHeight, _quadWidth, _arrayVariable) {
	
	for (var i = 0; i <=_rows; i++) {
		_arrayVariable.push([0]);
		for (var j = 0; j <=_columns; j++) {
			_arrayVariable[i][j] = new QuadElement(_quadHeight, _quadWidth, i, j);	
		}
	}
	
}

// Iterate through each element in QuadArray and call DrawQuad function
function DrawQuadArray(_arrayVariable) {
	
	for(var i = 0; i < _arrayVariable.length; i++){
		for (var j = 0; j < _arrayVariable[i].length - 1; j++){
			_arrayVariable[i][j].DrawQuad();
		}
	}
	
}

function ColorABQuadArray(_arrayVariable) {
	
	for(var i = 0; i < _arrayVariable.length; i++){
		for (var j = 0; j < _arrayVariable[i].length; j++) {
			_arrayVariable[i][j].SetQuadColor(128, 64, 64);
			_arrayVariable[i][j].DrawQuad();
		}
	}
	
}




