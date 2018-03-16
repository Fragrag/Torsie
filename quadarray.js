class QuadArray {
	
	constructor(_rows, _columns, _quadHeight, _quadWidth) {
		this.rows = _rows;
		this.columns = _columns;
		this.quadHeight = _quadHeight;
		this.quadWidth = _quadWidth;
		this.Array = [];
	}
	
	// Fill this.Array with new QuadElements 
	SetArray() {
		for (var i = 0; i < this.columns; i++) {
			this.Array[i] = [];
			for (var j = 0; j < this.rows; j++) {
				this.Array[i][j] = new QuadElement(this.quadHeight, this.quadWidth, i, j);	
			}
		}	
	}
	
	// TODO Create IterateArray() function that will take as arguments a function and iteration rules
	
	// Iterate through this.Array and call DrawQuad function from QuadElement
	DrawArray() {
		for (var i = 0; i < this.Array.length; i++){
			for (var j = 0; j < this.Array[i].length - 1; j++){
				this.Array[i][j].DrawQuad();
			}
		}
	}
	// Iterate through this.Array and call SetQuadColor function from QuadElement
	SetArraySingleColor(r, g, b) {
		for (var i = 0; i < this.Array.length; i++){
			for (var j = 0; j < this.Array[i].length; j++) {
				this.Array[i][j].SetQuadColor(r, g, b);
			}
		}	
	}
	
	SetArrayABPattern(r, g, b) {
		for (var i = 0; i < this.Array.length; i++){
			for (var j = 0 + i; j < this.Array[i].length; j = j + 2) {
				this.Array[i][j].SetQuadColor(r, g, b);
			}
		}
	}
}