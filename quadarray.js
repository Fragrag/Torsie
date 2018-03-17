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
		for (var row = 0; row < this.rows; row++) {
			this.Array[row] = [];
			for (var col = 0; col < this.columns; col++) {
				this.Array[row][col] = new QuadElement(this.quadHeight, this.quadWidth, col, row);	
			}
		}	
	}
	
	// TODO Create IterateArray() function that will take as arguments a function and iteration rules
	
	// Iterate through this.Array and call DrawQuad function from QuadElement
	DrawArray() {
		for (var row = 0; row < this.Array.length; row++) {
			for (var col = 0; col < this.Array[row].length; col++) {
				
				this.Array[row][col].DrawQuad();
				
			}
		}
	}
	// Iterate through this.Array and call SetQuadColor function from QuadElement
	SetArraySingleColor(r, g, b) {
		for (var row = 0; row < this.Array.length; row++) {
			for (var col = 0; col < this.Array[row].length; col++) {
				
				this.Array[row][col].SetQuadColor(r, g, b);
				
			}
		}	
	}
	
	// Set Array to display ABPattern
	SetArrayABPattern(r, g, b) {
		for (var row = 0; row < this.Array.length; row++) {
			for (var col = 0; col < this.Array[row].length; col++) {
				
				if ((row - col) % 2 == 0)
					this.Array[row][col].SetQuadColor(r, g, b);
				
			}
		}
	}
	
	// Set Array to display Alternating Pattern
	SetArrayAlternatePattern(r1, g1, b1, r2, g2, b2) {
		this.SetArraySingleColor(r1, g1, b1);
		
		for (var row = 0; row < this.Array.length; row++) {
			
			if (row % 2 == 0){ 
				this.SetRowColor(row, r2, g2, b2);
				
			}
		}
	}
	
	// Set indicated row of Array to color
	SetRowColor(row, r, g, b) {
		for (var col = 0; col < this.Array[row].length; col++) {
			
			this.Array[row][col].SetQuadColor(r, g, b);
			
		}
	}
	
	// Set indicated column of Array to color
	SetColumnColor(colummn, r, g, b) {
		for (var row = 0; row < this.Array.length; row++) {
			
				this.Array[row][colummn].SetQuadColor(r, g, b);
				
		}
	}
	
}