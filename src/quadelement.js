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
	}
	
	DrawQuad(TorsionType) {	
		var originX = this.x * this.width;
		var originY = this.y * this.height;
		
		strokeWeight(.5);
		fill(this.QuadColor.r, this.QuadColor.g, this.QuadColor.b);
		
		if (TorsionType == 0) {
			quad(originX, originY,
				(originX + this.width), originY,
				(originX), (originY + this.height),
				(originX - this.width), (originY + this.height));
		}
		else if (TorsionType == 1) {
			quad(originX, originY,
				(originX + this.width), originY,
				(originX + this.width), (originY + this.height),
				(originX), (originY + this.height));	
		}
		else if (TorsionType == 2) {
			quad(originX, originY,
				(originX + this.width), originY,
				(originX + (this.width*2)), (originY + this.height),
				(originX + this.height), (originY + this.height));	
		}
		// If TorsionType is not valid, default to drawing the Z type
		else { 
			quad(originX, originY,
				(originX + this.width), originY,
				(originX + (this.width + this.height)), (originY + this.height),
				(originX + this.height), (originY + this.height));	
		}
	}
	
	SetQuadColor(_r, _g, _b) {
		
		this.QuadColor.r = _r;
		this.QuadColor.g = _g;
		this.QuadColor.b = _b;
		
	}
	
	// TODO SetTorsieType()
	// Basically set the quads to display an S or Z torsion type.
	SetTorsionType(n) {
		
		if (n >= 0 && n <= 2) {
			this.TorsionType = n;
		}
		else {
			console.log("Not a valid TorsionType");
		}
	}
	
}