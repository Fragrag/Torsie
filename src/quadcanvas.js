class QuadCanvas {
	
	constructor(_rows, _columns, _quadHeight, _quadWidth, _canvasHeight, _canvasWidth, _canvasColor, _canvasInstanceName) {
		// Setting constructor iables to argument inputs
		this.rows = _rows;
		this.columns = _columns;
		this.quadHeight = _quadHeight;
		this.quadWidth = _quadWidth;
		this.canvasHeight = _canvasHeight;
		this.canvasWidth = _canvasWidth;
		this.canvasColor = _canvasColor;
		this.canvasInstanceName = _canvasInstanceName;
		
		// Initializing instances
		
		this.CanvasSetup = function(sketch) {
			
			sketch.setup = function() {
				sketch.createCanvas(this.canvasWidth, this.canvasHeight);
				sketch.quads = new QuadArray(this.rows, this.columns, this.quadHeight, this.quadWidth, sketch);
				sketch.quads.SetupQuadArray();
			}
		
			sketch.draw() = function() {
				sketch.translate(-this.quadWidth*4, 0);
				sketch.background(this.canvasColor);
				sketch.quads.SetPattern(128, 128, 128, 172, 172, 172);
			}
		}
		
		this.CanvasInstanceName = new p5(this.CanvasSetup);
	}
}