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
	
}

function draw() {
	DrawQuadArray(quadArray);
	SetQuadArrayColor(quadArray, 128, 64, 64);
}

// Fill an initiated array with QuadElements 
function FillQuadArray(rows, columns, quadHeight, quadWidth, arrayVariable) {
	for (var i = 0; i <=rows; i++) {
		arrayVariable.push([0]);
		for (var j = 0; j <=columns; j++) {
			arrayVariable[i][j] = new QuadElement(quadHeight, quadWidth, i, j);	
		}
	}
}

// Iterate through each element in QuadArray and call DrawQuad function
function DrawQuadArray(arrayVariable) {
	for(var i = 0; i < arrayVariable.length; i++){
		for (var j = 0; j < arrayVariable[i].length - 1; j++){
			arrayVariable[i][j].DrawQuad();
		}
	}
}

function SetQuadArrayColor(arrayVariable, r, g, b) {
	for(var i = 0; i < arrayVariable.length; i++){
		for (var j = 0; j < arrayVariable[i].length; j++) {
			arrayVariable[i][j].SetQuadColor(r, g, b);
		}
	}	
}




