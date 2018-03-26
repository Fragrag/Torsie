class QuadCanvas {
	
	constructor(_rows, _columns, _quadHeight, _quadWidth, _canvasHeight, _canvasWidth, _canvasColor) {
		// Setting constructor variables to argument inputs
		let this.rows = _rows;
		let this.columns = _columns;
		let this.quadHeight = _quadHeight;
		let this.quadWidth = _quadWidth;
		let this.canvasHeight = _canvasHeight;
		let this.canvasWidth = _canvasWidth;
		let this.canvasColor = _canvasColor;
		
		// Initializing instances
		let this.quads = new QuadArray(this.rows, this.columns, this.quadHeight, this.quadWidth);
		let this.CanvasInstance;
	}
	
	
	this.CanvasInstance = function(p) {
		p.setup = function() {
			p.createCanvas(this.canvasWidth, this.canvasHeight);
			this.quads.SetupQuadArray();
		}
	
		p.CanvasInstance() {
			p.translate(-this.quadWidth*4, 0);
			p.background(this.canvasColor);
			this.quads.SetPattern(128, 128, 128, 172, 172, 172);
		}
	}
}