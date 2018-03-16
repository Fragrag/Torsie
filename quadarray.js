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
		for (var i = 0; i < this.rows; i++) {
			this.Array.push([0]);
			for (var j = 0; j < this.columns; j++) {
				this.Array[i][j] = new QuadElement(this.quadHeight, this.quadWidth, i, j);	
			}
		}	
	}
	
	// Iterate through each element in this.Array and call DrawQuad function from QuadElement
	DrawArray() {
		for(var i = 0; i < this.Array.length; i++){
			for (var j = 0; j < this.Array[i].length - 1; j++){
				this.Array[i][j].DrawQuad();
			}
		}
	}
	// Iterate through each element in this.Array and call SetQuadColor function from QuadElement
	SetArrayColor(r, g, b) {
		for(var i = 0; i < this.Array.length; i++){
			for (var j = 0; j < this.Array[i].length; j++) {
				this.Array[i][j].SetQuadColor(r, g, b);
			}
		}	
	}
}