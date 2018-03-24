/*
QuadArray

The actual 'cloth' of Torsie, it consists of a 2D array of QuadElements.
This class will adjust the colors of the QuadElements in accordance to the patterns.
*/

// TODO: Create a list of patterns
// Each pattern is denoted by a common name, amount of colors and related function

class QuadArray {
	
	constructor(_rows, _columns, _quadHeight, _quadWidth) {
		this.rows = _rows;
		this.columns = _columns;
		this.quadHeight = _quadHeight;
		this.quadWidth = _quadWidth;
		this.QuadArray = [];
		this.CoordinateArray = [];
		this.DiagonalArray = [];
	}
	
	/*//////////////////////////////////
	ARRAY SETUP FUNCTIONS
	//////////////////////////////////*/
	
	SetupQuadArray() {
		this.PopulateQuadArray();
		this.PopulateCoordinateArray();
		this.PopulateDiagonalArray();
	}
	
	// Populate this.QuadArray with new QuadElements 
	PopulateQuadArray() {
		for (let row = 0; row < this.rows; row++) {
			this.QuadArray[row] = [];
			for (let col = 0; col < this.columns; col++) {
				
				this.QuadArray[row][col] = new QuadElement(this.quadHeight, this.quadWidth, col, row, this.ArrayTorsionType);
			}
		}	
	}
	
	// Populate this.CoordinateArray with coordinates
	PopulateCoordinateArray() {
		for (let row = 0; row < this.rows; row++) {
			this.CoordinateArray[row] = [];
			for (let col = 0; col < this.columns; col++) {
				this.CoordinateArray[row][col] = [row, col];	
			}
		}	
	}
	
	// Traverses through CoordinateArray[] diagonally and populates DiagonalArray[]
	// Based on the following StackOverflow post:
	// https://stackoverflow.com/questions/2862802/traverse-2d-array-matrix-diagonally
	PopulateDiagonalArray() {
		for (let i = 1 - this.rows; i < this.columns; i++) {
			let group = [];
			for (let j = 0; j < rows; j++) {
				
				if ((i + j) >= 0 && (i + j) < columns) {
					group.push(this.CoordinateArray[j][i + j]);
				}
			}
			this.DiagonalArray.push(group);
		}
	}
	
	// Iterate through this.QuadArray and call DrawQuad function from QuadElement
	DrawQuadArray() {
		for (let row = 0; row < this.QuadArray.length; row++) {
			for (let col = 0; col < this.QuadArray[row].length; col++) {
				
				this.QuadArray[row][col].DrawQuad();
			}
		}
	}

	/*//////////////////////////////////
	GETTER FUNCTIONS
	//////////////////////////////////*/
	
	GetQuadArray() { return this.QuadArray; }
	
	GetCoordinateArray() { return this.CoordinateArray; }
	
	GetDiagonalCoordinateArray() { return this.DiagonalArray; }
	
	/*//////////////////////////////////
	GENERAL ARRAY COLOUR FUNCTIONS
	//////////////////////////////////*/
	
	// Iterate through this.QuadArray and call SetQuadColor function from QuadElement
	SetQuadArrayColor(r, g, b) {
		for (let row = 0; row < this.QuadArray.length; row++) {
			for (let col = 0; col < this.QuadArray[row].length; col++) {
				
				this.QuadArray[row][col].SetQuadColor(r, g, b);
			}
		}	
	}
	
	// Set Array to display Alternating Rows
	SetPatternAlternatingRows(rA, gA, bA, rB, gB, bB) {
		this.SetQuadArrayColor(rA, gA, bA);
		
		for (let row = 0; row < this.QuadArray.length; row++) {
			
			if (row % 2 == 0) { 
				this.SetRowColor(row, rB, gB, bB);
			}
		}
	}
	
	// Set Array to display Alternating Columns
	SetPatternAlternatingColumns(rA, gA, bA, rB, gB, bB) {
		this.SetQuadArrayColor(rA, gA, bA);
		
		for (let row = 0; row < this.QuadArray.length; row++) {
			for (let col = 0; col < this.QuadArray[row].length; col++) {
				
				if (col % 2 == 0) {
					this.SetColumnColor(col, rB, gB, bB);
				}
			}
		}
	}
	
	// Set indicated row of Array to color
	SetRowColor(row, r, g, b) {
		for (let col = 0; col < this.QuadArray[row].length; col++) {
			
			this.QuadArray[row][col].SetQuadColor(r, g, b);
		}
	}
	
	// Set indicated column of Array to color
	SetColumnColor(colummn, r, g, b) {
		for (let row = 0; row < this.QuadArray.length; row++) {
			
				this.QuadArray[row][colummn].SetQuadColor(r, g, b);
		}
	}
	
	/*//////////////////////////////////
	SET ARRAY PATTERN FUNCTIONS
	//////////////////////////////////*/
	
	// Set Array to display PatternAB
	SetPatternAB(rA, gA, bA, rB, gB, bB) {
		this.SetQuadArrayColor(rA, gA, bA);
		
		for (let row = 0; row < this.QuadArray.length; row++) {
			for (let col = 0; col < this.QuadArray[row].length; col++) {
				
				if ((row - col) % 2 == 0) {
					this.QuadArray[row][col].SetQuadColor(rB, gB, bB);
				}
			}
		}
	}
	
	// LEFT BRANCH FUNCTIONS 

	// Set Array to display PatternABBC
	SetPatternABBC(rA, gA, bA, rB, gB, bB, rC, gC, bC) {
		this.SetPatternAB(rA, gA, bA, rB, gB, bB);
		
		for (let row = 0; row < this.QuadArray.length; row++) {
			if (row % 2 != 0) {
				for (let col = 0; col < this.QuadArray[row].length; col++) {
					
					if ((row - col) % 2 == 0) {
						this.QuadArray[row][col].SetQuadColor(rC, gC, bC);
					}
				}
			}
		}
	}
	
	// Set Array to display PatternADBC
	SetPatternADBC(rA, gA, bA, rB, gB, bB, rC, gC, bC, rD, gD, bD) {
		this.SetPatternABBC(rA, gA, bA, rB, gB, bB, rC, gC, bC);
		
		for (let row = 0; row < this.QuadArray.length; row++) {
			if (row % 2 == 0) {
				for (let col = 0; col < this.QuadArray[row].length; col++) { 
				
					if ((row - col) % 2 != 0) {
						this.QuadArray[row][col].SetQuadColor(rD, gD, bD);
					}
				}				
			}
		}
	}
	
	// RIGHT BRANCH FUNCTIONS
	
	// Set Array to display a Pattern from the right branch.
	// This function serves as a template for patterns
	// from the right branch of the reference image.
	SetPatternFromRightBranch(rA, gA, bA, rB, gB, bB, rC, gC, bC, rD, gD, bD, rE, gE, bE, rF, gF, bF) {
		// Iterate through this.DiagonalArray
		for (let row = 0; row < this.DiagonalArray.length; row++) {
			for (let col = 0; col < this.DiagonalArray[row].length; col++) {
				// The contents of the array in DiagonalArray[row][col] are the coordinates.
				let x = this.DiagonalArray[row][col][0];
				let y = this.DiagonalArray[row][col][1];
				
				if (row % 3 == 0) {
					if ((row - col) % 2 == 0) {
						this.QuadArray[x][y].SetQuadColor(rA, gA, bA);
					}
					else {
						this.QuadArray[x][y].SetQuadColor(rD, gD, bD);
					}
				}
				else if (row % 3 == 1) {
					if ((row - col) % 2 == 0) {
						this.QuadArray[x][y].SetQuadColor(rB, gB, bB);
					}
					else {
						this.QuadArray[x][y].SetQuadColor(rE, gE, bE);
					}
				}
				else if (row % 3 == 2) {
					if ((row - col) % 2 == 0) {
						this.QuadArray[x][y].SetQuadColor(rC, gC, bC);
					}
					else {
						this.QuadArray[x][y].SetQuadColor(rF, gF, bF);
					}
				}
				
			}
		}
	}
	
	// Set Array to display PatternADBC
	SetPatternCAB(rA, gA, bA, rB, gB, bB, rC, gC, bC) {
		this.SetPatternFromRightBranch(	rA, gA, bA, 
										rB, gB, bB, 
										rC, gC, bC,
										rA, gA, bA, 
										rB, gB, bB, 
										rC, gC, bC);
	}
	
	// Set Array to display PatternCABDAB
	SetPatternCABDAB(rA, gA, bA, rB, gB, bB, rC, gC, bC, rD, gD, bD) {
		this.SetPatternFromRightBranch(	rA, gA, bA, 
										rB, gB, bB, 
										rC, gC, bC,
										rD, gD, bD, 
										rB, gB, bB, 
										rC, gC, bC);
	}
	
	// Set Array to display PatternCABDEB
	SetPatternCABDEB(rA, gA, bA, rB, gB, bB, rC, gC, bC, rD, gD, bD, rE, gE, bE) {
		this.SetPatternFromRightBranch(	rA, gA, bA, 
										rB, gB, bB, 
										rC, gC, bC,
										rD, gD, bD, 
										rE, gE, bE, 
										rC, gC, bC);
	}
	
	// Set Array to display PatternCABDEF
	SetPatternCABDEF(rA, gA, bA, rB, gB, bB, rC, gC, bC, rD, gD, bD, rE, gE, bE, rF, gF, bF) {
		this.SetPatternFromRightBranch(	rA, gA, bA, 
										rB, gB, bB, 
										rC, gC, bC,
										rD, gD, bD, 
										rE, gE, bE, 
										rF, gF, bF);
	}
}
