/*
QuadElement

The building block of the QuadArray and the displayed image.
*/

class QuadElement {

	constructor(_width, _height, _x, _y) {
		// Setting constructor variables to argument inputs
		this.width = _width;
		this.height = _height;
		this.x = _x;
		this.y = _y;
		
		// Setting constructor variables to default variables
		this.quadColor = {
			r: 256,
			g: 256,
			b: 256
		};
		this.torsionType = 1;
		this.strokeThickness = 0.5;
		this.xOffset = 0;
		this.yOffset = 0;
		
	}
	
	//
	DrawQuad() {	
		let originX = (this.x * this.width)+this.xOffset;
		let originY = (this.y * this.height)+this.yOffset;
		
		strokeWeight(this.strokeThickness);
		fill(this.quadColor.r, this.quadColor.g, this.quadColor.b);
		
		quad(originX, originY,
			(originX + this.width), originY,
			(originX + this.width + (this.width * this.torsionType)), (originY + this.height),
			(originX + (this.width * this.torsionType)), (originY + this.height));	
	}
	
	SetQuadColor(r, g, b) {
		
		this.quadColor.r = r;
		this.quadColor.g = g;
		this.quadColor.b = b;
		
	}
}