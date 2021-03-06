/*
QuadElement

The building block of the QuadArray and the displayed image.
*/

class QuadElement {

	constructor(_width, _height, _x, _y, _xOffset = 0, _yOffset = 0, _canvasInstance = null) {
		// Setting constructor variables to argument inputs
		this.width = _width;
		this.height = _height;
		this.x = _x;
		this.y = _y;
		this.canvasInstance = _canvasInstance;
		
		// Setting constructor variables to default variables
		this.quadColor = {
			r: 256,
			g: 256,
			b: 256
		};
		this.torsionType = 1;
		this.strokeThickness = 0.5;
		this.xOffset = _xOffset;
		this.yOffset = _yOffset;
		
	}
	
	//
	DrawQuad() {
		// Establishing whether the QuadElement is used in a single canvas instance 
		// or in multiple instances If this behaviour is not defined the base QuadElement
		// is incompatible
		// In the case of Torsie we do use multiple canvases to display the different patterns.
		if (this.canvasInstance == null) {
			let originX = (this.x * this.width)+this.xOffset;
			let originY = (this.y * this.height)+this.yOffset;
			let horizontalStroke = this.strokeThickness*2
			
			strokeWeight(this.strokeThickness);
			fill(this.quadColor.r, this.quadColor.g, this.quadColor.b);
			
			quad(originX, originY,
				(originX + this.width), originY,
				(originX + this.width + (this.width * this.torsionType)), (originY + this.height),
				(originX + (this.width * this.torsionType)), (originY + this.height));	

			// Draw lines on the top and bottom of the quad with a thicker stroke
			strokeWeight(horizontalStroke);
			line(originX, originY,
				 (originX + this.width), originY);
			line((originX + this.width + (this.width * this.torsionType)), (originY + this.height),
				 (originX + (this.width * this.torsionType)), (originY + this.height))
		}
		
		// Making a QuadElemet compatible with an instanced canvas is done simply by prefixing
		// the variables with this.canvasInstance. Makes for rather encumbersome reading but 
		// that's p5.js I guess.
		else if (this.canvasInstance != null) {
			let originX = (this.x * this.width)+this.xOffset;
			let originY = (this.y * this.height)+this.yOffset;
			let horizontalStroke = this.strokeThickness*2
			
			this.canvasInstance.strokeWeight(this.strokeThickness);
			this.canvasInstance.fill(this.quadColor.r, this.quadColor.g, this.quadColor.b);
			
			this.canvasInstance.quad(originX, originY,
				(originX + this.width), originY,
				(originX + this.width + (this.width * this.torsionType)), (originY + this.height),
				(originX + (this.width * this.torsionType)), (originY + this.height));	

			// Draw lines on the top and bottom of the quad with a thicker stroke
			this.canvasInstance.strokeWeight(horizontalStroke);
			this.canvasInstance.line(originX, originY,
				 (originX + this.width), originY);
			this.canvasInstance.line((originX + this.width + (this.width * this.torsionType)), (originY + this.height),
				 (originX + (this.width * this.torsionType)), (originY + this.height))
		}
		
		else {
			console.log('No canvas object nor instance called!')
		}
	}
	
	SetQuadColor(r, g, b) {
		
		this.quadColor.r = r;
		this.quadColor.g = g;
		this.quadColor.b = b;
		
	}
}