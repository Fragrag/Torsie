class QuadCanvas {
	
	constructor(_rows, _columns, _quadHeight, _quadWidth, _canvasHeight, _canvasWidth, _canvasColor, _canvasInstance) {
		// Setting constructor iables to argument inputs
		this.rows = _rows;
		this.columns = _columns;
		this.quadHeight = _quadHeight;
		this.quadWidth = _quadWidth;
		this.canvasHeight = _canvasHeight;
		this.canvasWidth = _canvasWidth;
		this.canvasColor = _canvasColor;
		this.canvasInstance = _canvasInstance;
		
		// Initializing instances
		this.quads = new QuadArray(this.rows, this.columns, this.quadHeight, this.quadWidth, this.canvasInstance);
		
		this.CanvasSetup = function(sketch) {
			
			sketch.setup = function() {
				sketch.createCanvas(this.canvasWidth, this.canvasHeight);
				this.quads.SetupQuadArray();
			}
		
			sketch.draw() = function() {
				sketch.translate(-this.quadWidth*4, 0);
				sketch.background(this.canvasColor);
				this.quads.SetPattern(128, 128, 128, 172, 172, 172);
			}
		}
		
		this.CanvasInstance = new p5(this.CanvasSetup);
	}
}