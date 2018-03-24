/*
QuadElement

The building block of the QuadArray and the displayed image.
*/

class QuadElement {

	constructor(_width, _height, _x, _y, _TorsionType) {	
		this.width = _width;
		this.height = _height;
		this.x = _x;
		this.y = _y;
		this.QuadColor = {
			r: 256,
			g: 256,
			b: 256
		};
		this.TorsionType = _TorsionType
	}
	
	//
	DrawQuad() {	
		let TorsionType = this.TorsionType;
		var originX = this.x * this.width;
		var originY = this.y * this.height;
		
		strokeWeight(.5);
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