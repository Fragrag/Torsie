class QuadArray {
	
	constructor(_rows, _columns, _quadHeight, _quadWidth) {
		this.rows = _rows;
		this.columns = _columns;
		this.quadHeight = _quadHeight;
		this.quadWidth = _quadWidth;
		this.Array = [];
	}
	
	/*
	ARRAY SETUP FUNCTIONS
	*/
	
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
	
	/*
	GENERAL ARRAY COLOUR FUNCTIONS
	*/
	
	// Iterate through this.Array and call SetQuadColor function from QuadElement
	SetArrayColor(r, g, b) {
		for (var row = 0; row < this.Array.length; row++) {
			for (var col = 0; col < this.Array[row].length; col++) {
				
				this.Array[row][col].SetQuadColor(r, g, b);
				
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
	
	/*
	SET ARRAY PATTERN FUNCTIONS
	*/
	
	// Set Array to display ABPattern
	SetABPattern(rA, gA, bA, rB, gB, bB) {
		this.SetArrayColor(rA, gA, bA);
		
		for (var row = 0; row < this.Array.length; row++) {
			for (var col = 0; col < this.Array[row].length; col++) {
				
				if ((row - col) % 2 == 0)
					this.Array[row][col].SetQuadColor(rB, gB, bB);
				
			}
		}
	}
	
	// TODO: Create function SetABBCPattern(rA, gA, bA, rB, gB, bB, rC, gC, bC)
	
	// TODO: Create function SetADBCPattern(rA, gA, bA, rB, gB, bB, rC, gC, bC, rD, gD, bD)
	
	// TODO: Create function SetCABPattern(rA, gA, bA, rB, gB, bB, rC, gC, bC)
	
	// TODO: Create function SetCABDABPattern(rA, gA, bA, rB, gB, bB, rC, gC, bC, rD, gD, bD)
	
	// TODO: Create function SetCABDEBPattern(rA, gA, bA, rB, gB, bB, rC, gC, bC, rD, gD, bD, rE, gE, bE)
	
	// TODO: Create function SetCABDEFPattern(rA, gA, bA, rB, gB, bB, rC, gC, bC, rD, gD, bD, rE, gE, bE, rF, gF, bF)
	
	// Set Array to display Alternating Pattern
	SetAlternateRowPattern(rA, gA, bA, rB, gB, bB) {
		this.SetArrayColor(rA, gA, bA);
		
		for (var row = 0; row < this.Array.length; row++) {
			
			if (row % 2 == 0){ 
				this.SetRowColor(row, rB, gB, bB);
				
			}
		}
	}
}
