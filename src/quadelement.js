/*
QuadElement

The building block of the QuadArray and the displayed image.
*/

class QuadElement {

	constructor(_width, _height, _x, _y, _TorsionType = 1, _StrokeThickness = 0.25, _xOffset = 0, _yOffset = 0) {	
		this.width = _width;
		this.height = _height;
		this.x = _x;
		this.y = _y;
		this.QuadColor = {
			r: 256,
			g: 256,
			b: 256
		};
		this.TorsionType = _TorsionType;
		this.StrokeThickness = _StrokeThickness;
		this.xOffset = _xOffset;
		this.yOffset = _yOffset;
		
	}
	
	//
	DrawQuad() {	
		let TorsionType = this.TorsionType;
		let originX = (this.x * this.width)+this.xOffset;
		let originY = (this.y * this.height)+this.yOffset;
		
		strokeWeight(this.StrokeThickness);
		fill(this.QuadColor.r, this.QuadColor.g, this.QuadColor.b);
		
		quad(originX, originY,
			(originX + this.width), originY,
			(originX + this.width + (this.width * TorsionType)), (originY + this.height),
			(originX + (this.width * TorsionType)), (originY + this.height));	
	}
	
	SetQuadColor(r, g, b) {
		
		this.QuadColor.r = r;
		this.QuadColor.g = g;
		this.QuadColor.b = b;
		
	}
}